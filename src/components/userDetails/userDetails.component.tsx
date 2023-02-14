import Image from "next/image";
import { type IUserNameResult } from "../../axios/types";
import { DefaultDetails } from "../defaultDetails/defaultDetails.component";
interface IUserDetails {
  userData: IUserNameResult | undefined;
}
export function UserDetails({userData}:IUserDetails){
    if(!userData) return <DefaultDetails/>
    return (
      <div className="mt-6 flex flex-col rounded-xl bg-elevated px-6 py-8 shadow-lg dark:bg-dark-elevated h-full justify-between">
        <div className="div flex h-[70px] items-center justify-start gap-5 md:h-[117px]">
          <Image
            className="h-[70px] w-[70px] rounded-full md:h-[117px] md:w-[117px] "
            width={117}
            height={117}
            src={userData.avatar_url}
            alt="user profile"
          />
          <div className="flex flex-col">
            <h2 className="text-base font-bold">{userData.name}</h2>
            <p className="text-base text-button ">@{userData.login}</p>
            <p className="text-base">
              Joined {`${new Date(userData.created_at).toDateString()} `}
            </p>
          </div>
        </div>
        <p className="mt-6">
          {userData.bio? userData.bio : "No bio available"}
        </p>
        <div className="mt-8 flex items-center justify-center rounded-xl bg-main py-5 px-4 dark:bg-dark-main">
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Repos</p>
            <p className="text-base font-bold">{userData.public_repos}</p>
          </div>
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Followers</p>
            <p className="text-base font-bold">{userData.followers}</p>
          </div>
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Following</p>
            <p className="text-base font-bold">{userData.following}</p>
          </div>
        </div>
        <div className="mt-9 grid grid-cols-1 justify-items-start  gap-4 md:grid-cols-2">
          <div className="flex items-center gap-5 overflow-hidden text-ellipsis w-full">
            <Image
              src="/icon-location.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>{userData.location}</span>
          </div>
          <div className={`flex items-center gap-5 overflow-hidden text-ellipsis w-full hover:underline ${
              userData.blog ? "" : "opacity-50"
            }`}>
            <Image
              src="/icon-website.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <a href={userData.blog} target="_blank" rel="noreferrer">
              {userData.blog ? userData.blog : "Not Available"}
            </a>
          </div>
          <div
            className={`flex items-center gap-5 overflow-hidden text-ellipsis w-full ${
              userData.twitter_username ? "" : "opacity-50"
            }`}
          >
            <Image
              src="/icon-twitter.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>
              {userData.twitter_username
                ? userData.twitter_username
                : "Not Available"}
            </span>
          </div>
          <div
            className={`flex items-center gap-5 overflow-hidden text-ellipsis w-full ${
              userData.company ? "" : "opacity-50"
            }`}
          >
            <Image
              src="/icon-company.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>{userData.company ? userData.company : "Not Available"}</span>
          </div>
        </div>
      </div>
    );
}