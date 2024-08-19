import "dotenv/config";
import { MongoDB } from "./config/MongoDB";
import { Logger } from "./lib/logs";
import { FotoCasaExtractor } from "./scrapper/FotoCasaExtractor";
import { Cookies } from "./lib/Cookies";
import { Puppeteer } from "./lib/Puppeteer";
import { Browser, Page } from "puppeteer";

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
      const scrapper = new FotoCasaExtractor(
        this.page!,
        new Cookies(this.page!)
      );
      await scrapper.extract();
    } catch (err: any) {
      Logger.printErrMsg(err);
    }
  }
}

(async () => {
  const scrapper = new Main(new Puppeteer());
  await scrapper.extract();
})();
