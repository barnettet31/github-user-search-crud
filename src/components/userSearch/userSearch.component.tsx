/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from "next/image";
import { type SubmitHandler, useForm } from "react-hook-form";
interface IUserSearch
{
  search: (id: string) => void;
  isError: boolean;
  clearError: () => void;
}
interface ISearch {
  search: string;
}
export function UserSearch({search, isError, clearError}:IUserSearch){
    const {reset, handleSubmit, register} = useForm({
      defaultValues: {
        search: "",
      }
    

    })
    const onSubmit:SubmitHandler<ISearch> = (data) => {
      if(data.search.length <3) return;
      search(data.search);
      clearError();
      return reset();
    }
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full items-center justify-between rounded-2xl bg-elevated p-2 pl-4 lg:pl-8 shadow-lg dark:bg-dark-elevated">
        <div className="flex w-full items-center gap-6">
          <Image src="/icon-search.svg" alt="" width="20" height="20" />
          <input
            {...register("search")}
            type="text"
            placeholder="Search GitHub username..."
            className="w-full h-full bg-transparent outline-none placeholder:text-sm cursor-pointer"
          />
        </div>
        <div className="relative w-0 lg:w-1/4">{isError ? <span className="text-red-500 absolute bottom-8 -right-24 w-[100px] lg:static lg:w-full">No results</span>:null}</div>
        <button className="rounded-xl bg-button px-6 py-3 w-[84px] md:w-auto flex justify-center text-white hover:brightness-125 text-sm md:text-base">
          Search 
        </button>
      </form>
    );
}