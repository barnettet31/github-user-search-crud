import Image from "next/image";
export function UserDetails(){
    return (
      <div className="mt-6 flex flex-col rounded-xl bg-elevated px-6 py-8 shadow-lg dark:bg-dark-elevated">
        <div className="div flex h-[70px] items-center justify-start gap-5 md:h-[117px]">
          <div className="h-[70px] w-[70px] rounded-full bg-red-500 md:h-[117px] md:w-[117px] "></div>
          <div className="flex flex-col">
            <h2 className="text-base font-bold">The Octocat</h2>
            <p className="text-base text-button ">@octocat</p>
            <p className="text-base">Joined 25 Jan 2011</p>
          </div>
        </div>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        <div className="mt-8 flex items-center justify-center rounded-xl bg-main py-5 px-4 dark:bg-dark-main">
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Repos</p>
            <p className="text-base font-bold">8</p>
          </div>
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Followers</p>
            <p className="text-base font-bold">3938</p>
          </div>
          <div className="flex w-1/3 flex-col gap-2 text-center md:px-8 md:text-left">
            <p className="text-xs">Following</p>
            <p className="text-base font-bold">9</p>
          </div>
        </div>
        <div className="mt-9 grid grid-cols-1 justify-items-start  gap-4 md:grid-cols-2">
          <div className="flex items-center gap-5">
            <Image
              src="/icon-location.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>San Francisco</span>
          </div>
          <div className="flex cursor-pointer items-center gap-5 hover:underline">
            <Image
              src="/icon-website.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <a href="https://github.blog" target="_blank" rel="noreferrer">
              https://github.blog
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src="/icon-twitter.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>Not Available</span>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src="/icon-company.svg"
              className="brightness-200 grayscale"
              width={14}
              height={20}
              alt=""
            />
            <span>@github</span>
          </div>
        </div>
      </div>
    );
}