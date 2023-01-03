import React, { useEffect, useState } from "react";
import Form from "../form/Form";
import Table from "../table/Table";
import './Content.css';

const Content = () => {

    const [wordsForTable, setWordsForTable] = useState({
        eng: [],
        ru: [],
        gr: [],
        lat: [],
    })

    function setTable(event, form) {
        event.preventDefault();
        wordsForTable[form.radio].push(form.word)
        setWordsForTable({
            ...wordsForTable,
        })
        setWordsForTable({
            ...wordsForTable,
            eng: Array.from(new Set(wordsForTable.eng)),
            ru: Array.from(new Set(wordsForTable.ru)),
            gr: Array.from(new Set(wordsForTable.gr)),
            lat: Array.from(new Set(wordsForTable.lat)),
        })
        console.log(wordsForTable)
    }

    function saveChanges() {
        console.log(wordsForTable.eng)
        console.log(wordsForTable.ru)
        console.log(wordsForTable.gr)
        console.log(wordsForTable.lat)
    }

    return (
        <div className="container">
            <Form onSubmit={setTable} saveChanges={saveChanges} />
            <Table 
                engWords={wordsForTable.eng}
                ruWords={wordsForTable.ru}
                grWords={wordsForTable.gr}
                latWords={wordsForTable.lat}
            />
        </div>
    )
}

export default Content;