import { type IUserReposResult } from "../../axios/types";
import { CalendarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import uuid from "react-uuid";
import { formatDate } from "../../utils/formatDate";

interface IRepoItemProps {
  repo: IUserReposResult;
}
export const RepoItem = ({ repo }: IRepoItemProps) => {
  return (
    <li>
      <Link href={repo.html_url} className="group block">
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-start">
            <p className="truncate text-sm font-medium text-primary group-hover:text-secondary dark:text-dark-primary dark:group-hover:text-dark-secondary ">
              {repo.name}
            </p>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-button sm:mt-0">
                {repo.description}
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-secondary group-hover:text-tertiary dark:text-dark-secondary dark:group-hover:text-dark-tertiary sm:mt-0">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Last Updated{" "}
                <time dateTime={repo.updated_at}>
                  {formatDate(repo.updated_at)}
                </time>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
