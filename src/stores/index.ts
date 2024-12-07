import { createContext, useContext } from 'react'
import commonStore from './common'

export const store = {
  commonStore,
}

const stores = createContext(store)

export const useStores = () => {
  return useContext(stores)
}

export default stores
