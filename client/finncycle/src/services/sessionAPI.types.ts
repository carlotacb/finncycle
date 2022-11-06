export interface UserRegisterBody {
  email: string
  name: string
  address: string
  zipCode: string
  country: string
  city: string
  password: string
  phone: string
}

export interface UserInformationBody {
  email?: string
  name?: string
  address?: string
  zipCode?: string
  country?: string
  city?: string
  phone?: string
  reusedCycles?: number
  recycleCycles?: number
  claimedCycles?: number
  error: boolean
}

export interface UserUpdateBody {
  name: string
  address: string
  zipCode: string
  country: string
  city: string
}

export interface UserLoginResponse {
  readonly token: string;
}

export interface BasicPostResponse {
  readonly error: boolean;
}
