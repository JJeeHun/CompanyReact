import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <span>시스템관리</span>
          <ul className='menu'>
            <li>회사관리</li>
            <li>운영관리</li>
            <li>개발샘플</li>
            <li>개발도구</li>
            <li>마감관리</li>
          </ul>
        </li>
        <li>
          <span>마스터</span>
        </li>
        <li>
          <span>기준정보</span>
        </li>
        <li>
          <span>입고관리</span>
        </li>
        <li>
          <span>출고관리</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation