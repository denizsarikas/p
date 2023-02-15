import React from 'react'
import '../Login/Login.css'
import Logo from '../../img_and_logos/Logo.svg'
import Background from '../../img_and_logos/Picture.png'
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
      e.preventDefault();
      const userInfo = { email, password };
      try {
        const response = await axios.post('https://assign-api.piton.com.tr/api/rest/login', userInfo);
        console.log('Giriş işlemi başarılı:', response.data);
      } catch (error) {
        console.error('Giriş hatası:', error);
      }
    };


  return (
    <div className='flex justify-center items-center'>
      <div className='flex-1 flex flex-col'>
        <img
          src={Background} alt='arkaplan' />
      </div>

      
      <div className='flex-1 flex flex-col justify-center items-center'>
        <table>
          <tr>
            <img src={Logo} className='h-78 w-120 mb-12 ' alt='logo' />
          </tr>
          <tr>
            <h3 className='font-manrope font-semibold text-sm lg:text-lg text-primary opacity-60'>Welcome back!</h3>
            <h1 className='font-manrope font-bold text-2xl leading-11 text-gray-900 mb-12'>Login to your account</h1>
          </tr>
          <tr>
            <div className='mb-12'>
              <form>

                <label className='block mx-auto'>
                  <span className='block'>E-mail</span>
                  <input
                    className='p-2 w-full border border-gray-300 rounded'
                    placeholder='john@mail.com'
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>

                <label className='block mx-auto'>
                  <span className='block'>Password</span>
                  <input
                    className='p-2 w-full border border-gray-300 rounded'
                    placeholder='********'
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div class="flex items-center">
                    <input type="checkbox" id="remember" className="h-4 w-4 border-gray-300 rounded text-primary-color focus:ring-primary-color" />
                    <label for="remember" className="ml-2 block text-sm font-medium text-[#6251DD]">Remember Me</label>
                  </div>
                </label>

              </form>
            </div>
          </tr>
          <tr>
            <button className='mb-2 flex flex-row justify-center items-center w-48 h-16 bg-[#EF6B4A] rounded text-white'  onClick={handleLogin}>Login</button>
            <button className='flex-row justify-center items-center w-48 h-16 bg-white rounded-md text-indigo-600 border border-indigo-600'>Register</button>
          </tr>

        </table>



      </div>
    </div>
  )
}

export default Login