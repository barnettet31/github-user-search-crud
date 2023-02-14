import { useRouter } from "next/router";
import { type NextPageWithLayout } from "../../../_app";
import { getDashboardLayout } from "../../layout";
import { api } from "../../../../utils/api";
import { EmptyList } from "../../../../components/emptyList/emptyList.component";
import uuid from "react-uuid";
import { ListLoadingState } from "../../../../components/listLoadingState/listLoadingState.component";
import { LoadUserDetails } from "../../../../components/loadUserDetails/loadUserDetails.component";
import { useQueryClient } from "@tanstack/react-query";

const ListPage: NextPageWithLayout = () => {
  const router = useRouter();
  const listId = router.query.listId as string;
  const queryClient = useQueryClient()
  const {
    isLoading: gettingList,
    isFetching: fetchingList,
    data: listData,
  } = api.list.getListItems.useQuery({ listId: listId },{
    refetchOnWindowFocus: false,
  });
  const {mutate, isLoading:isDeleting} = api.list.deleteItem.useMutation({
    onSettled:()=>{
      void queryClient.invalidateQueries()
    }
  });
  const handleDelete = (link:string, listId:string)=>{
    void mutate({
      link: link,
      listId:listId
    })
  }
  if (gettingList || fetchingList) return <ListLoadingState />;
  if (!listData || listData.length ===0) return <EmptyList />;
  return (
    <main className="min-w-screen flex min-h-screen flex-col bg-main dark:bg-dark-main">
      <div className="py5 grid grid-cols-1 gap-4 px-5 md:grid-cols-2">
        {listData.map((el) => (
          <LoadUserDetails isDeleting={isDeleting} handleDelete={handleDelete} id={listId} key={uuid()} url={el} />
        ))}
      </div>
    </main>
  );
};

ListPage.getLayout = getDashboardLayout;

export default ListPage;
