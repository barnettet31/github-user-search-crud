import axiosApi from "./config";
import { type IUserNameResult } from "./types";

export async function getUserInfo(username:string) {
  const {data} = await axiosApi.get<IUserNameResult>(`/${username}`);
  return data;

}