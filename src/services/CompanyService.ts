import { Logger } from "../lib/logs";
import { CompanyModel } from "../models/Company";
import { RealStateBusinessInfo } from "../lib/constants";

export type CompanyServiceImp = {
  createMany: (companies: RealStateBusinessInfo[]) => Promise<void>;
};

export class CompanyService {
  constructor(private companyModel: CompanyModel) {}

  public async createMany(companies: RealStateBusinessInfo[]) {
    try {
      for (let company of companies) {
        const { email } = company;
        const isEmailUnique = await this.isEmailUnique(email);
        if (isEmailUnique) {
          await this.companyModel.create(company);
        }
      }
      Logger.printProgressMsg("[COMPANY MODEL]: Data created successfully!");
    } catch (err: any) {
      Logger.printErrMsg(`[COMPANY MODEL]: An error occurred, ${err.message}`);
    }
  }

  private async isEmailUnique(email: string) {
    try {
      const companyFound = await this.companyModel.findOne({ email });
      if (companyFound !== null) return false;
      return true;
    } catch (err: any) {
      throw new Error(`[COMPANY MODEL]: ${err.message}`);
    }
  }
}
