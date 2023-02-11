import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../../_app";
import { getDashboardLayout } from "../layout";
import { api } from "../../../utils/api";
import { ListItem } from "../../../components/listItem/listItem.component";
import uuid from "react-uuid";
import { ListLoadingState } from "../../../components/listLoadingState/listLoadingState.component";

const Dashboard: NextPageWithLayout = () => {
  const {data, isLoading:gettingItems, isFetching} = api.list.getListItems.useQuery();
  const {isLoading:deleteItem} = api.list.deleteItem.useMutation()
  if(gettingItems || isFetching|| deleteItem) return <ListLoadingState/>
  if(!data) return <h1>No list currently</h1>
  return (
    <main className="min-h-screen min-w-screen flex flex-col bg-main dark:bg-dark-main">
      <div className="px-5 py5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          data.map(url=><ListItem key={uuid()} url={url}/>)
        }
      </div>
     
    </main>
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
