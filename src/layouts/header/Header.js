import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="#">ysson 님 환영합니다.</a>
          <span className='division'>|</span>
        </li>
        <li>
          <a href="#">비밀번호 변경</a>
          <span className='division'>|</span>
        </li>
        <li>
          <a href="#">화면잠금</a>
          <span className='division'>|</span>
        </li>
        <li>
          <a href="#">로그아웃</a>
        </li>
      </ul>
    </header>
  )
}

export default Header