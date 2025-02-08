import { getWithToken } from '@/api/http.ts'
import type { User } from '@/api/tft/model.tft.ts'



// export function fetchMyInfo():Promise<User> {
//   try {
//     const res = getWithToken<User>('users/me')
//     console.log("fetch res",res)
//     return res
//   } catch (error) {
//     console.error(error)
//     throw error
//   }
// }

export function fetchMyInfo() {
  const res = getWithToken('users/me')
  return res
}


