import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
export interface IList {
  id: string;
  title: string;
}
interface IAddToListProps {
  myLists: IList[] | undefined;
  handleAdd: (id: string) => void;
}
const SelectListItem = ({ id, title }: IList) => {
  return (
    <RadioGroup.Option
      key={id}
      value={id}
      className={({ active, checked }) =>
        `${active ? "ring-opacity-60 ring-offset-2" : ""}
                  ${checked ? "bg-button bg-opacity-75" : "bg-button/75"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
      }
    >
      {({ checked }) => (
        <>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center">
              <div className="text-sm">
                <RadioGroup.Label as="p">{title}</RadioGroup.Label>
              </div>
            </div>
            {checked && (
              <div className="shrink-0 text-white">
                <CheckIcon className="h-6 w-6" />
              </div>
            )}
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};
export const AddToList = ({ myLists, handleAdd }: IAddToListProps) => {
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {myLists && myLists.length > 0 ? (
              myLists.map((item) => (
                <SelectListItem key={item.id} id={item.id} title={item.title} />
              ))
            ) : (
              <p>No List Items Currently</p>
            )}
          </div>
        </RadioGroup>
        {selected && (
          <button
            onClick={() => handleAdd(selected)}
            className="mt-4 w-full rounded-lg bg-button py-4 px-4 hover:bg-button/75"
          >
            Add To List
          </button>
        )}
      </div>
    </div>
  );
};
