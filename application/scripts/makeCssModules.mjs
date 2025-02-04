// Imports
import fs from "fs";

/** Major Functions **/
// Gets the parent folder path
const getParentFolderPath = (path) => {
  return path.substring(0, path.lastIndexOf("/"));
};

// Gets the extensionless file name
const getExtensionlessFileName = (path) => {
  return path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf("."));
};

// Iterates through non-folder file descendants
const forEachDescendant = (folderPath, relativePath, fileAction) => {
  // Checks all file children of the folder
  const children = fs.readdirSync(folderPath);

  // Iterates through all children
  for (let child of children) {
    // If the child is a directory, recurse
    // If not, perform the file action
    const childPath = `${folderPath}/${child}`;
    if (fs.statSync(childPath).isDirectory()) {
      forEachDescendant(childPath, `${relativePath}/${child}`, fileAction);
      continue;
    }
    fileAction(childPath);
  }
};

const createCssModule = (path) => {
  // If the TSX file has a referenced module file
  // create it if it does not already exist
  if (path.endsWith(".tsx")) {
    const text = fs.readFileSync(path, "utf8");
    const moduleName = getExtensionlessFileName(path);

    // Checks if there is a self-referenced module
    // Creates on if not existent
    const selfModuleIsReferenced = text.includes(
      `import styles from "./${moduleName}.module.css"`,
    );
    const parentFolderPath = getParentFolderPath(path);
    const selfModulePath = `${parentFolderPath}/${moduleName}.module.css`;
    const selfModuleExists = fs.existsSync(selfModulePath);
    if (selfModuleIsReferenced && !selfModuleExists) {
      console.log(selfModulePath);
      fs.writeFileSync(selfModulePath, ".container {\n    display: block;\n}");
    }
  }
};

/** Main Function **/
const makeCssModules = () => {
  // Sets up important folders
  const moduleFolders = ["page", "component"];

  // Iterates through folders with important TSX files
  for (let moduleFolder of moduleFolders) {
    const folderPath = `./${moduleFolder}`;

    // Iterates through each TSX file
    forEachDescendant(folderPath, "", createCssModule);
  }
};

// Main Execution
makeCssModules();
