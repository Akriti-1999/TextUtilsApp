import React, {useState} from 'react'

export default function TextArea(props) {
  // React state ----
  const [text, setText] = useState("Enter text here !");

  const changeHandler = (event) => {
    console.log("text changed");
    // important
    setText(event.target.value);
  }

  const printUpperHandler = () => {
    const newText = text.toUpperCase();
    setText(newText);
    // console.log(text);
  }

  const wordCounter = () => {
    if(text === "") {
      return 0;
    }
    else {
      return text.split(" ").length;
    }
  }

  const handleCapitalCase = () => {
    console.log(text);
    console.log(typeof(text));
    const stringArray = text.split(" ");
    console.log(stringArray)
    for(let i = 0; i<stringArray.length; i++) {
      stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
      
      // stringArray[i][0].toUpperCase();
      console.log('lol')
    }
    const newText = stringArray.concat(" ");
    setText(newText);
  }

  return (
    <>
    <div style={props.style}>
    <div className="container mb-3">
      <label for="exampleFormControlTextarea1" className="form-label">Enter your text below</label>
      <textarea className="form-control" style={{backgroundColor:props.mode==='dark' ? 'grey' : 'white', color:props.mode==='dark' ? 'white' : 'black'}} value={text} onChange={changeHandler} id="exampleFormControlTextarea1" rows="8"></textarea>
      <button className="btn btn-primary mx-2 my-3" onClick={printUpperHandler}>To Upper</button>
      <button className="btn btn-primary mx-2 my-3" onClick={handleCapitalCase}>Capital Case</button>
    </div>
    <div className="container my-3">
      <h3>Preview</h3>
      <div className="border border-dark">
      <p>{text}</p>
      </div>
      <div className="my-2">
        <p>Number of characters : {text.length}</p>
        <p>Number of words : {wordCounter()}</p>
      </div>
    </div>
    </div>
    </>
  )
}
