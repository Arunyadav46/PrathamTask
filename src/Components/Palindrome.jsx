import React, { useState } from 'react'


function Palindrome() {
     const [input, setInput] = useState('');
     const [result, setResult] = useState('');

const isPalindrome = (str)=>{
  //loop for remove newmeric value
  let cleaned = '';
  for(let i=0; i<str.length; i++){
     const char = str[i].toLowerCase();
      if((char>='0' && char<='9')||(char>='a' && char<='z')){
        cleaned = cleaned+char;
      }
  }

  //two pointer algoritham
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
    setResult(check ? 'It is a Palindrome' : 'Not a Palindrome.');
  };
  return (
    
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Palindrome Checker</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}  placeholder="Enter a word or number"className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"/>
        <button onClick={handleCheck}  className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300" > Check Palindrome</button>
        {result && (
          <p className="mt-6 text-lg font-medium text-center text-gray-700">{result}</p>
        )}
      </div>
    </div>

  
  )
}

export default Palindrome