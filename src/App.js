import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
function App() {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  
  const apiFetch =(w)=>{
    fetch(`https://dummyjson.com/recipes/search?q=${w}`).then((res)=>res.json()).then((res)=>{
      console.log(res)
      setData(res.recipes)
    })
    .catch(()=>{})
  } 
  const debounce = (fn ) => {
    let time
    return (args)=>{
      clearTimeout(time)
      time = setTimeout(()=>{
        fn.call(this, ...args)
      }, 2000)
    }
  }
  const wordS = debounce(apiFetch)
  useEffect(()=>{
    let time  ;
    wordS(word) 
    console.log(word)
    //console.log(word)
    // return()=>{
    //   clearTimeout(time)
    //   time = setTimeout(()=>{
    //     apiFetch(word)
    //   }, 2000)
    // }

  },[word])
  return (
    <div className="App">
      <div className='search'>
      <h1>
        Search bar
      </h1>
      <div className='input-search-bar'>
        <input onChange={(e)=>{setWord(e.target.value)}} className="search-input"/>
        <div className='search-suggestion-box'>
      {data?.map((some, index)=>{
        console.log(some)
        return(
          <div className=''>{some?.name }
          </div>
        )
      })}
      </div>
      </div>
     
      </div>
   
    
    
    </div>
  );
}

export default App;
