import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function ReactHook() {
  const [counter, setCounter] = useState(0);
  const [keyword,setKeyword] = useState("")
  const onClick = () => {
    setCounter((prev) => prev +1);
  }
  const onChange = (e) => {
    setKeyword(e.target.value);
  }
  // console.log("i run all the time")
  
  useEffect(()=>{
    console.log("i run only once.")
  }, []);
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5)
      console.log("I run when 'keyword' changes.")
  }, [keyword]);
  useEffect(()=>{
    console.log("I run when 'counter' changes.")
  }, [counter]);
  useEffect(()=>{
    console.log("I run when 'keyword & counter' changes.")
  }, [keyword, counter]);
  
  return (
    <div >
      <input value = {keyword} onChange = {onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default ReactHook;
