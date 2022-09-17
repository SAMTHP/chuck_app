import React, { useState, useEffect } from "react";
import {Joke} from "../../../../../api/model/Joke"

interface JokeCardPros {
    joke: Joke;
}

const JokeCard = ({joke} : JokeCardPros) => {
    let splitedTitle = joke.value.split(' ');
    let title = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;

	return (
		<div className="card shadow joke-card">
            <h1 className="joke-title-card">{title}</h1>
            <p style={{color: "black"}}>{joke.value}</p>
        </div>
	);
}

export default JokeCard;
