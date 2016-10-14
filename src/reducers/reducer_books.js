import { FETCH_FAILED, FETCH_SUCCEEDED, BOOK_SELECTED, BOOK_UPVOTE, CLEAR_VOTES } from '../actions/index'

//This is the intial redux state object that gets loaded
const initialState = {
  books: [],
  activeBook: {},
  error: ''
}

//this is a reducer function. It consists of switch cases that look for specific
//action types and then creates a new instance of state and makes immutable changes
//to it, then returns it to the main reducer compiler. Object assign is an immutable function,
//whereas the spread operator can mutate the original state if done incorrectly

export default function Books (state = initialState, action) {

  switch(action.type) {

    case FETCH_SUCCEEDED:
      return Object.assign({}, state, { books: action.payload })

    case FETCH_FAILED:
      return {
        ...state,
        error: action.payload
      }

    case BOOK_SELECTED:
      return Object.assign({}, state, { activeBook: action.payload })

    case BOOK_UPVOTE:
      return Object.assign({}, state, {
        books: state.books.map((book) => {
          if (book.title === action.payload.title) {
              book.votes++
          }
          return book
        })
      })

    case CLEAR_VOTES:
      return Object.assign({}, state, {
        books: state.books.map((book) => {
           book.votes = 0
           return book
        })
      })
  }

  return state
}
