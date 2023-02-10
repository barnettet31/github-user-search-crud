import { GetServerSidePropsContext, type NextPage } from "next";
import { getSession, signOut } from "next-auth/react";

 const Dashboard: NextPage = () => {
  return (
    <main className="min-w-screen grid min-h-screen place-items-center bg-main dark:bg-dark-main">
      <h1>This is the dashboard</h1>
      <button
        onClick={() => void signOut()}
        className="rounded bg-button px-4 py-2 shadow hover:bg-button/75"
      >
        Signout
      </button>
    </main>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
   
    };
     
  }return {
    props: {},
  };
}
export default Dashboard;