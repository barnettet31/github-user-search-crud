import { type GetServerSidePropsContext} from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../_app";
import { getDashboardLayout } from "./layout";
import { LightDarkToggle } from "../../components/lightDarkToggle/lightDarkToggle.component";
import { UserSearch } from "../../components/userSearch/userSearch.component";
import { UserDetails } from "../../components/userDetails/userDetails.component";
import { AddToListButton } from "../../components/addToListButton/addToListButton.component";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../axios/getUserInfo";
import { useState } from "react";
import { api } from "../../utils/api";
import { LoadingState } from "../../components/loadingState/loadingState.component";
const Dashboard: NextPageWithLayout = () => {
  const [userId, setUserId] = useState("");
  const [isError, setIsError] = useState(false);
  const utils = api.useContext()
  const { data, isLoading:loadingUser} = useQuery(["user", userId], () =>
    getUserInfo(userId),
    {
      enabled: !!userId,
      onError: () => setIsError(true),
      retry:0
    }
  );
  const {isLoading:addingUser, mutate:addToList} = api.list.setListItem.useMutation({
    onSettled: ()=>{
      setUserId("");
      void utils.list.getListItems.invalidate()
    }
  });
  
  const updateUserId = (id: string) => {
    setUserId(id);
  }
  const clearError = () => {
    setIsError(false);
  }
  const handleAddToList = ()=>{
    if(!data) return 
    addToList({link:data.url});
  }
  if (addingUser) return <LoadingState />;
    return (
      <div>
        <div className="mx-auto flex w-10/12 flex-col justify-between md:w-9/12 lg:w-full lg:max-w-[730px]">
          <LightDarkToggle />
          <UserSearch
            clearError={clearError}
            isError={isError}
            search={updateUserId}
          />
          <UserDetails userData={data} />
          <AddToListButton
            isLoading={loadingUser || addingUser}
            addToList={handleAddToList}
          />
        </div>
      </div>
    );
};
Dashboard.getLayout = getDashboardLayout;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default Dashboard;
