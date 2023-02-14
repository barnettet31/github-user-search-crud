import { api } from "../../utils/api";

export const CurrentUser = ()=>{
    const{isLoading, data:me} = api.me.getCurrentUser.useQuery(undefined, {
        retry:false
    });
    if(isLoading) return <div className="px-4 py-3 w-10 h-10 rounded bg-elevated animate-pulse dark:bg-dark-elevated"></div>
    return (
      <div className="px-4 py-3">
        <p className="text-sm">Signed in as</p>
        <p className="truncate text-xs">{me? me.email: "User Not Found"}</p>
      </div>
    ); 
}