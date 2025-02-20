import axios from "axios";
import { get } from '@/api/http.ts'
import type { authResponse } from '@/api/auth.ts'
import { removeToken, setTokenInLocal } from '@/common/auth.ts'

const interceptorAxios = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  timeout: 5000,
})

interceptorAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("a")

    if(accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
      config.headers["Content-Type"] = "application/json"
    }
    console.log(config)
    return config
  }
)

// 401일때 token refresh 하기위해 사용
interceptorAxios.interceptors.response.use(
  (res) => { return res },
  async (error) => {
    switch (error?.response?.status) {
      case 401:
        try {
          // const refresh = localStorage.getItem('r')
          const refresh = "eyJhbGciOiJIUzI1NiJ9.eyJ0b2tlblR5cGUiOiJyZWZyZXNoIiwic3ViIjoiZTIwODcyZTMtNjVlNS00OTI4LWIyNDYtOTI4MWZkMDVhMTVkIiwiaWF0IjoxNzQwMDU4NDg4LCJleHAiOjE3NDA2NjMyODh9.kUwlhrCNAos6Kp9EUGwsERl7ZEf_44PtzXLh9q8qEdU"
          const headers = {
            'Content-Type': 'application/json',
            'refresh': `Bearer ${refresh}`,
            'Access-Control-Allow-Origin': '*'
          }

          const result = await get<authResponse>("/auth/refresh", {
            headers: headers,
          })


          if(result.access_token !== null) {

            removeToken()
            setTokenInLocal(result.access_token, result.refresh_token)
          } else {
            alert("세션이 만료되었습니다.")
            return Promise.reject(error)
          }

          error.config.headers.Authorization = `Bearer ${localStorage.getItem("a")}`
          return axios.request(error.config);

        } catch (error) {
          console.error(`token expire!! \n ${error}` )
          throw error
        }

      case 500:
        // alert("500:서버로부터 에러가 발생했습니다.")
        throw 500
      default:
        // alert("default에러남.")
        console.error(`default Error!! \n ${error}` )
        throw error
    }
  }
);

export { interceptorAxios }
