import React, { useState, useEffect } from "react";
import { Joke } from "../../../../api/model/Joke";

interface SearchListProps {
    jokes: Joke[],
    input: string,
}

function SearchList({jokes, input} : SearchListProps) {
    let data = [{
        "id": 1,
        "text": "Devpulse"
    }, {
        "id": 2,
        "text": "Linklinks"
    }, {
        "id": 3,
        "text": "Centizu"
    }, {
        "id": 4,
        "text": "Dynabox"
    }, {
        "id": 5,
        "text": "Avaveo"
    }, {
        "id": 6,
        "text": "Demivee"
    }, {
        "id": 7,
        "text": "Jayo"
    }, {
        "id": 8,
        "text": "Blognation"
    }, {
        "id": 9,
        "text": "Podcat"
    }, {
        "id": 10,
        "text": "Layo"
    }] 
;

    const filteredData = jokes.filter((el) => {
        //if no input the return the original
        if (input === '') {
            return "";
        }
        //return the item which contains the user input
        else {
            return el.value.toLowerCase().includes(input)
        }
    })

    // ok
    return (
        <ul className="up-arrow">
            {filteredData.map((item) => (
                <li key={item.id}>
                    <button>
                        {item.value}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default SearchList