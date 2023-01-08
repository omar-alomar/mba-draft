import React from 'react'
import Header from '../components/Header'
import Link from '../components/Link'
import Modal from '../components/Modal'
import Button from '../components/Button'

const Links = () => {
  return (
    <>
    <div className="flex flex-col w-full">
        <Header Text="Links" />
        <div className="m-5">
          <Link name="FB" url="www.facebook.com" />
          <Link name="IG" url="www.instagram.com" />
        </div>
        <Button type="red" text="fucku" />
    </div>

    </>
  )
}

export default Links