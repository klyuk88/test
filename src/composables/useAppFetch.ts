import { createFetch } from '@vueuse/core'

export const useAppFetch = createFetch({
  baseUrl: 'https://analytics.flx.center/api',
  options: {
    beforeFetch({ options }) {
      const token = localStorage.getItem('token')
      Object.assign(options, {
        headers: {
          Authorization: token
        }
      })

      return { options }
    }
  },
  fetchOptions: {
    mode: 'cors',
    headers: {
      accept: 'application/json'
    }
  }
})
