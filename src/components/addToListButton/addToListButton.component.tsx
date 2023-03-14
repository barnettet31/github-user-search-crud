import { Fragment, useState } from "react";
import { api } from "../../utils/api";
import { Dialog, Transition } from "@headlessui/react";
import { AddNewList } from "../addNewList/addNewList.component";
import { AddToList } from "../addToList/addToList.component";

interface IAddToListButton {
  isLoading: boolean;
  addToList: (id: string) => void;
  createListAndAdd: (title: string) => void;
}

export function AddToListButton({
  isLoading,
  addToList,
  createListAndAdd,
}: IAddToListButton) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: myLists } = api.list.getCurrentLists.useQuery();
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        disabled={isLoading}
        className="mt-8 w-full rounded-lg bg-button py-4 px-4 text-center font-bold hover:brightness-150 disabled:bg-gray-500"
      >
        Add To My Watch List
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="trans w-full max-w-md overflow-hidden rounded-2xl bg-elevated p-6 text-left align-middle shadow-xl transition-all dark:bg-dark-elevated">
                  <div className="flex w-full items-center justify-between">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6"
                    >
                      Add To Your List
                    </Dialog.Title>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md border border-transparent p-4 text-black hover:text-red-500 focus:outline-none dark:text-main"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <AddToList handleAdd={addToList} myLists={myLists} />
                  <AddNewList handleAddList={createListAndAdd} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
