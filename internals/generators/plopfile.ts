import { NodePlopAPI } from "plop";
import shell from "shelljs";

import { componentGenerator } from "./component";
import { containerGenerator } from "./container";

interface CustomActionData {
  path: string;
  file?: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("container", containerGenerator);

  plop.setActionType("prettify", (_, config) => {
    const data = config.data as CustomActionData;
    shell.exec(`yarn run prettify -- ${data.path}`, { silent: true });
    return "";
  });
}
