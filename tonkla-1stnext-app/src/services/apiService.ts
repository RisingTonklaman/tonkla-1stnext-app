import axios from "axios";

// ✅ ฟังก์ชัน GET ที่ไม่ใช้ type ของ axios โดยตรง
export const apiGet = async <T = any>(
  endpoint: string,
  config?: Record<string, any> // ใช้ Record แทน AxiosRequestConfig
): Promise<{
  data: T | null;
  status: number;
  error?: string;
}> => {
  try {
    const response = await axios.get(`http://localhost:3003/api/v1${endpoint}`, config);
    return {
      data: response.data as T,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: null,
      status: error?.response?.status ?? 500,
      error1: error?.response?.data?.message ?? error.message ?? "Unknown error",
      error2: error?.response?.status ?? error.status ?? "Unknown error",

    };
  }
};
