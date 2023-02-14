import { type ReactElement } from "react";
import DashboardMenu from "../dashboardMenu/dashboardMenu.component";
interface ILayoutProps {
  children: ReactElement;
}
function Layout({ children }: ILayoutProps) {
  return (
    <>
      <main className="min-h-screen min-w-screen flex flex-col gap-20 justify-start  bg-main text-primary dark:bg-dark-main dark:text-dark-primary">
        <DashboardMenu />
        {children}
      </main>
    </>
  );
}

export const getDashboardLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
