import React, { useState } from "react";
import './Form.css';

const Form = (props) => {

    const [form, setForm] = useState({
        radio: 'eng',
        word: '',
    })

    function addWordToTable(event) {
        event.preventDefault()
        console.log(form)
    }


    function setRadio(e) {
        setForm({
            ...form,
            radio: e.target.value,
        })
    }

    function setWord(e) {
        setForm({
            ...form,
            word: e.target.value,
        })
    }



    return (
        <div className="formWrap">
        <form className="form" onSubmit={(event) => props.onSubmit(event, form)}>
            <div className="radioBtns">
                <label>
                    <input 
                        type="radio" 
                        className="radio" 
                        value="eng" 
                        onChange={(e) => setRadio(e)}
                        checked={form.radio == 'eng' ? true : false}
                    ></input>
                    Eng
                </label>    
                <label>
                    <input 
                        type="radio" 
                        className="radio" 
                        value="ru" 
                        onChange={(e) => setRadio(e)}
                        checked={form.radio == 'ru' ? true : false}
                    ></input>
                    Ru
                </label>    
                <label>
                    <input 
                        type="radio" 
                        className="radio" 
                        value="gr" 
                        onChange={(e) => setRadio(e)}
                        checked={form.radio == 'gr' ? true : false}
                    ></input>
                    Grec
                </label>    
                <label>
                    <input 
                        type="radio" 
                        className="radio" 
                        value="lat" 
                        onChange={(e) => setRadio(e)}
                        checked={form.radio == 'lat' ? true : false}
                    ></input>
                    Lat
                </label>    
            </div>
            <div className="inputWrap">
                <input className="input" type="text" value={form.word} onChange={(e) => setWord(e)}></input>
                <button className="btn" type="submit">add</button>
            </div>    
        </form>
        <button className="save" type="submit" onClick={props.saveChanges}>Save</button>
        </div>
    )
}

export default Form;