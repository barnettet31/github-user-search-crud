import { IUserReposResult } from "../../axios/types";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface IRepoItemProps {
  repo: IUserReposResult;
}
export const RepoItem = ({ repo }: IRepoItemProps) => {
  return (
    <li>
      <Link
        href={repo.html_url}
        className="block hover:bg-elevated/75 dark:hover:bg-dark-elevated/75 "
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-start">
            <p className="truncate text-sm font-medium text-primary dark:text-dark-primary ">
              {repo.name}
            </p>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              {repo.topics.map((topic) => (
                <p className="flex items-center text-sm text-button sm:mt-0">
                  {topic}
                </p>
              ))}
            </div>
            <div className="mt-2 flex items-center text-sm text-secondary dark:text-dark-secondary sm:mt-0">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Last Updated{" "}
                <time dateTime={repo.updated_at}>{repo.updated_at}</time>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
