import { LoadingState } from "../loadingState/loadingState.component";

export const ListLoadingState = ()=>{
    return (
      <main className="min-w-screen flex min-h-screen flex-col bg-main dark:bg-dark-main">
        <div className="py5 grid grid-cols-1 gap-4 px-5 md:grid-cols-2">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <LoadingState key={index} />
            ))}
        </div>
      </main>
    );
}