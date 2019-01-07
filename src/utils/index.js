import qs from 'qs'
import { request } from './request'

export async function apiGet (url, params) {
  let paramsStr = qs.stringify(params, {
    arrayFormat: 'repeat',
    skipNulls: true,
    addQueryPrefix: true
  })

  return request(`${url}${paramsStr}`)
}

export async function apiDelete (url, params) {
  return request(url, {
    method: 'DELETE',
    data: params
  })
}

export async function apiPost (url, params) {
  return request(url, {
    method: 'POST',
    data: params
  })
}

export async function apiPut (url, params) {
  return request(url, {
    method: 'Put',
    data: params
  })
}
