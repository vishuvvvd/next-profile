/* eslint-disable @typescript-eslint/naming-convention */
export const GENERATE_ACCESS_TOKEN_URL = '';

const base = 'api';
const version = 'v1';
const baseurl = `${base}/${version}`;

export const INTERNAL_API = {
  ME: `${baseurl}/main/me`,
  ABOUT: `${baseurl}/main/about`,
  HIRE_ME: `${baseurl}/main/contact/hire-me`,
  EDUCATION: `${baseurl}/main/education`,
  EXPERIANCE: `${baseurl}/main/experiance`,
  SKILLS: `${baseurl}/main/skills`,
  DEV_GOOD_HABBITS: `${baseurl}/general/good-habbits`,
};
