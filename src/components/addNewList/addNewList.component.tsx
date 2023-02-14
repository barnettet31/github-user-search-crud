/* eslint-disable @typescript-eslint/no-misused-promises */

import { type SubmitHandler, useForm } from "react-hook-form";
interface IAddToList {
  newTitle: string;
}
interface IAddNewListProps
{
    handleAddList: (newTitle: string) => void;
}

export const AddNewList = ({handleAddList}:IAddNewListProps) => {
  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      newTitle: "",
    },
  });
  const onSubmit: SubmitHandler<IAddToList> = (data) => {
    handleAddList(data.newTitle);
    return reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex w-full justify-between gap-4"
    >
      <div>
        <label className="block text-sm font-medium">Add List</label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            {...register('newTitle')}
            type="text"
            className="mt-2 block w-full rounded-lg bg-transparent pr-10 outline-none placeholder:text-sm sm:text-sm"
            placeholder="List Name"
          />
        </div>
      </div>
      <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-button px-4 py-2 text-sm font-medium hover:bg-button/75 focus:outline-none">
        Add
      </button>
    </form>
  );
};
