import axios from "axios";
import Cookies from "js-cookie";

// ตัวอย่างฟังก์ชัน refreshToken
const refreshToken = async (): Promise<string> => {
  // ✅ ไม่ต้องดึงจาก Cookies.get() ก็ได้ เพราะ backend อ่าน cookie เอง
  const response = await axios.post(
    "http://localhost:3003/api/v1/user/refresh",
    {}, // body ว่าง
    { withCredentials: true } // config (ถูกต้อง!)
  );

  const newAccessToken = response.data.newAccessToken;
  console.log("refreshToken: ", newAccessToken);
  localStorage.setItem("accessToken", newAccessToken);
  return newAccessToken;
};

// ✅ GET
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
  const headers: Record<string, string> = config?.headers ?? {};
  if (auth) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  try {
    const response = await axios.get(
      `http://localhost:3003/api/v1${endpoint}`,
      {
        ...config,
        headers,
        withCredentials: true, // ✅ เพิ่ม credentials
      }
    );

    return {
      data: response.data as T,
      status: response.status,
    };
  } catch (error: any) {
    if (auth && error?.response?.status === 401 && !config?.__isRetry) {
      try {
        const newToken = await refreshToken();
        return await apiGet(
          endpoint,
          {
            ...config,
            headers: {
              ...headers,
              Authorization: `Bearer ${newToken}`,
            },
            withCredentials: true, // ✅ เพิ่ม credentials ใน retry ด้วย
            __isRetry: true,
          },
          auth
        );
      } catch (refreshError: any) {


        return {
          data: null,
          status: refreshError?.response?.status ?? 500,
          message_error:
            refreshError?.response?.data?.message ?? refreshError.message,
          status_error: refreshError?.response?.status ?? "Unknown error",
        };
      }
    }

    return {
      data: null,
      status: error?.response?.status ?? 500,
      message_error: error?.response?.data?.D ?? error.message ?? "Unknown error",
      status_error: error?.response?.status ?? error.status ?? "Unknown error",
    };
  }
};

// ✅ POST
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
  const headers: Record<string, string> = config?.headers ?? {};
  if (auth) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
  }

  try {
    const response = await axios.post(
      `http://localhost:3003/api/v1${endpoint}`,
      data,
      {
        ...config,
        headers,
        withCredentials: true, // ✅ เพิ่ม credentials
      }
    );

    return {
      data: response.data as T,
      status: response.status,
    };
  } catch (error: any) {
    if (auth && error?.response?.status === 401 && !config?.__isRetry) {
      try {
        const newToken = await refreshToken();
        return await apiPost(
          endpoint,
          data,
          {
            ...config,
            headers: {
              ...headers,
              Authorization: `Bearer ${newToken}`,
            },
            withCredentials: true, // ✅ เพิ่ม credentials ใน retry ด้วย
            __isRetry: true,
          },
          auth
        );
      } catch (refreshError: any) {
        return {
          data: null,
          status: refreshError?.response?.status ?? 500,
          error:
            refreshError?.response?.data?.message ?? refreshError.message,
        };
      }
    }

    return {
      data: null,
      status: error?.response?.status ?? 500,
      error: error?.response?.data?.message ?? error.message ?? "Unknown error",
    };
  }
};
