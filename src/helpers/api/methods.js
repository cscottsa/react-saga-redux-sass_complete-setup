
// obj = {'ID': 1234, 'name': 'chris', ...};   ->   &ID=1234?name=chris
export default function queryParamObjToString(obj) {
  let queryString = '?';
  Object.keys(obj).forEach((key, index) => {
    if (index === 1) {
      queryString = queryString.concat(queryString, '&' + key + '=' + obj[key]);
    } else {
      console.log('im in');
      queryString = queryString.concat(key + '=' + obj[key]);
    }
  });
  return queryString;
}
