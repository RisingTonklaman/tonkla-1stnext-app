import axios from "axios";

// ✅ ฟังก์ชัน GET ที่ไม่ใช้ type ของ axios โดยตรง
export const apiGet = async <T = any>(
  endpoint: string,
  config?: Record<string, any>,
  auth: boolean = false
): Promise<{
  data: T | null;
  status: number;
  message_error?: string;
  status_error?: string | number;
}> => {
  try {
    // ถ้า auth == true, เพิ่ม header Authorization
    const headers: Record<string, string> = config?.headers ?? {};
    if (auth) {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    const response = await axios.get(
      `http://localhost:3003/api/v1${endpoint}`,
      {
        ...config,
        headers,
      }
    );

    return {
      data: response.data as T,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: null,
      status: error?.response?.status ?? 500,
      message_error: error?.response?.data?.D ?? error.message ?? "Unknown error",
      status_error: error?.response?.status ?? error.status ?? "Unknown error",
    };
  }
};



export const apiPost = async <T = any>(
  endpoint: string,
  data?: any,
  config?: Record<string, any>,
  auth: boolean = false
): Promise<{
  data: T | null;
  status: number;
  error?: string;
}> => {
  try {
    // ถ้า auth == true, เพิ่ม header Authorization
    const headers: Record<string, string> = config?.headers ?? {};
    if (auth) {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers["Authorization"] = `Bearer ${token}`;
      }
    }

    const response = await axios.post(
      `http://localhost:3003/api/v1${endpoint}`,
      data,
      {
        ...config,
        headers,
      }
    );

    return {
      data: response.data as T,
      status: response.status,
    };
  } catch (error: any) {
    return {
      data: null,
      status: error?.response?.status ?? 500,
      error: error?.response?.data?.message ?? error.message ?? "Unknown error",
    };
  }
};
