// Imports
import { NextRequest } from "next/server";

// Export Helper Class
export default class QueryHelper {
  static getQuery(request: NextRequest) {
    const query: any = {};
    const url = request.url;
    const questionIndex = url.indexOf("?");
    const queryText = url.substring(questionIndex + 1);
    const parts = queryText.split(/[&]/);
    for (let part of parts) {
      const keyValueParts = part.split(/[=]/);
      const key = keyValueParts[0];
      const value = keyValueParts[1];
      query[key] = value;
    }
    return query;
  }
}
