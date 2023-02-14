/* eslint-disable @typescript-eslint/no-misused-promises */
import { DeleteButton } from "../deleteButton/deleteButton.component";
import { LinkButton } from "../linkButton/linkButton.component";
import { EditButton } from "../editListButton/editListButton.component";

export interface IListItemProps {
  id: string;
  title: string;
  description: string;
}


export const ListItem = ({ id, title, description }: IListItemProps) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-lg bg-elevated px-4 py-4 shadow dark:bg-dark-elevated h-full">
        <div className="flex flex-col gap-2">
          <h2>{title}</h2>
          <p className="text-xs font-light">{description}</p>
        </div>
        <div className="flex gap-2">
          <EditButton id={id} title={title} description={description}/>
          <LinkButton id={id} />
          <DeleteButton id={id} />
        </div>
      </div>
    </div>
  );
};
