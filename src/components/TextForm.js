// import React from 'react'
import React,{useState} from 'react'


export default function TextForm(props) {

    const handleRemoveExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces is removed", "success");

    }

    const handleCopyClick = () => {
      // first way
      // navigator.clipboard.writeText(text);
      // alert('Text copied to clipboard!');

      //2nd way
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      //alert('Text copied to clipboard!');
      props.showAlert("Text copied to clipboard!", "success");
    }


    const handleDownloadClick = () => {
      const element = document.createElement('a');
      const file = new Blob([text], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = 'textfile.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      props.showAlert("Downloaded!", "success");
    };

    const handleClearClick=()=>{
      let newText= '';
      setText(newText)
      //alert("are you sure")
      props.showAlert("Text cleared!", "success");
    }

    const handleLoClick = ()=>{
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case!", "success");
    }

    const handleUpClick = ()=> {
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();                        //whatever we write in box that will come in "text" variable(by handleOnChange function se) and then here we convert that in upercase and then again set this upercase value in "text" variable by 'setText'
        setText(newText)
        props.showAlert("Converted to upper case!", "success");
    }

    const handleOnChange = (event)=> {                 //this is event handler function , when we try to change text in that box at UI then this event handler function is called ,, and what is happening here that we are changeing "text" variable's valure by using 'setText'...whatever we write in that text box that will come in that "text" variavle bcoz we have changed this by ( setText(event.target.value=> means jo value humne us box me likhi wahi value us text variable me set ho iska ye matlan hai))
      //  console.log("onChanged");
        setText(event.target.value)
    }

    const[text, setText] = useState('Enter text here');      //this is hooks, hooks is nothing but it is useState( means we can create a variable like "text" whose bydefault value is written with useState() and futher we can change this "text" variable value using "setText()"" method which is written in this array)
   // text = "new text";   // wrong way to change the state
   // setText("new text");  // correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#052c5b'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#052c5b'}} id="myBox" rows="8"></textarea>          
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>                
        <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-info" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-warning mx-1" onClick={handleDownloadClick}>Download Text</button>
        <button className="btn btn-secondary mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-danger mx-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#052c5b'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the above text box to preview it here"}</p>
    </div>
    </>
  )
}
