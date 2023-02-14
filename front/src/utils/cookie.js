function getAuthFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)is_login\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

function saveAuthToCookie(value) {
  document.cookie = `is_login=${value}`;
}

export { deleteCookie, getAuthFromCookie, saveAuthToCookie };
