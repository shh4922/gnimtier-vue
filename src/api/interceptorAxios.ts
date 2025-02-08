import axios from "axios";
import { get } from '@/api/http.ts'
import type { authResponse } from '@/api/auth.ts'

const interceptorAxios = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 5000,
})

interceptorAxios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("a")

    if(accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  }
)

// 401일때 token refresh 하기위해 사용
interceptorAxios.interceptors.response.use(
  (res) => { return res.data },
  async (error) => {
    switch (error?.response?.status) {
      case 401:
        try {
          const refresh = localStorage.getItem('r')
          const params = {
            "Refresh" : refresh
          }

          const result = await get<authResponse>("/auth/refresh", {
            params: params,
          })

          if(result.access_token !== null) {
            localStorage.removeItem("a")
            localStorage.removeItem("r")
            localStorage.setItem('a', result.access_token)
            localStorage.setItem('r', result.refresh_token)
          }

          error.config.headers.Authorization = `Bearer ${localStorage.getItem("a")}`
          console.error(error.config)
          return axios.request(error.config);

        } catch (error) {
          // alert("세션이 만료되었습니다.")
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
