import { join } from "path";
import { writeFile, readFile, access, constants } from "fs/promises";
import { Cookie, CookieParam, Page } from "puppeteer";
import { Logger } from "./logs";

export type CookiesImp = {
  save: (cookies: Cookie[]) => Promise<void>;
  set: () => Promise<void>;
};

export class Cookies implements CookiesImp {
  private COOKIES_PATH = join(process.cwd(), "cookies.json");

  constructor(private puppeteerPage: Page) {}

  private async check() {
    try {
      await access(this.COOKIES_PATH, constants.F_OK);
      Logger.printProgressMsg("[COOKIES CHECK] COOKIES WAS FOUND SUCCESSFULLY");
      return true;
    } catch (err: any) {
      Logger.printErrMsg("[COOKIES CHECK] THERE ARE NO COOKIES SAVED");
      return false;
    }
  }

  private async get() {
    const thereAreCookies = await this.check();
    if (!thereAreCookies) return null;
    const cookiesSaved = await readFile(this.COOKIES_PATH, {
      encoding: "utf-8",
    });
    const cookiesParsed = JSON.parse(cookiesSaved);
    return cookiesParsed as CookieParam[];
  }

  public async save(cookies: Cookie[]) {
    try {
      await writeFile(this.COOKIES_PATH, JSON.stringify(cookies, null, 2));
      Logger.printProgressMsg("[COOKIES SAVE]: COOKIES SAVED SUCCESSFULLY");
    } catch (err) {
      Logger.printErrMsg(`[COOKIES SAVE]: ERR\n${err}`);
    }
  }

  public async set() {
    const cookies = await this.get();
    if (cookies !== null) {
      await this.puppeteerPage.setCookie(...cookies);
    }
  }
}
