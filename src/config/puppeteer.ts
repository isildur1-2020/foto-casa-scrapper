import { PuppeteerLaunchOptions } from "puppeteer";
import { getRandomNumber } from "../lib/utils";
import { ARGS } from "./Args";

export const puppeteerConfig = () => {
  const configDev: PuppeteerLaunchOptions = {
    slowMo: 100,
    headless: false,
    defaultViewport: {
      width: ARGS.WINDOW_WIDTH,
      height: ARGS.WINDOW_HEIGHT,
    },
    args: [`--window-size=${ARGS.WINDOW_WIDTH},${ARGS.WINDOW_HEIGHT}`],
  };
  const configProd: PuppeteerLaunchOptions = {
    headless: true,
    executablePath: "/usr/bin/chromium",
    slowMo: getRandomNumber(450, 700),
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  };
  if (ARGS.APP_ENV === "prod") return configProd;
  return configDev;
};
