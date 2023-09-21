import React, { useState, useEffect } from "react";

const OptionsContainer = (props) => {
    const [text, setText] = useState(['', '', ''])

    const onChangeHandler = (e) => {
        console.log(e)
       
        text[e.target.id] = e.target.value
        setText([...text])
    }

    const onClickHandler = async (e) => {
       
        try {
            e.preventDefault();
          const res = await fetch('/tickets', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },  
            body: JSON.stringify({
                name: text[0],
                category: text[1],
                message: text[2]
            })
          })
        
        setText(['', '', '']);
        //   console.log('should be empty text', text)
          props.getMyTickets();
        } catch (err) {
           console.log('some error', err)
        }
    }

    console.log('this the text', text);


    return(
        <div>
            <span className="feelStuck">I'm feeling stuck</span>
            <form >
                <label htmlFor='who' className="firstLabel">your name</label>
                <input type = 'text' id= {0} name = 'who'  onChange={onChangeHandler} className="textbox" value={text[0]}></input>
                <label htmlFor='what'>whatcha stuck on</label>
                <input type = 'text' id= {1} name = 'what' onChange={onChangeHandler} className="textbox" value={text[1]}></input>
                <label htmlFor='msg'>SOS message?</label>
                <input type = 'text' id= {2} name = 'msg' onChange={onChangeHandler} className="textbox" value={text[2]}></input>
                <button onClick={onClickHandler} className="textbox" id='sendButton'>send!</button>
            </form>
        </div>
    )
}

export default OptionsContainer;