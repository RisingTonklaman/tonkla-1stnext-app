const ACCESS_TOKEN = "ACCESS_TOKEN";

export const addAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN);
