/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { type IListItemProps } from "../listItem/listItem.component";
import { api } from "../../utils/api";
import { useQueryClient } from "@tanstack/react-query";

export const EditListInfoForm = ({
  id,
  title,
  description,
}: IListItemProps) => {
    const utils = api.useContext();
    const queryClient = useQueryClient()
    const {mutate:updateList, isLoading} = api.list.updateListItem.useMutation({
        onSettled: () => {
           void utils.list.getCurrentLists.invalidate();
          void queryClient.invalidateQueries();
        }
    })
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title,
      description,
    },
  });
  const onSubmit = (data: { title: string; description: string }) => {
    updateList({listId:id, ...data});
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-center gap-4"
    >
      <div className="w-full">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-primary dark:text-dark-primary"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            type="title"
            id="title"
            {...register("title")}
            className="block w-full rounded-md bg-transparent opacity-75 shadow-sm outline-none sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="w-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-primary dark:text-dark-primary"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            {...register("description")}
            className="block w-full resize-y rounded-md bg-transparent opacity-75 shadow-sm outline-none sm:text-sm"
            placeholder="my description"
          />
        </div>
      </div>
      <button
        className="w-full rounded-lg bg-button py-4 px-4 text-center font-bold hover:brightness-150 disabled:bg-gray-500"
        type="submit"
        disabled={isLoading}
      >
        Submit
      </button>
    </form>
  );
};