import "i18next";
import { resources } from "../i18next.config";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}