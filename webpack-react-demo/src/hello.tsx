import React from 'react'

import styles from './assets/css/style.module.scss'


export default function Hello () {
  return (
    <div>
      hello webpack
      <p className={styles.hello}>Hello webpack</p>
    </div>
  )
}