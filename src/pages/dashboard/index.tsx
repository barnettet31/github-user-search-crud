import { type GetServerSidePropsContext} from "next";
import { getSession } from "next-auth/react";
import { type NextPageWithLayout } from "../_app";
import { getDashboardLayout } from "./layout";
function LightDarkToggle(){
  const toggleDark = ()=>{
    const htmlElement = document.documentElement;
    if(htmlElement.classList.contains('dark')) return htmlElement.classList.remove('dark')
    htmlElement.classList.add('dark');


  }
  return <button onClick={toggleDark}>push</button>
}
const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">devfinder</h1>
          <LightDarkToggle/>
        </div>
      </div>
    </>
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
