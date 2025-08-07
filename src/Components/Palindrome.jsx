import React, { useState } from 'react'


function Palindrome() {
     const [input, setInput] = useState('');
     const [result, setResult] = useState('');

const isPalindrome = (str)=>{
  let cleaned = '';
  for(let i=0; i<str.length; i++){
     const char = str[i].toLowerCase();
      if((char>='0' && char<='9')||(char>='a' && char<='z')){
        cleaned = cleaned+char;
      }
  }
  let start = 0;
  let end = cleaned.length-1;

  while(start<end){
    if(cleaned[start]!=cleaned[end]){
        return false;
    }
    start++;
    end--;
  }
  return true;
}

  // Button click handler
  const handleCheck = () => {
    if(input.trim() === ''){
        setResult('Please enter to check something');
        return;
    }

    //function call    
    const check = isPalindrome(input);
    setResult(check ? 'It is a Palindrome!' : 'Not a Palindrome.');
  };
  return (
    <div className='w-[100%] min-h-screen bg-blue-500 flex items-center justify-center'>
        <div className='flex flex-col items-center bg-white xl:w-[35%] xl:h-[30vh] rounded-md'>
            <h1 className='text-2xl font-bold mb-5 mt-2 p-2'>Palindrome Checker</h1>
            <input type='text' value={input} onChange={(e)=>{
                return setInput(e.target.value)
            }} className='px-4 py-2 border-2 xl:w-[60%] rounded-md outline-none focus:ring-2 focus:ring-blue-500'  placeholder='Enter a number or word' />
            <button onClick={handleCheck} className='mt-3 mb-2 xl:w-[60%] bg-blue-500 text-white px-3 py-2 rounded-md'>Check palindrome</button>
            {result && (
          <p className="mt-2 text-lg font-medium text-center text-gray-700">{result}</p>
       )}
        </div>
    </div>
  )
}

export default Palindrome