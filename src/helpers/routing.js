import { browserHistory } from 'react-router';

export function navigateTo(url, paramObject) {
  // url: (string) required
  // paramObject: (object) optional

  // Example use case:
  // navigateTo('property/:propertyId/summary/:country', {propertyId: 123456, country: 'rsa'})
  // browserHistory.push('property/123456/summary/rsa');

  const newPath = returnNavigateToPath(url, paramObject);

  if (newPath) {
    browserHistory.push(newPath);
  } else {
    console.log('navigateTo failed');
  }
}

export function returnNavigateToPath(url, paramObject) {
  // url: (string) required
  // paramObject: (object) optional

  let newPath = url;
  if (url) {
    if (paramObject) {
      if (Object.keys(paramObject).length) {
        Object.keys(paramObject).forEach((key) => {   // eslint-disable-line
          const included = newPath.includes(':' + key);
          if (included) {
            newPath = newPath.replace(':' + key, paramObject[key]);
          } else {
            console.log('Error returnNavigateToPath(): could not find param: ' + key + ', in url: ' + url);
            return false;
          }
        });
        return newPath;
      } else {
        console.log('Error returnNavigateToPath(): no Params');
        return false;
      }
    } else {
      // If url, but no paramObject
      return newPath;
    }
  } else {
    console.log('Error returnNavigateToPath(): no url');
    return false;
  }
}
