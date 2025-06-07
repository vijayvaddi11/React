import { useState ,useCallback,useEffect,useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAlowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);



  //useRef hook
  const passwordRef = useRef(null)



  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAlowed) str += "!@#$%^&*|\/~`";
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
    
    
  }, [length, numberAllowed, charAlowed, setPassword])
  


  const copyPasswordToClipbord = useCallback(() => {
    //passwordRef.current?.select() //this can select password help to user know that text copying by generating a blue select backround
    //passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password).then(() => {
       setCopied(true);
       setTimeout(() => setCopied(false), 1500);
    })
  },[password])


  
  useEffect(() => {
    passwordGenerator()
  },[length,numberAllowed,charAlowed,passwordGenerator])





  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center mb-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='bg-gray-100 outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipbord}
          className='outline-none bg-orange-500 text-white px-3 py-1 shadow-lg shrink-0'
        >
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAlowed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      <div>
        <h1>
          {copied && <span className='ml-2 text-green-400 text-sm'>Copied!</span>}
        </h1>
      </div>
    </div>
  );
}

export default App
