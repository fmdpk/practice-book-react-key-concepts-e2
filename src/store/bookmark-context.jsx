import { createContext } from 'react';

const BookmarkContext = createContext({
  bookmarkedArticles: [],
  bookmarkArticle: () => {},
  unBookmarkArticle: () => {}
});

export default BookmarkContext; 
