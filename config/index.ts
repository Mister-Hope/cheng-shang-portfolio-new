import type { Config } from "@/src/types";

import { enConfig } from "./en.js";
import { zhConfig } from "./zh.js";

export const configs: Record<string, Config> = {
  en: enConfig,
  zh: zhConfig,
};
