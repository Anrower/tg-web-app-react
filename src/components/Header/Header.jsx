import React from 'react';
import Button from '../Button/Button';
import { useEffect } from 'react';
const tg = window.Telegram.WebApp;

const Header = () => {

  useEffect(() => {
    tg.ready();
  }, [])

  const onClose = () => {
    tg.close()
  }
  return (
    <header className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className='usename'>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </header>
  )
}

export default Header