/* eslint-disable @typescript-eslint/naming-convention */
import { API_BASE_URL, COOKIE_NAME } from '@/config';
import { COOKIES_EXPIRE_DAY } from '@/constants';
import { GENERATE_ACCESS_TOKEN_URL } from '@/constants/api';
import { HttpError } from '@/types';

import { getRefreshTokenFromCookie, getUserInfoFromCookie, setCookie } from '../utils';

export default async function refreshToken(): Promise<string> {
  const refreshTokenResponse = await fetch(`${API_BASE_URL}/${GENERATE_ACCESS_TOKEN_URL}`, {
    method: 'POST',
    body: JSON.stringify({ refreshToken: getRefreshTokenFromCookie() }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await refreshTokenResponse.json();
  if (refreshTokenResponse.ok && data?.accessToken) {
    const accessToken = data.accessToken;
    const savedUserInfo = getUserInfoFromCookie();
    savedUserInfo.accessToken = accessToken;
    setCookie(COOKIE_NAME, JSON.stringify(savedUserInfo), COOKIES_EXPIRE_DAY);
    return accessToken;
  } else {
    throw new HttpError(refreshTokenResponse.status, 'Failed to fetch refresh token');
  }
}
