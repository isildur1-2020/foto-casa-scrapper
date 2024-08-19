export class ARGS {
  public static APP_ENV = process.env.APP_ENV ?? "dev";
  public static PROXY_SERVER = process.env.PROXY_SERVER ?? null;

  public static WINDOW_WIDTH = process.env.WINDOW_WIDTH
    ? Number(process.env.WINDOW_WIDTH)
    : 0;
  public static WINDOW_HEIGHT = process.env.WINDOW_HEIGHT
    ? Number(process.env.WINDOW_HEIGHT)
    : 0;

  public static MONGO_USER = process.env.MONGO_USER;
  public static MONGO_PASSWORD = process.env.MONGO_PASSWORD;
  public static MONGO_DATABASE = process.env.MONGO_DATABASE;
  public static MONGO_HOST = process.env.MONGO_HOST;
}
