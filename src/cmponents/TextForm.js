import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        // console.log("LowerCase was Clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = () =>{
        let newText= "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // the value of text is "Enter the text" and the function to change the State is setText
    // text = "dcjdkshuho"; ---wrong way to chnage the State
    // setText("dkjbdwicow"); ----correct way to change the State
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark' ? 'white':'black'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#1e3f5b':'white', 
                                color: props.mode === 'dark' ? 'white':'black'}} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>Number of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} and Number of characters: {text.length}</p>
                <p>Time to read one word is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter something above to preview"}</p>
            </div>
        </>
    )
}
