export type Meta = {
  lat: number;
  long: number;
};
export type Address = {
  address: string;
  current: boolean;
  permanent: boolean;
  meta: Meta;
};

type PersonalDetails = {
  firstname: string;
  lastname: string;
  middlename: string;
  fatherame: string;
  mother_grandfather: string;
  brother: string;
  sister: string;
  wife: string;
  daughter: string;
};

type Contact = {
  email: string;
  mobile: string;
};

export type Me = {
  id: number;
  name: string;
  imageUrl: string;
  bio: string;
  personal_details: PersonalDetails;
  addresses: Address[];
  contact: Contact;
};
