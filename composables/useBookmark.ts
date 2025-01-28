export const useBookmark = () => {

  const getBookmark = async () => {
    await $fetch("/bookmark/bookmark", {
        method: "GET",
        onResponse({ response }) {
          if(response._data === 'Not Bookmarked') {
            document.getElementById('book_img').className = 'bx bx-bookmark-alt-plus'
          } else {
            document.getElementById('book_img').className = 'bx bx-bookmark-alt-minus'
          }
        }
    });
  };

  const getAllBookmarks = async () => {
    await $fetch("/bookmark/allBookmarks", {
        method: "GET",
        onResponse({ response }) {
          console.log(response._data)
        }
    });
  };

  const postBookmark = async (tourId: string, email: string) => {
    await $fetch("/bookmark/bookmark", {
        method: "POST",
        body: {
          tourId,
          email,
        },
        onResponse({ response }) {
          if(response._data === 'Removed') {
            document.getElementById('book_img').className = 'bx bx-bookmark-alt-plus'
          } else {
            document.getElementById('book_img').className = 'bx bx-bookmark-alt-minus'
          }
        }
    });
  };

  return {
    getBookmark,
    getAllBookmarks,
    postBookmark,
  };
};