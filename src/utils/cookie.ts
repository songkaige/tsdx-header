import Cookie from 'js-cookie';
import AppConsts from '../lib/appconst';

export function getCookie(cookieName: string, defaultValue = '') {
  return Cookie.get(cookieName) || defaultValue
}

export function setCookie(cookieName: string, value: string) {
  return Cookie.set(cookieName, value, {
    expires: 365,
    domain: AppConsts.domain
  })
}

export function removeCookie(cookieName: string) {
  return Cookie.remove(cookieName, {
    domain: AppConsts.domain
  })
}
