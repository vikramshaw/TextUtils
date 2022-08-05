import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        // console.log("LowerCase was Clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () =>{
        let newText= "";
        setText(newText)
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
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            
            <h1>Your Text Summary</h1>
            <p>Number of words: {text.split(" ").length} and Number of characters: {text.length}</p>
            <p>Time to read one word is {0.008 * text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )
}
