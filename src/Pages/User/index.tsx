import React, {useCallback, useState} from 'react'
import { observer } from 'mobx-react-lite'

import { Button } from 'antd'
import { useStores }  from '@/stores'

const User:React.FC<any> = () => {
  const [count, setCount] = useState(0)
  const { commonStore } = useStores()
  return <div>
    count: {count}
    <div>
      <Button type='primary' onClick={() => setCount(count + 1)}>add</Button>
    </div>
    <div className="">
      <Button onClick={() => commonStore.startLoading()}>设置全局loading</Button>
    </div>
  </div>
}

export default observer(User)
