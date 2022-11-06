import {BaseSyntheticEvent} from "react";

export function isLoggedIn(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token') != null
  }
  return false
}

export function getUserToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
  return null
}

export function addUserToken(value: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', value)
  }
}

export function endSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token')
  }
}

export function onInputValueChange(
  event: BaseSyntheticEvent,
  setValue: (_: string) => void
): void {
  setValue(event.target.value)
}
