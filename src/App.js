import logo from './logo.svg';
import './App.css';
import {useEffect, useState, useMemo} from "react"
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
    return (...args)=>{
      clearTimeout(time)
      time = setTimeout(()=>{
        fn(...args)
      }, 2000)
    }
  }
  const wordS = useMemo(()=>debounce(apiFetch),[apiFetch])
  useEffect(()=>{
    
    wordS(word) 
    
    console.log(word, "dcc")
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
        <input value={word} onChange={(e)=>{setWord((prev)=>e.target.value)}} className="search-input"/>
        <div className='search-suggestion-box'>
      {data?.map((some, index)=>{
        console.log(some)
        return(
          <div onClick={()=>{setWord(some?.name)}} className=''>{some?.name }
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
