import { getWithToken } from '@/api/http.ts'
import type { Summoner, User } from '@/api/tft/model.tft.ts'


export interface tftUsersResponse {
  user: User;
  summoner: Summoner;
}

/**
 * GET: 그룹에 속한 유저리스트 fetch
 * 그런데 토큰이 필요없는것같음. 물어봐야함.
 */
export function fetchTftUserByGroup(): Promise<tftUsersResponse[]> {
  const params = {
    "gameName": "string",
    "groupId": "1",
    "sortBy": "tier",
    "page" : 0
  }
  const res = getWithToken<tftUsersResponse[]>('/leaderboard/by-group',{
    params: params
  })
  return res
}

/**
 * 모든 그룹 가져옴.
 *
 */
export function fetchGngGroup() {
  const res = getWithToken('/users/groups')

  return res
}
