/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DEFAULT_COOKIE_EXPIRY_DAYS, DOMAIN_NAME } from '@/constants';

export function getRefreshTokenFromCookie() {
  //TODO:: write logic to get refresh token from cookie
  return 'send refresh token as string';
}

export function getUserInfoFromCookie() {
  //TODO:: wrirelogic to get userinfo from cookie and send object with userinfo access key as well
  return {
    accessToken: 'send access key as a string',
  };
}

export function setCookie(
  cname: string,
  cvalue: string | number,
  exdays: number = DEFAULT_COOKIE_EXPIRY_DAYS,
  encryptData: boolean = true
) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toUTCString();

  const cookieValue = typeof cvalue === 'string' ? cvalue : cvalue.toString();
  const finalValue = encryptData ? encrypt(cookieValue) : cookieValue;

  document.cookie = `${cname}=${finalValue}; ${expires}; path=/; domain=.${DOMAIN_NAME}; Secure; SameSite=Strict; Priority=High`;
}

function encrypt(text: string) {
  //encrypting functionality goes here
}
