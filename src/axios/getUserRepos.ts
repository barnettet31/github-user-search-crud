import axiosApi from "./config";
import { type IUserReposResult } from "./types";

export async function getUserRepos(username: string) {
  const data = await axiosApi.get<IUserReposResult[]>(`/${username}/repos`);
  return data.data;
}
