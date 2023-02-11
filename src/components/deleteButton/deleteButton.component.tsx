import { useQueryClient } from "@tanstack/react-query";
import { api } from "../../utils/api";

export const DeleteButton =({url}:{url:string})=>{
    const utils = api.useContext();
    const queryClient = useQueryClient();
    const {mutate, isLoading:deletingElement} = api.list.deleteItem.useMutation({
        onSettled:()=>{
            console.log('this is getting fired')
             void utils.list.getListItems.invalidate();
             void queryClient.invalidateQueries();
           
        }
    });
    const handleClick = ()=>{
        mutate({link:url});
       
    }
    if(deletingElement) return <div className="absolute right-4 top-10 w-8 h-8 border-red-500 rounded-full border border-r-0 animate-spin"></div>
    return (
      <button onClick={handleClick} className="text-red absolute top-10 right-4 rounded-lg bg-button px-2 py-2 hover:bg-button/75">
        <svg
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
        </svg>
      </button>
    );
}