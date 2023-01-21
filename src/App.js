import { useState } from "react"
import Dictionary from "./Dictionary";
import "./DictionaryCss.css"

function App() {

  const [newWord, setNewWord] = useState("");
  const handleNewWord = (event) => {
    setNewWord(event.target.value);
  }

  return (
    <div className = "App">
      <div className = "gameName">Dictionary</div>
      <input className = "textInput"onChange = {handleNewWord}/>
      <Dictionary newWord = {newWord}/>
    </div>


  )
}

export default App;
