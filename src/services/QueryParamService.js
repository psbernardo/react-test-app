const set = (searchParam) => {
  const queryString = jsonToQueryString(searchParam);
  window.history.pushState({}, null, queryString);
};

const jsonToQueryString = (json) => {
  return (
    '?' +
    Object.keys(json)
      .filter((key) => json[key])
      .map((key) => {
        if (!json[key]) return '';
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};

const get = (searchParam) => {
  const searchParamKeys = Object.keys(searchParam);
  const queryString = window.location.search.substring(1);
  const decodedQueryString = decodeURIComponent(queryString);
  const keyValues = decodedQueryString.split('&');

  for (let i = 0; i < keyValues.length; i++) {
    const pair = keyValues[i].split('=');
    const key = pair[0];
    const value = pair[1];

    if (searchParamKeys.includes(key)) {
      switch (value) {
        case 'true':
          searchParam[key] = true;
          break;
        case 'false':
          searchParam[key] = false;
          break;
        default:
          searchParam[key] = value.replace(/%20/g, ' ');
          break;
      }
    }
  }

  return searchParam;
};

const getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const updateUrlParameter = (key, value) => {
  const uri = window.location.search;
  const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    window.history.pushState(
      {},
      null,
      uri.replace(re, '$1' + key + '=' + value + '$2')
    );
  } else {
    window.history.pushState({}, null, uri + separator + key + '=' + value);
  }
};

export default {
  get,
  set,
  getUrlParameter,
  updateUrlParameter,
};
