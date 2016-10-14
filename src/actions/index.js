export const BOOK_SELECTED = 'BOOK_SELECTED'
export const BOOK_UPVOTE = 'BOOK_UPVOTE'
export const CLEAR_VOTES = 'CLEAR_VOTES'
export const FETCH_REQUESTED = 'FETCH_REQUESTED'
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED'
export const FETCH_FAILED = 'FETCH_FAILED'

//this action contains no payload because the fetch call has no params to pass,
//its just a GET. If this were a POST/PATCH, then this is where you would pass
//a payload.
export function fetchBooklistRequest() {
  return {
    type: FETCH_REQUESTED
  }
}
export function fetchBooklistSuccess(data) {
  return {
    type: FETCH_SUCCEEDED,
    payload: data
  }
}
export function fetchBooklistError(errors) {
  return {
    type: FETCH_FAILED,
    errors
  }
}
export function selectBook(book) {
  return {
    type: BOOK_SELECTED,
    payload: book
  }
}
export function upvoteBook(book) {
  return {
    type: BOOK_UPVOTE,
    payload: book
  }
}
export function clearVotes() {
  return {
    type: CLEAR_VOTES
  }
}
