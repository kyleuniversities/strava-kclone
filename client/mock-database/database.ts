// Imports
import FileHelper from "./fileHelper";

// Constants
const DATA_FOLDER_PATH = `/data`;

// Types
type TableRecord = any;
type TableData = TableRecord[];

/**
 * Class that simulates a Mock Database
 */
export default class Database {
  // Helper Methods
  private static exportTable(name: string, tableData: TableData): void {
    FileHelper.exportJson(tableData, Database.getTablePath(name));
  }

  private static getPath(path: string): string {
    return `${DATA_FOLDER_PATH}/${path}`;
  }

  private static getTable(name: string): TableData {
    return FileHelper.getJson(Database.getTablePath(name));
  }

  private static getTablePath(name: string): string {
    return Database.getPath(`${name}.json`);
  }

  // Interface Methods
  static async createTable(name: string) {
    const tablePath = Database.getTablePath(name);
    if (!FileHelper.fileExists(DATA_FOLDER_PATH)) {
      FileHelper.makeDirectory(DATA_FOLDER_PATH);
    }
    if (!FileHelper.fileExists(tablePath)) {
      FileHelper.exportJson([], tablePath);
    }
  }

  static async delete(tableName: string, queries: any) {
    Database.createTable(tableName);
    const tableData = Database.getTable(tableName);
    const newTableData = [];
    const queryKeys = Object.keys(queries);
    for (let record of tableData) {
      let willDelete = true;
      for (let queryKey of queryKeys) {
        const query = queries[queryKey];
        if (!(queryKey in record) || !record[queryKey].includes(query)) {
          willDelete = false;
          newTableData.push(record);
          break;
        }
      }
    }
    Database.exportTable(tableName, newTableData);
  }

  static async dropTable(name: string) {
    FileHelper.deleteFile(Database.getTablePath(name));
  }

  static async insertInto(tableName: string, values: TableRecord[]) {
    Database.createTable(tableName);
    const tableData = Database.getTable(tableName);
    for (let value of values) {
      tableData.push({
        id: `${new Date().getTime()}`,
        ...value,
      });
    }
    Database.exportTable(tableName, tableData);
  }

  static async insertOneInto(tableName: string, value: TableRecord) {
    Database.insertInto(tableName, [value]);
  }

  static async selectFrom(
    tableName: string,
    queries: any = {},
  ): Promise<TableData> {
    Database.createTable(tableName);
    let selectedData = Database.getTable(tableName);
    const queryKeys = Object.keys(queries);
    for (let queryKey of queryKeys) {
      const query = queries[queryKey];
      selectedData = selectedData.filter(
        (record: TableRecord) =>
          queryKey in record && record[queryKey].includes(query),
      );
    }
    return selectedData;
  }

  static async update(tableName: string, queries: any, update: any) {
    Database.createTable(tableName);
    const tableData = Database.getTable(tableName);
    const queryKeys = Object.keys(queries);
    const updateKeys = Object.keys(update);
    for (let record of tableData) {
      let match = true;
      for (let queryKey of queryKeys) {
        const query = queries[queryKey];
        if (!(queryKey in record) || !record[queryKey].includes(query)) {
          match = false;
          break;
        }
      }
      if (match) {
        for (let updateKey of updateKeys) {
          const updateValue = queries[updateKey];
          record[updateKey] = updateValue;
        }
      }
    }
    Database.exportTable(tableName, tableData);
  }
}
