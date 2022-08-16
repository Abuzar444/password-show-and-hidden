import {React, useState} from 'react'
import {AiOutlineEye, AiFillEyeInvisible} from 'react-icons/ai'
const App = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  return (
    <div className='w-full h-screen bg-[#F3F3F9] flex justify-center items-center'>
      <div className='w-[400px] h-[auto] bg-[#fff] shadow-lg p-4 px-10'>
        <div className=' '>
          <h1 className='text-[20px] font-bold'>Enter Your Password</h1>
        </div>
        <div className="img-section flex px-[.4px] items-center pt-5">
          <img src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-16 h-16 rounded-full' />
          <div className='px-5 text-start'>
            <h3>Bussiness Account</h3>
            <h4 className='font-bold'>Abuzar Dawar</h4>
          </div>
        </div>
        <div className='mt-5'>
          <label className=''>Password</label><br />
          <div className='flex justify-center items-center'>
        <input type={show ? "text" : 'password'} placeholder = 'Password' className='border-2 w-full py-2 rounded px-2 outline-none'/><span className='pl-5 cursor-pointer' onClick={() => setShow(!show)}>{show?<AiOutlineEye /> : <AiFillEyeInvisible />}</span>
        </div>
        </div>
        <div className='flex justify-between items-center py-10'>
          <div className='flex'>
          <div onClick={() => setToggle(!toggle)} className={`w-10 h-5 rounded-full bg-[#1D3153] flex ${toggle ? 'justify-start' : 'justify-end'} items-center cursor-pointer`}>
          <div className='w-4 h-4 bg-[#fff] rounded-full mx-[1px]'></div>
          </div>
          <span className='text-sm ml-[3px]'>Stay Signed In</span>
          </div>
          <button className='bg-[#1D3153] text-white py-2 px-4 rounded mr-10'>continue</button>
        </div>
        <a href="#" className='underline'>Reset Password</a>
      </div>
    </div>
  )
}

export default App