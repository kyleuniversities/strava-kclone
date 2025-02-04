// Imports
import fs from "fs";

export default class FileHelper {
  // Delete file
  static deleteFile(path: string) {
    fs.unlinkSync(FileHelper.toRootPath(path));
  }

  // Export JSON
  static exportJson(json: any, path: string) {
    fs.writeFileSync(
      FileHelper.toRootPath(path),
      JSON.stringify(json, null, 2),
    );
  }

  // Export text
  static exportText(text: string, path: string) {
    fs.writeFileSync(FileHelper.toRootPath(path), text);
  }

  // File Exists
  static fileExists(path: string) {
    return fs.existsSync(FileHelper.toRootPath(path));
  }

  // Get JSON
  static getJson(path: string): any {
    return JSON.parse(FileHelper.getText(path));
  }

  // Get Text
  static getText(path: string): any {
    return fs.readFileSync(FileHelper.toRootPath(path), {
      encoding: "utf8",
      flag: "r",
    });
  }

  // Make Directory
  static makeDirectory(path: string) {
    return fs.mkdirSync(FileHelper.toRootPath(path), { recursive: true });
  }

  // To Root Path
  static toRootPath(path: string): string {
    const directoryPath = __dirname;
    const nextIndex = directoryPath.indexOf(".next");
    const rootDirectoryPath = directoryPath.substring(0, nextIndex - 1);
    let newPath = path;
    return `${rootDirectoryPath}/${newPath}`;
  }
}
