interface IAddToListButton
{
    isLoading: boolean;
    addToList: () => void;
}

export function AddToListButton ({isLoading, addToList}: IAddToListButton){

    return (
      <button onClick={addToList} disabled={isLoading} className="mt-8 w-full rounded-lg disabled:bg-gray-500 bg-button py-4 px-4 text-center font-bold hover:brightness-150">
        Add To My Watch List
      </button>
    );

}