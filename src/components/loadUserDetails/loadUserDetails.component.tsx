import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../axios/getUserDetails";
import { LoadingState } from "../loadingState/loadingState.component";
import { UserDetails } from "../userDetails/userDetails.component";

interface ILoadUserDetailsProps
{
    url: string;
    id:string;
    handleDelete:(link:string, listId:string)=>void;
    isDeleting:boolean;
}

export const LoadUserDetails = ({url, handleDelete, id, isDeleting}:ILoadUserDetailsProps)=>{
    const {isLoading, data:userData} = useQuery([url], ()=>getUserDetails(url), {
        refetchOnWindowFocus: false,
    });
    if(isLoading) return <LoadingState/>
    return (
      <div className="relative">
        <div className="absolute top-10 right-4 w-flex items-center justify-center">
          <button onClick={()=>handleDelete(url, id)} className="rounded-lg p-2 bg-button hover:bg-button/75 text-white">
           
            {isDeleting? <div className="w-4 h-4 rounded-full border-red-600 border-r-0 animate-spin"></div>:<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>}
          </button>
        </div>
        <UserDetails userData={userData} />
      </div>
    );
}