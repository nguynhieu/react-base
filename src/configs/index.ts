import DEV_ENV from "./env.dev";
import STG_ENV from "./env.stg";

let env = DEV_ENV;

if (process.env.REACT_APP_NODE_ENV === "staging") {
  env = STG_ENV;
}

export default env;
