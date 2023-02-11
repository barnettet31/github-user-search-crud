export const ListItemError = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-elevated dark:bg-dark-elevated px-4 py-4">
      <h2 className="text-lg font-semibold text-red-500">
        Sorry this item was unable to load.
      </h2>
      <p className="text-base font-light">
        Perhaps this user deleted their account?
      </p>
    </div>
  );
};
