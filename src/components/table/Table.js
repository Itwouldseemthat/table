import React from "react";
import "./Table.css";


const Table = (props) => {
    return (
        <div className="tableWrap">
            <div className="border">
            <div className="column">
                <div className="title">English</div>
                <div className="words">
                    {
                        props.engWords.map((item, index) => (
                            <a key={index} className="word">{item}</a>
                        ))
                    }
                </div>
            </div>
            <div className="column">
                <div className="title">Russian</div>
                <div className="words">
                    {
                        props.ruWords.map((item, index) => (
                            <a key={index} className="word">{item}</a>
                        ))
                    }
                </div>
            </div>
            <div className="column">
                <div className="title">Greek</div>
                <div className="words">
                    {
                        props.grWords.map((item, index) => (
                            <a key={index} className="word">{item}</a>
                        ))
                    }
                </div>
            </div>
            <div className="column">
                <div className="title">Latin</div>
                <div className="words">
                    {
                        props.latWords.map((item, index) => (
                            <a key={index} className="word">{item}</a>
                        ))
                    }
                </div>
            </div>
        </div>
        </div>
    )
}


export default Table;