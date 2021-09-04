import path from "path";
import fs from "fs";

export const componentExists = (component: string) => {
  const components = fs.readdirSync("src/app/components");
  return components.indexOf(component) > -1;
};

export const containerExists = (container: string) => {
  const containers = fs.readdirSync("src/app/containers");
  return containers.indexOf(container) > -1;
};

const walkDir = (dir: string) => {
  let dirList: string[] = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      dirList.push(p);
      dirList = [...dirList, ...walkDir(p)];
    }
  }

  return dirList;
};

export const listComponentsDirectories = () => {
  // Not using path.join(__dirname,) as it give really long name when listed
  const sourceDir = "src/";
  return walkDir(sourceDir).filter((dirPath) => dirPath.match(/components$/));
};
