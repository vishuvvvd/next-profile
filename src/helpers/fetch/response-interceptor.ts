import { HttpError, RequestOptions, ResponseData } from '@/types';

import refreshToken from './refresh-token';
import retryFetch from './retry-api';
import { logger } from '../logger';

const contentTypes = {
  json: 'application/json',
  pdf: 'application/pdf',
};

export default async function responseInterceptor(
  response: Response,
  options?: RequestOptions
): Promise<ResponseData> {
  const { status, statusText, url, headers } = response;

  try {
    if (status >= 200 && status < 400) {
      let data;
      const type = headers.get('content-type') || '';

      if (type.includes(contentTypes.json)) {
        data = await response.json();
      } else if (type.includes(contentTypes.pdf)) {
        data = await response.blob();
      }

      logger.info(
        JSON.stringify({
          message: 'API Response',
          apiType: type,
          apiStatus: status,
          apiStatusText: statusText,
          apiData: data,
          url,
        })
      );

      if (
        typeof data === 'object' &&
        !Array.isArray(data) &&
        data !== null &&
        'data' in data
      ) {
        return { ...data, status, statusText, headers };
      } else {
        return { data, status, statusText, headers };
      }
    } else if (
      status === 401 &&
      options?.headers?.Authorization?.startsWith('Bearer')
    ) {
      const newAccessToken = await refreshToken();

      const retryResponse = await retryFetch(response.url, {
        method: options?.method,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${newAccessToken}`,
        },
        body: options?.body,
      });

      return retryResponse;
    } else {
      throw new HttpError(status, statusText);
    }
  } catch (error) {
    logger.error(
      JSON.stringify({
        message: 'API Response',
        apiUrl: url,
        apiStatus: status,
        apiStatusText: statusText,
        error: error,
      })
    );

    if (error instanceof HttpError) {
      return { ...error, data: undefined };
    } else {
      /* Handle unexpected errors differently */
      throw error;
    }
  }
}
