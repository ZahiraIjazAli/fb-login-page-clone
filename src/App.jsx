import React from 'react'

function App() {
  return (
    <div className='flex  w-full h-screen bg-gray-100'>
      <div className="container flex  mx-auto items-center justify-center">
      <div className="left w-1/3 mx-14"> 
        <img className='w-80 ' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" />
        <p className='text-3xl mx-8'>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right flex flex-col bg-white p-8 rounded-xl w-1/4 text-lg relative">
        <input className='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg' type="email" placeholder='Email address or phone number' />
        <input className='px-4 h-12 my-2 border border-1 outline-blue-600 border-gray-200 rounded-lg' type="password" placeholder='Password' />
        <button className='bg-blue-600 hover:bg-blue-700 text-white my-2 py-3 rounded-md font-bold text-xl'>Log In</button>
        <span className='text-blue-600 text-center text-sm my-2 cursor-pointer hover:underline'>Forgotten password?</span>
         <hr className='my-2'></hr>
         <button className='bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-3 mx-auto w-fit rounded-md font-bold text-xl'>Create new account</button>
      <span className="absolute -bottom-12 text-sm"><span className="font-bold cursor-pointer hover:underline">Create a Page</span> for a celebrity, brand or business.</span>
      </div>
      </div>
    </div>
  )
}

export default App