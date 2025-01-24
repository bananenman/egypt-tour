export const useBookmark = () => {

  const getBookmark = async (tourId: string, email: string) => {
    await $fetch("/bookmark/bookmark", {
        method: "GET",
        body: {
          tourId,
          email,
        },
    });
  };

  const postBookmark = async (tourId: string, email: string) => {
    await $fetch("/bookmark/bookmark", {
        method: "POST",
        body: {
          tourId,
          email,
        },
    });
  };

  const deleteBookmark = async (tourId: string, email: string) => {
    await $fetch("/bookmark/bookmark", {
        method: "delete",
        body: {
          tourId,
          email,
        },
    });
   
  };

  return {
    getBookmark,
    postBookmark,
    deleteBookmark,
  };
};