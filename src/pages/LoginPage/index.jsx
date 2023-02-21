import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/button'
import PageLink from '../../components/PageLink'
import FormContainer from '../../components/FormContainer'

const LoginPage = () => {
  return (
    <div className="App" style={{ height: "100vh", display: "flex" }}>
      <FormContainer>
        <Input type='email' label='Email ID' placeholder='Enter Email ID' />
        <Input type='password' label='Password' placeholder='Enter password' />
        <Button text='LOG IN' />
        <PageLink navRoute={"/register"} />
      </FormContainer>
    </div>
  )
}
export default LoginPage