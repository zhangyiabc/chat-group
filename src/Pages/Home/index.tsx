import React, { useCallback, useEffect } from 'react'
import styles from './index.module.scss'
 
interface Props {
  [key: string]: any
}
 
const Comp: React.FC<Props> = (props) => {
 
  return (

    <div className={styles.homeWrapper}>
      <div className={styles.content}>home</div>
    </div>
  )
}

export default Comp
