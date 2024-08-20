import { Logger } from "../lib/logs";
import { CompanyModel } from "../models/Company";
import { RealStateBusinessInfo } from "../lib/constants";

export type CompanyServiceImp = {
  createMany: (data: RealStateBusinessInfo[]) => Promise<void>;
};

export class CompanyService {
  constructor(private companyModel: CompanyModel) {}

  public async createMany(data: RealStateBusinessInfo[]) {
    try {
      await this.companyModel.create(data);
      Logger.printProgressMsg("[COMPANY MODEL]: Data created successfully!");
    } catch (err: any) {
      Logger.printErrMsg(`[COMPANY MODEL]: An error occurred, ${err.message}`);
    }
  }
}
