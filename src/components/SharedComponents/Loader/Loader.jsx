import React from 'react'
import style from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={style.loader}>
      <svg width="0" height="0">
        <defs>
          <filter id="goo" x="-50%" width="200%" y="-50%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"/>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm"/>
          </filter>
        </defs>
      </svg>
      <svg className={style.loaderWrap}>
        <g filter="url(#goo)">
          <circle className={style.loaderWrapCircle} fill="#A639D8" r="24" cx="160" cy="90"/>
          <circle className={`${style.loaderWrapCircle} ${style.loaderWrapRight}`} fill="#A639D8" r="24" cx="160" cy="90"/>
        </g>
      </svg>
      <span className={style.loaderTitle}>View is loading</span>
    </div>
  )
}

export default Loader
