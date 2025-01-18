import { getWithToken } from '@/api/http.ts'

export interface User {
  puuid: string
  gameName: string
  tagLine: string
  id: string
  accountId: string
  profileIconId: number
  revisionDate: number
  summonerLevel: number
  entry: {
    RANKED_TFR: {
      leaguePoints: number
      rank: number
      wins: number
      losses: number
      veteran: boolean
      inactive: boolean|null
      freshBlood: boolean
      hotStreak: boolean
      tier: string
      leagueId: string
      queueType:string
    }
  }
}

export function fetchUserDetail() {
  const res = getWithToken<User>('/user/detail')
  return res
}

export function fetchUserList() {
  const res = getWithToken<User[]>('/user/list')
  return res
}

