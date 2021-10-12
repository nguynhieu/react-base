import { lazyLoad } from "utils/loadable";

export const Shop = lazyLoad(
  () => import("./index"),
  (module) => module.Shop
);
