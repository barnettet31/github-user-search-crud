import { type GetServerSidePropsContext, type NextPage } from "next";
import { getSession, signIn } from "next-auth/react";
import { LandingFooter } from "../components/landingFooter/landingFooter.component";

const Home: NextPage = () => {
  return (
    <>
      <main className="min-w-screen grid min-h-screen place-items-center bg-main dark:bg-dark-main">
        <div className="bg-bg-secondary dark:bg-dark-bg-secondary flex flex-col gap-4 rounded bg-elevated px-4 py-4 shadow dark:bg-dark-elevated">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-base">
            This app requires user authentication to operate. Please login.
          </p>
          <button
            onClick={() => void signIn("google", { callbackUrl: "/dashboard" })}
            className="rounded bg-button px-4 py-2 shadow hover:bg-button/75"
          >
            Login With Google
          </button>
        </div>
      </main>
      <LandingFooter />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default Home;
