import { FETCH_REQUESTED } from '../actions/index'
import { fetchBooklistSuccess, fetchBooklistError } from '../actions/index';
import { call, put, take } from 'redux-saga/effects'
import fetchData from '../services/Api'
import "babel-polyfill"


//this is where fetchData function actually gets call. 'Const data' will be the
//api response and 'yield' states that nothing can proceed until the the call is
//finished. After that completes, then the data(api response) gets passed into the
//the fetchBooklistSuccess action function. It then proceeds to the books reducer
//and gets distributed to the new state object like a normal redux transaction
export default function* fetchDataSaga () {
  try {
      const data = yield call(fetchData)
      yield put(fetchBooklistSuccess(data))
      //same as, yield put({type: FETCH_SUCCEEDED, payload: data})
   }  catch (error) {
      yield put(fetchBooklistError(error))
   }
}

//this function is what's actually plugged into the middleware in the store. It
//'intercepts' all FETCH_REQUESTED action types and then fires off the fetchDataSaga
//function in this file. This is where you would watch for multiple saga functions
//and distribute ('fork') them accordingly
function* watchFetchData() {
  yield take(FETCH_REQUESTED, fetchDataSaga)
}
