import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../../_app";
import { getDashboardLayout } from "../../../components/dashboardLayout/layout";
import { api } from "../../../utils/api";
import { ListItem } from "../../../components/listItem/listItem.component";
import uuid from "react-uuid";
import { ListLoadingState } from "../../../components/listLoadingState/listLoadingState.component";
import { EmptyList } from "../../../components/emptyList/emptyList.component";

const Dashboard: NextPageWithLayout = () => {
  const {data, isLoading:gettingItems, isFetching} = api.list.getCurrentLists.useQuery();
  const {isLoading:deleteItem} = api.list.deleteItem.useMutation()
  if(gettingItems || isFetching|| deleteItem) return <ListLoadingState/>
  if(!data) return <h1>No list currently</h1>
  if(data.length <1) return <EmptyList/>
  return (
    <main className="min-w-screen flex min-h-screen flex-col bg-main px-5 py-5 dark:bg-dark-main ">
      <h1 className="text-3xl font-bold">All of your lists.</h1>
      <div className="grid grid-cols-1 justify-items-stretch gap-4 md:grid-cols-2 mt-4">
        {data.map(({ id, title, description }) => (
          <ListItem key={uuid()} id={id} title={title} description={description} />
        ))}
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
