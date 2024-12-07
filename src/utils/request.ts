import { isPlainObject } from 'lodash'

import { message } from 'antd'

const login = () => {
  console.log('login')
}

function notify(notice: string) {
  message.error(notice)
}

export interface RequestParams {
  codeField?: string;
  msgField?: string;
  isSuccess?: (body: any) => boolean;
  shouldLogin?: (body: any) => boolean;
  hideNotify?: boolean;
  isBinary?: boolean
}

export default async function request(url: string, options: RequestInit = {}, params: RequestParams & { messageField?: string } = {}): Promise<any> {
  const {
    codeField = 'code',
    msgField = 'msg',
    messageField = 'message',
    isSuccess,
    shouldLogin,
    hideNotify = false,
    isBinary = false,
  } = params
  const defaultOptions: RequestInit = { credentials: 'include',  }
  options = { ...defaultOptions, ...options }


  if ((['POST', 'PUT', 'DELETE'] as any[]).includes(options.method)) {
    const defaultContentType = !isBinary ? {
      'Content-Type': 'application/json;charset=utf-8',
    } : undefined

    options.headers = {
      Accept: 'application/json',
      ...defaultContentType,
      ...options.headers,
    }
    if (typeof options.body === 'object' && (!isBinary)) {
      options.body = JSON.stringify(options.body)
    }
  }

  try {
    const response: Response = await window.fetch(url, options)
    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(`网络异常, statusCode(${response.status})`)
    }
    if (response.headers.get('content-type') === 'text/event-stream') {
      return {}
    }
    const json = await response.json()
    if (!isPlainObject(json)) {
      throw '返回数据格式错误'
    }
    if (typeof shouldLogin === 'function' ? shouldLogin(json) : ([1024, 1102, 1005, 1101, 1009].includes(+json[codeField]))) {
      login()
      throw 'login'
    } else if (typeof isSuccess === 'function' ? isSuccess(json) : (+json[codeField] === 0 || +json[codeField] === 200)) {
      return json
    } else {
      throw json
    }
  } catch (e: any) {
    console.log(e)
    if (e === 'login') {
      throw e
    }
    if (!(e instanceof Error) && (e[msgField] || e[messageField])) {
      if (hideNotify !== true) {
        notify(e[msgField] || e[messageField])
      }
    } else if (hideNotify !== true) {
      notify('网络错误')
    }

    throw e
  }
}
