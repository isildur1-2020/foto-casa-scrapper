import { Page, Browser, BrowserContext } from "puppeteer";
import { CookiesImp } from "../lib/Cookies";
import { RealStateBusinessInfo, RealStateMainInfo } from "../lib/constants";
import { CompanyServiceImp } from "../services/CompanyService";
import { Logger } from "../lib/logs";

export class FotoCasaScrapper {
  constructor(
    private page: Page,
    private browser: Browser,
    private cookies: CookiesImp,
    private companyService: CompanyServiceImp
  ) {}

  public async extract({ BASE_URL }: { BASE_URL: string }) {
    await this.init(BASE_URL);
    const lastPage = await this.getLastPage(BASE_URL);
    Logger.printProgressMsg(`[SCRAPPER]: LAST PAGE ${lastPage} `);
    for (let i = 1; i <= lastPage; i++) {
      Logger.printProgressMsg(`\n[SCRAPPER]: PAGE NUMBER ${i}`);
      Logger.printProgressMsg(`[SCRAPPER]: BASE URL ${BASE_URL}`);
      const AUX_URL = `${BASE_URL}?pagina=${i}`;
      const ctx = await this.browser.createBrowserContext();
      this.page = await ctx.newPage();
      await this.init(AUX_URL);

      const realStateMainData = await this.extractMainInfo(AUX_URL);

      let extractionPromises: Promise<RealStateBusinessInfo>[] = [];
      for (let realState of realStateMainData) {
        extractionPromises.push(this.extractBusinessInfo({ ctx, realState }));
      }
      const realStateBusinessData = await Promise.all(extractionPromises);
      this.printBusinessData(realStateBusinessData);
      await this.companyService.createMany(realStateBusinessData);
      ctx.close();
    }
  }

  private async init(URL: string) {
    await this.cookies.set();
    await this.page.goto(URL);
    await this.acceptCookies();
  }

  private async acceptCookies() {
    await this.page.locator("#didomi-notice-agree-button").click();
  }

  private async getLastPage(URL: string) {
    await this.page.goto(`${URL}?pagina=${10 ** 10}`);
    const handleGetLastPage = () => {
      const lastPageText = document.querySelector(
        ".sui-MoleculePagination-item.current.primary span"
      ) as HTMLSpanElement;
      return lastPageText.textContent;
    };
    const lastPageText = await this.page.evaluate(handleGetLastPage);
    return Number(lastPageText);
  }

  private async extractMainInfo(URL: string): Promise<RealStateMainInfo[]> {
    await this.page.goto(URL);
    function handleExtraction() {
      const container = document.querySelectorAll(".re-CardPackMinimal");
      return Array.from(container).map((realState) => {
        const companyName = realState.querySelector(
          ".re-CardHeader-title"
        ) as HTMLSpanElement;
        const infoLink = realState.querySelector(
          ".re-CardContact-appendix > a"
        ) as HTMLAnchorElement;

        return {
          companyName: companyName.textContent ?? "N/A",
          infoLink: infoLink.href ?? "N/A",
        };
      });
    }
    return await this.page.evaluate(handleExtraction);
  }

  private async extractBusinessInfo({
    ctx,
    realState,
  }: {
    ctx: BrowserContext;
    realState: RealStateMainInfo;
  }): Promise<RealStateBusinessInfo> {
    const { infoLink } = realState;
    const newPage = await ctx.newPage();
    await newPage.goto(infoLink);
    const emailElement = await newPage.evaluate(() => {
      const emailElement = document.querySelector(
        ".re-AgencyBanner-contactInfo > a"
      ) as HTMLAnchorElement;
      return emailElement.href;
    });
    await newPage.close();

    return {
      ...realState,
      email: emailElement.split(":")[1],
    };
  }

  private printBusinessData(info: RealStateBusinessInfo[]) {
    Logger.printProgressMsg("\n=====================================");
    info.map((el) => {
      const { companyName, email } = el;
      Logger.printProgressMsg(`-> COMPANY NAME: ${companyName}`);
      Logger.printProgressMsg(`-> EMAIL: ${email}\n`);
    });
    Logger.printProgressMsg("================================\n");
  }
}
