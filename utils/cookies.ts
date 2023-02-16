import Cookies from 'js-cookie';

export type CookieValue = {
  id: number;
  amount: number;
}[];

// get cookies
export function getParsedCookie(key: string): CookieValue | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}
// set Cookies

export function setStringifiedCookie(key: string, value: CookieValue) {
  Cookies.set(key, JSON.stringify(value), { expires: 365 });
}

// delete Cookies

export function deleteCookie(key: string) {
  Cookies.remove(key);
}

// stringify Cookies (testing)

export function stringifyCookieValue(value: CookieValue) {
  return JSON.stringify(value);
}
