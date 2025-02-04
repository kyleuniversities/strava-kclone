// Constants
const DEFAULT_HOST = "/api";

// Export Methods
export const fullRequest = async (
  host: string,
  url: string,
  options: any = { method: "GET" },
) => {
  try {
    const response = await fetch(`${host}/${url}`, options);
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const request = async (
  url: string,
  options: any = { method: "GET" },
) => {
  return await fullRequest(DEFAULT_HOST, url, options);
};
