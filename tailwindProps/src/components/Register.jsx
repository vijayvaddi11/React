import React from 'react'

function Register(props) {
  console.log(props.details)
 
  return (
    <div>
      
              <button className='mb-10 w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]'>
        {props.userName||"visit me"}
              </button>
              
          </div>
        
  );
}

export default Register
