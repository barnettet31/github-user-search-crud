import axios from "axios";
import { type IUserNameResult } from "./types";


export async function getUserDetails(url: string)
{
    const { data } = await axios.get<IUserNameResult>(`${url}`);
    return data;

}