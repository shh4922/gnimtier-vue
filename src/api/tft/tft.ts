import { getWithToken } from '@/api/http.ts'
import type { Summoner, User } from '@/api/tft/model.tft.ts'

export interface tftUserInfoResponse {
  data: tftUserInfo[];
  sortBy: string|null;
  pageSize: number;
  totalPages: number;
  totalElements: number;
  hasNext : boolean;
  hasPrevious : boolean;
}

export interface tftUserInfo {
  user: User;
  summoner: Summoner;
}

export interface groupResponse {
  id: string;
  name: string;
  description: string;
  parentId: string;
  isRoot: boolean;
}
/**
 * GET: 그룹에 속한 유저리스트 fetch
 * 그런데 토큰이 필요없는것같음. 물어봐야함.
 */
export function fetchTftUserByGroup(groupName:string = "string",page=1): Promise<tftUserInfoResponse> {
  const params = {
    "gameName": `${groupName}`,
    "groupId": `${page}`,
    "sortBy": "tier",
    "page" : 0
  }
  const res = getWithToken<tftUserInfoResponse>('/leaderboard/by-group',{
    params: params
  })
  return res
}

/**
 * 모든 그룹 가져옴.
*
 */
export function fetchGngGroup(): Promise<groupResponse[]> {
  const res = getWithToken<groupResponse[]>('/users/groups')
  return res
}
