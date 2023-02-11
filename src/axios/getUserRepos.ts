import axiosApi from "./config";

export async function getUserRepos(username:string) {
  return axiosApi.get(`/${username}/repos`);
}