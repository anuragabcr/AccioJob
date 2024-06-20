'use client'
import React, { useState } from 'react'

const Home = () => {
  const [ form, setForm ] = useState({email: {text: '', hasError: true}, pass: {text: '', hasError: true}, repass: {text: '', hasError: true}})
  
  const handleInput = (value: string, field: string) => {
    let error = true

    if (field === 'email') {
      const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      error = !emailRegex.test(value);
    }else if(field === 'pass') {
      error = !(value.length >= 8)
    }else if (field === 'repass') {
      error = !(form.pass.text == value)
    }

    setForm((prevState) => ({
      ...prevState,
      [field]: {
        text: value,
        hasError: error
      }
    }))
  }
  
  const handleSubmit = () => {
    if (form.email.hasError || form.pass.hasError || form.repass.hasError) {
      alert("Can't submit the form")
    } else {
      alert("Form submitted successfully")
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='grid content-center'>
        <div className='flex flex-col m-2'>
          <label htmlFor='email'>Email</label>
          <input className={form.email.hasError ? 'border-solid rounded-md border-red-500 border-2' : 'border-solid rounded-md border-green-500 border-2'} placeholder='Enter Email ID' type='email' id='email' value={form.email.text} onChange={(e)=> handleInput(e.target.value, 'email')} />
          {form.email.hasError && <div className='text-red-500'>Invalid Email formal</div>}
        </div>
        <div  className='flex flex-col m-2'>
          <label htmlFor='pass'>Password</label>
          <input className={form.pass.hasError ? 'border-solid rounded-md border-red-500 border-2' : 'border-solid rounded-md border-green-500 border-2'} placeholder='Enter Password' type='text' id='pass' value={form.pass.text} onChange={(e) => handleInput(e.target.value, 'pass')} />
          {form.pass.hasError && <div className='text-red-500'>Password must be at least 8 characters</div>}
        </div>
        <div className='flex flex-col m-2'>
          <label htmlFor="repass">Confirm Password</label>
          <input className={form.repass.hasError ? 'border-solid rounded-md border-red-500 border-2' : 'border-solid rounded-md border-green-500 border-2'} placeholder='Enter Confirm Password' type='text' id='repass' value={form.repass.text} onChange={(e) => handleInput(e.target.value, 'repass')} />
          {form.repass.hasError && <div className='text-red-500'>Passwords do not match</div>}
        </div>
        <button className='place-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Home