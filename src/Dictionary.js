import React from 'react'
import { useState} from "react"
import "./DictionaryCss.css"


export default function Dictionary(props) {
    const [dictionary, setDictionary] = useState([]);
    const [screenMessage, setScreenMessage] = useState("");

    const addWordToDictionary = () => {
        setDictionary([...dictionary, props.newWord]);
    }

    const checkWord = () => {
        dictionary.includes(props.newWord) ? setScreenMessage("Cuvantul exista in dictionar") : setScreenMessage("Cuvantul nu exista in dictionar");
  }

  return (
    <div className = "container">
      <button className = "addWordButton" onClick = {addWordToDictionary} >Add Word</button>
      <button className = "searchButtom"onClick = {checkWord}> Search</button>
      <div className = "screenMessage">{screenMessage}</div>
    </div>
  )
}
