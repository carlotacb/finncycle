import {BasicPostResponse, UserInformationBody, UserLoginResponse, UserRegisterBody} from "./sessionAPI.types";
import axios from "axios";
import {BackendHost} from "../constants/global-variables";
import {NextRouter} from "next/router";
import {addUserToken, endSession, getUserToken} from "../constants/utils";

export async function getUserLogin(
  email: string, password: string
): Promise<UserLoginResponse> {
  try {
    const response = await axios({
      method: 'get',
      url: `${BackendHost}user/login?email=${email}&password=${password}`
    });
    return { token: response.data };
  } catch (error) {
    return { token: 'user_not_found' };
  }
}

export async function postUserRegister(
  email: string,
  password: string,
  phone: string,
  name: string,
  address: string,
  zipCode: string,
  city: string,
  country: string
): Promise<UserLoginResponse> {
  try {
    const response = await axios({
      method: 'post',
      url: `${BackendHost}user/register`,
      data: {
        "email": email,
        "password": password,
        "name": name,
        "address": address,
        "postalCode": zipCode,
        "country": country,
        "city": city,
        "phone": phone
      }
    });
    return { token: response.data };
  } catch (error) {
    return { token: 'user_not_found' };
  }
}

export async function deleteUserToken(): Promise<BasicPostResponse> {
  const token = getUserToken()
  try {
    await axios({
      method: 'post',
      url: `${BackendHost}user/logout?apiKey=${token}`
    });
    return { error: false };
  } catch (error) {
    return { error: true };
  }
}

export async function getUserInformation(): Promise<UserInformationBody> {
  const token = getUserToken()
  try {
    const response = await axios({
      method: 'get',
      url: `${BackendHost}user/profile?apiKey=${token}`
    });
    return { ...response.data, error: false };
  } catch (error) {
    return { error: true };
  }
}

export const loginForm = async (
  email: string,
  password: string,
  router: NextRouter,
) => {
  const response = await getUserLogin(email, password);
  if (response.token != 'user_not_found') {
    addUserToken(response.token)
    await router.push('/my-profile');
  }
};

export const registerForm = async (
  email: string,
  password: string,
  phone: string,
  name: string,
  address: string,
  zipCode: string,
  city: string,
  country: string,
  router: NextRouter,
) => {
  const response = await postUserRegister(
    email,
    password,
    phone,
    name,
    address,
    zipCode,
    city,
    country
);
  if (response.token != 'user_not_found') {
    addUserToken(response.token)
    await router.push('/my-profile');
  }
};

export const logoutForm = async (router: NextRouter) => {
  const response = await deleteUserToken()
  if (!response.error) {
    endSession()
    await router.push('/login');
  }
}
