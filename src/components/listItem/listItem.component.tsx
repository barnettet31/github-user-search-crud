import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type IUserNameResult } from "../../axios/types";
import { ListItemError } from "../listItemError/listItemError.component";
import { UserDetails } from "../userDetails/userDetails.component";
import { DeleteButton } from "../deleteButton/deleteButton.component";

interface IListItemProps
{
    url: string;
}

export const ListItem = ({url}:IListItemProps)=>{
    const { data, isLoading: loadingUser, error } = useQuery(
      [url],
      async () =>{
          const data = await axios.get<IUserNameResult>(url)
          return data.data;
    } ,
        
      {
        retry: 0,
      }
    );
    if(loadingUser) return <p>loading...</p>;
    if (!data || error) return <ListItemError />;
    return (
      <div className="relative">
        <DeleteButton url={url}/>
        <UserDetails userData={data} />
      </div>
    );
}