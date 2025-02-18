import { getWithToken } from '@/api/http.ts'
import type { User } from '@/api/tft/model.tft.ts'


export function fetchMyInfo():Promise<User> {
  try {
    const res = getWithToken<User>('users/me')
    return res
  } catch (error) {
    console.error(error)
    throw error
  }
}



