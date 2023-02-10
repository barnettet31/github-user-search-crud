import { type ReactElement } from "react";
import DashboardMenu from "../../components/dashboardMenu/dashboardMenu.component";
interface ILayoutProps {
  children: ReactElement;
}
function Layout({ children }: ILayoutProps) {
  return (
    <>
      <main className="grid min-h-screen min-w-screen place-items-center bg-main text-primary dark:bg-dark-main dark:text-dark-primary">
        <DashboardMenu />
        {children}
      </main>
    </>
  );
}

export const getDashboardLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
