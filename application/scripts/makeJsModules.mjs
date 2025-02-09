/** Imports **/
import fs from "fs";

/** Constants **/
const EXTENSION = "tsx";

/** Helper String Functions **/
const isFirstCapitalized = (text) => {
  return text[0] === text[0].toUpperCase();
};

const capitalizeFirstLetter = (text) => {
  if (text.length === 0) {
    return;
  }
  return text[0].toUpperCase() + text.substring(1);
};

const splitKebabCase = (text) => {
  return text.split(/[-]/);
};

const joinUpperCamelCase = (parts) => {
  return parts.map(capitalizeFirstLetter).join("");
};

/** Helper JS Functions */
const getJsModuleText = (mainModuleName, moduleName) => {
  return [
    "// Imports",
    'import { CSSProperties } from "react";',
    `import styles from \"./${mainModuleName}.module.css\";`,
    "",
    "// Parameters Interface",
    `interface ${moduleName}Parameters {`,
    "  className?: string;",
    "  style?: CSSProperties;",
    "}",
    "",
    "// Export Component",
    `export default function ${moduleName}({`,
    '  className = "",',
    "  style = {},",
    `}: ${moduleName}Parameters) {`,
    "  // XML Parameters",
    "  const containerStyle: CSSProperties = {",
    "    ...style",
    "  }",
    "",
    "  // Return Component",
    "  return (",
    "    <div",
    '      className={`${styles["container"]} ${className}`}',
    "      style={containerStyle}",
    "    >",
    `      ${moduleName}`,
    "    </div>",
    "  );",
    "}",
  ].join("\n");
};

const getChildrenJsModuleText = (mainModuleName, moduleName) => {
  return [
    "// Imports",
    'import { CSSProperties, ReactNode } from "react";',
    `import styles from "./${mainModuleName}.module.css";`,
    "",
    "// Parameters Interface",
    `interface ${moduleName}Parameters {`,
    "  className?: string;",
    "  style?: CSSProperties;",
    "  children: ReactNode;",
    "}",
    "",
    "// Export Component",
    `export default function ${moduleName}({`,
    '  className = "",',
    "  style = {},",
    "  children",
    `}: ${moduleName}Parameters) {`,
    "  // XML Parameters",
    "  const containerStyle: CSSProperties = {",
    "    ...style",
    "  }",
    "",
    "  // Return Component",
    "  return (",
    "    <div",
    '      className={`${styles["container"]} ${className}`}',
    "      style={containerStyle}",
    "    >",
    "      {children}",
    "    </div>",
    "  );",
    "}",
  ].join("\n");
};

/** Minor Functions **/
const makeCssModule = (folderPath, moduleName) => {
  const path = `${folderPath}/${moduleName}.module.css`;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, ".container {\n\tdisplay: block;\n}");
  }
};

const makeJsModule = (folderPath, withChildren, mainModuleName, moduleName) => {
  console.log(`${folderPath}/${moduleName}.${EXTENSION}`);
  const path = `${folderPath}/${moduleName}.${EXTENSION}`;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(
      path,
      withChildren
        ? getChildrenJsModuleText(mainModuleName, moduleName)
        : getJsModuleText(mainModuleName, moduleName),
    );
  }
};

/** Major Functions */
const makeJsMainModule = (folderPath, withChildren, moduleName) => {
  fs.mkdirSync(folderPath, { recursive: true });
  makeCssModule(folderPath, moduleName);
  makeJsModule(folderPath, withChildren, moduleName, moduleName);
};

/** Main Function **/
const makeJsModules = (args) => {
  // Throw an error if not enough arguments
  if (args.length < 4) {
    throw Error(
      "Not enough arguments.  Please enter a folder path and at least 1 module name to make a module",
    );
  }

  // Collect Enclosing Folder Path
  const folderPath = `./${args[2]}`;

  // Set Suffix
  let suffix = "";

  // Determine if the js module will have children
  let withChildren = false;

  // Make Js Modules from args
  for (let i = 3; i < args.length; i++) {
    // Collect the module
    const moduleText = args[i];

    // If the mark is --c, have children on the next ones
    if (moduleText === "--c") {
      withChildren = true;
      continue;
    }

    // If the mark is --nc, have no children on the next ones
    if (moduleText === "--nc") {
      withChildren = false;
      continue;
    }

    // Collect a Page suffix for the next children
    if (moduleText === "--p") {
      suffix = "Page";
      continue;
    }

    // Collect a Suffix for the next children
    if (moduleText === "--s") {
      i++;
      const newSuffix = args[i];
      suffix = newSuffix;
      continue;
    }

    // Delete a suffix for the next children if specified
    if (moduleText === "--ns") {
      suffix = "";
      continue;
    }

    // If it is in Upper-Camel-Case, make the module directly
    if (isFirstCapitalized(moduleText)) {
      makeJsMainModule(folderPath, withChildren, moduleText + suffix);
      continue;
    }

    // If it is Kebab-Case, make the folder first
    const moduleFolderPath = `${folderPath}/${moduleText}`;
    const kebabParts = splitKebabCase(moduleText);
    const moduleName = joinUpperCamelCase(kebabParts) + suffix;
    makeJsMainModule(moduleFolderPath, withChildren, moduleName);
  }
};

/** Main Execution **/
makeJsModules(process.argv);
