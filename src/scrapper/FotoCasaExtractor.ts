import { Page } from "puppeteer";
import { CookiesImp } from "../lib/Cookies";

export class FotoCasaExtractor {
  constructor(private page: Page, private cookies: CookiesImp) {}

  public async extract() {
    const URL =
      "https://www.fotocasa.es/buscar-agencias-inmobiliarias/barcelona-provincia/todas-las-zonas/l";
    await this.page.goto(URL);
    await this.cookies.set();
    await this.page.locator("#didomi-notice-agree-button").click();
  }
}
