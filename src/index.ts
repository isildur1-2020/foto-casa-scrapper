import "dotenv/config";
import { Logger } from "./lib/logs";
import { Cookies } from "./lib/Cookies";
import { Browser, Page } from "puppeteer";
import { Company } from "./models/Company";
import { MongoDB } from "./config/MongoDB";
import { Puppeteer } from "./lib/Puppeteer";
import { links_to_extract } from "./lib/constants";
import { CompanyService } from "./services/CompanyService";
import { FotoCasaScrapper } from "./scrapper/FotoCasaScrapper";

class Main {
  private browser: Browser | null = null;
  private page: Page | null = null;

  constructor(private puppeteer: Puppeteer) {}

  private async init() {
    await MongoDB.connect();
    await this.preparePuppeteer();
  }

  private async preparePuppeteer() {
    if (this.browser === null) {
      this.browser = await this.puppeteer.launchBrowser();
    }
    if (this.page === null) {
      this.page = await this.puppeteer.openPage();
    }
  }

  public async extract() {
    try {
      await this.init();
      const scrapper = new FotoCasaScrapper(
        this.page!,
        this.browser!,
        new Cookies(this.page!),
        new CompanyService(Company)
      );
      for (let item of links_to_extract) {
        await scrapper.extract({
          BASE_URL: item,
        });
      }
    } catch (err: any) {
      Logger.printErrMsg(err);
    }
  }
}

(async () => {
  const scrapper = new Main(new Puppeteer());
  await scrapper.extract();
})();
