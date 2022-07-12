import React from 'react'

const UseRandomJoke = (firstName, lastName, change) => {
    const [joke, setJoke] = React.useState("");

    React.useEffect(() => {
        
        async function fetchJoke(){
            const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
            const data = await response.json();
            setJoke((data.value.joke).replace(/&quot;/g, '"'));
    
        }
        fetchJoke();
        }, [firstName, lastName, change])
    return joke;
}

export default UseRandomJoke