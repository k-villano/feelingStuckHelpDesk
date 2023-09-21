import React, { useState } from "react";

const OptionsContainer = () => {
    const [text, setText] = useState(['', '', ''])

    const onChangeHandler = (e) => {
        console.log(e)
       
        text[e.target.id] = e.target.value
        setText([...text])
    }

    const onClickHandler = async () => {
        try {
          const res = fetch('/tickets', {
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

        } catch (err) {

        }
    }




    return(
        <div>
            I'm feeling stuck
            <form >
                <label htmlFor='who'>your name</label>
                <input type = 'text' id= {0} name = 'who'  onChange={onChangeHandler} className="textbox" ></input>
                <label htmlFor='what'>whatcha stuck on</label>
                <input type = 'text' id= {1} name = 'what' onChange={onChangeHandler} className="textbox"></input>
                <label htmlFor='msg'>SOS message?</label>
                <input type = 'text' id= {2} name = 'msg' onChange={onChangeHandler} className="textbox"></input>
                <button onClick={onClickHandler} className="textbox" id='sendButton'>send!</button>
            </form>
        </div>
    )
}

export default OptionsContainer;