import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/button'
import PageLink from '../../components/PageLink'

const LoginPage = () => {
  return (
    <div>
        <Input label='Email ID' placeholder='Enter Email ID'/>
        <Input label='Password' placeholder='Enter password'/>
        <Button text='LOG IN'/>
        <PageLink/>
    </div>
  )
}

export default LoginPage