import { useRouter } from "next/router";
import { getDashboardLayout } from "../../../../components/dashboardLayout/layout";
import { type NextPageWithLayout } from "../../../_app";
import { useQuery } from "@tanstack/react-query";
import { getUserRepos } from "../../../../axios/getUserRepos";
import { RepoItem } from "../../../../components/repoItem/repoItem.component";
import uuid from "react-uuid";

const UserHistoryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const githubUserName = router.query.userHistory as string;
  const { data: userRepoHistory, isLoading } = useQuery([githubUserName], () =>
    getUserRepos(githubUserName)
  );
  if (isLoading)
    return (
      <div className="animate spin h-10 w-10 rounded-full border border-transparent border-r-button"></div>
    );
  if (!userRepoHistory)
    return (
      <div>
        <h1>This user does not seem to have any repos at the moment...</h1>
      </div>
    );
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-elevated shadow dark:bg-dark-elevated sm:rounded-md">
        <ul role="list" className="divide-y divide-button">
          {userRepoHistory.map((repo) => (
            <RepoItem key={uuid()} repo={repo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

UserHistoryPage.getLayout = getDashboardLayout;

export default UserHistoryPage;
