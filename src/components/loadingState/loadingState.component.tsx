export const LoadingState = ()=>{
    return <div className="mx-auto flex w-10/12 flex-col gap-10 justify-between md:w-9/12 lg:w-full lg:max-w-[730px]">
        <div className="w-full h-20 bg-elevated dark:bg-dark-elevated rounded-lg animate-pulse"></div>
        <div className="w-full bg-elevated rounded-lg animate-pulse dark:bg-dark-elevated h-[400px]"></div>
        <div className="w-full h-20 bg-elevated dark:bg-dark-elevated rounded-lg animate-pulse"></div>
    </div>
}