import Image from "next/image";
export function UserSearch(){
    return (
      <div className="flex w-full items-center justify-between rounded-2xl bg-elevated p-2 pl-4 lg:pl-8 shadow-lg dark:bg-dark-elevated">
        <div className="flex w-full items-center gap-6">
          <Image src="/icon-search.svg" alt="" width="20" height="20" />
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="w-full bg-transparent outline-none placeholder:text-sm cursor-pointer"
          />
        </div>
        <div></div>
        <button className="rounded-xl bg-button px-6 py-3 w-[84px] md:w-auto flex justify-center text-white hover:brightness-125 text-sm md:text-base">
          Search 
        </button>
      </div>
    );
}