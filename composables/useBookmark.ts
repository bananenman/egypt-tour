export const useAuth = () => {

  const getBookmark = async (tourId: string) => {;
    await $fetch("/bookmark/bookmark", {
        method: "POST",
        body: {
          tourId,
        },
    });
  };

  const postBookmark = async (tourId: string) => {;
    await $fetch("/bookmark/bookmark", {
        method: "POST",
        body: {
            tourId,
        },
    });
  };

  const deleteBookmark = async (tourId: string) => {;
    await $fetch("/bookmark/bookmark", {
        method: "delete",
        body: {
        tourId,
        },
    });
   
  };

  return {
    getBookmark,
    postBookmark,
    deleteBookmark,
  };
};