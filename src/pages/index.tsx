import { type GetServerSidePropsContext, type NextPage } from "next";
import { getSession, signIn } from "next-auth/react";

const Home: NextPage = () => {

  return (
    <main className="min-w-screen grid min-h-screen place-items-center bg-main dark:bg-dark-main">
      <div className="bg-bg-secondary dark:bg-dark-bg-secondary px-4 py-4 bg-elevated dark:bg-dark-elevated rounded shadow flex flex-col gap-4">
        <h1 className="text-4xl font-bold" >
          Welcome
        </h1>
        <p className="text-base">This app requires user authentication to operate. Please login.</p>
        <button onClick={()=>void signIn('google')} className="px-4 py-2 bg-button hover:bg-button/75 rounded shadow">Login With Google</button>
      </div>
    </main>
  );
};

export async function getServerSideProps(context:GetServerSidePropsContext){
  const session = await getSession(context)
  if(session){
    return{
      redirect:{
        destination:'/dashboard',
        permanent:false
      }

    }

  }
  return {
    props:{}
  }
}
export default Home;

