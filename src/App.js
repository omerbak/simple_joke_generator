import React from 'react';
import UseRandomJoke from './UseRandomJoke';

function App() {
  
  const firstNmRef = React.useRef(null);
  const lastNmRef = React.useRef(null);
  

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [change, setChange] = React.useState(false);
  const joke = UseRandomJoke(firstName, lastName, change);

  function generateJoke(e){
    e.preventDefault();
    setFirstName(firstNmRef.current.value);
    setLastName(lastNmRef.current.value);
    setChange(prev => !prev);
  }

  return (
    <div className="App bg-sky-700 min-h-screen grid place-content-center">
      <div className="container max-w-xl bg-slate-50 py-6 px-7 rounded-lg shadow-lg">
        <h2 className="app-title text-3xl font-bold text-center mb-7">Joke Generator</h2>
        <div className="joke-container bg-sky-100 py-3 px-3 text-center mb-5 rounded-lg">
          {(firstName.length !== 0 || lastName.length !== 0) ? <p className='text-lg'>{joke}</p> : <p className='text-sm text-red-400'>Enter A Name</p>}
        </div>
        <form className='text-center'>
          <input placeholder='first name' ref={firstNmRef} className='px-3 py-3 max-w-lg bg-slate-100 mx-2 rounded-lg'/>
          <input placeholder='last name' ref={lastNmRef} className='px-3 py-3 max-w-lg bg-slate-100 rounded-lg'/>
          <button onClick={generateJoke} className='block m-auto rounded-lg bg-sky-700 px-4 py-3 text-white mt-3'>Generate Joke</button>
        </form>
      </div>
    </div>
  );
}

export default App;
