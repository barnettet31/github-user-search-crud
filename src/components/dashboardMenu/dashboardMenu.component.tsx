import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  ChevronDownIcon,
  HomeIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
export default function DashboardMenu() {
  return (
    <div className="w-full flex items-center justify-end px-4 py-4">
      <div className="top-4 right-4 w-56 text-right">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-button px-4 py-2 text-sm font-medium text-white hover:bg-button/75">
              Options
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-white"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-elevated shadow-lg dark:bg-dark-elevated">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard"
                      className={`${
                        active
                          ? "bg-button text-primary dark:text-dark-primary"
                          : "text-primary dark:text-dark-primary"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <HomeIcon className="mr-2 h-6 w-6" />
                      Search for More
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard/list"
                      className={`${
                        active
                          ? "bg-button text-primary dark:text-dark-primary"
                          : "text-primary dark:text-dark-primary"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <PencilSquareIcon className="mr-2 h-6 w-6" />
                      Edit List
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => void signOut()}
                      className={`${
                        active
                          ? "bg-button text-primary dark:text-dark-primary"
                          : "text-primary dark:text-dark-primary"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <ArrowRightOnRectangleIcon className="mr-2 h-6 w-6" />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
