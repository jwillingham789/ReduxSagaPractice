export const API = 'https://sheetsu.com/apis/v1.0/9f0951c049bf'

export default function fetchData() {
  return fetch(API)
    .then((res) => res.json())
    .catch(function(ex) {
      console.log('exception', ex)
    })
}
