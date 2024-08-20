import { Schema, Model, model } from "mongoose";

export type ICompany = {
  companyName: string;
  email: string;
  was_used?: boolean;
  baseURL: string;
};

export type CompanyModel = Model<ICompany>;

const companySchema = new Schema<ICompany, CompanyModel>(
  {
    companyName: String,
    email: String,
    baseURL: String,
    was_used: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Company = model<ICompany, CompanyModel>("fotocasa", companySchema);
