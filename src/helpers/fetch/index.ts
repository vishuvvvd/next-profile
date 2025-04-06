import { API_BASE_URL } from '@/config';
import { API_CONNECT_TIMEOUT_MSG, API_GATEWAY_TIMEOUT_CODE } from '@/constants';
import { HttpError, RequestOptions, ResponseData } from '@/types';

import requestInterceptor from './request-interceptor';
import responseInterceptor from './response-interceptor';
import { logger } from '../logger';

async function API(
  url: string,
  options?: RequestOptions
): Promise<ResponseData> {
  try {
    /* Handle request interceptor */
    [url, options] = requestInterceptor(url, options || {});

    if (!url.startsWith('http')) {
      url = `${API_BASE_URL}/${url}`;
    }

    /* Fetch data */
    const response = await fetch(url, options);

    /* Handle response interceptor */
    const data = await responseInterceptor(response, options);

    return data;
  } catch (error) {
    logger.error(
      JSON.stringify({
        message: 'API failed - Something went wrong.',
        error: error,
        url,
      })
    );

    if (error instanceof HttpError) {
      return { ...error, data: undefined };
    }

    /* Handle unexpected errors differently */
    return {
      message: API_CONNECT_TIMEOUT_MSG,
      status: API_GATEWAY_TIMEOUT_CODE,
      data: undefined,
      error,
    };
  }
}

export default API;
