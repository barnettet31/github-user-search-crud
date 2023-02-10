import { type GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../../_app";
import { getDashboardLayout } from "../layout";

const Dashboard: NextPageWithLayout = () => {
  return (
    <main className="grid min-h-screen min-w-screen place-items-center bg-main dark:bg-dark-main">
      <h1>This is the list page</h1>
     
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
