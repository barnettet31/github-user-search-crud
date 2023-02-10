import { type GetServerSidePropsContext} from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../_app";
import { getDashboardLayout } from "./layout";
import { LightDarkToggle } from "../../components/lightDarkToggle/lightDarkToggle.component";
import { UserSearch } from "../../components/userSearch/userSearch.component";
import { UserDetails } from "../../components/userDetails/userDetails.component";
import { AddToListButton } from "../../components/addToListButton/addToListButton.component";
const Dashboard: NextPageWithLayout = () => {
  return (
    <div>
      <div className="mx-auto flex w-10/12 flex-col justify-between md:w-9/12 lg:w-full lg:max-w-[730px]">
        <LightDarkToggle />
        <UserSearch />
        <UserDetails/>
        <AddToListButton/>
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
