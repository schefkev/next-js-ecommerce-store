'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';

export default function CookieBanner() {
  const [areCookiesTermAccepted, setAreCookiesTermAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesTermAccepted');

    /* Retrieves the value stored in local storage under the key 'areCookiesTermsAccepted'. The value retrieved
      from local storage will either be true or false, depending on whether the user has accepted the cookies. */

    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    /* This sets the value of initialState:
      . If localStorageValue is undefined, meaning there is no value stored, then is set to false.
      . If localStorageValue is defined (eg. not undefined), then its value is stored in initialState. */

    setAreCookiesTermAccepted(initialState);
  }, []);

  if (!areCookiesTermAccepted) {
    return (
      <>
        <div>
          Our Website uses Cookies. Please accept them if you wanna indulge in
          the world of Le Cuisiner.
        </div>
        <button
          onClick={() => {
            setAreCookiesTermAccepted(true);
            setLocalStorage('areCookiesTermAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    );
  }
  return null;
}

/* UPDATE:
  In the previous JS it worked, now with TS i needed to change the return statement.
  If the condition is not met, the function returns null.
*/
