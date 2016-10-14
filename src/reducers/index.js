import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

//All reducers get compiled here
const rootReducer = combineReducers({
  bookList: BooksReducer
});

export default rootReducer;
