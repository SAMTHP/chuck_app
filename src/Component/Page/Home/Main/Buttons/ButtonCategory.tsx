import React, { useState, useEffect } from "react";
import { Joke } from "../../../../../api/model/Joke";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { onCategoryChange, selectedCategorySelector } from "../../../../../redux/slices/JokeSlice";



export const categoryTitle = {
    animal: {
        bgColor: "red",
    },
    career: {
        bgColor: "orange"
    },
    celebrity: {
        bgColor: "yellow"
    },
    dev: {
        bgColor: "coral"
    },
    explicit: {
        bgColor: "cyan"
    },
    fashion: {
        bgColor: "darkgoldenrod"
    },
    food: {
        bgColor: "darkgreen"
    },
    history: {
        bgColor: "chocolate"
    },
    money: {
        bgColor: "crimson"
    },
    movie: {
        bgColor: "blue"
    },
    music: {
        bgColor: "bisque"
    },
    political: {
        bgColor: "blueviolet"
    },
    religion: {
        bgColor: "darkorange"
    },
    science: {
        bgColor: "fuchsia"
    },
    sport: {
        bgColor: "dimgrey"
    },
    travel: {
        bgColor: "darkviolet"
    },
}

interface ButtonCategoryPros {
    jokes: Joke[],
    bgColor: string,
    title: string
}

const ButtonCategory = ({jokes, bgColor, title} : ButtonCategoryPros) => {
    const dispatch = useAppDispatch();

	return (
		<button className="btn-category"
            style={{backgroundColor: bgColor}}
            onClick={() => {
                dispatch(onCategoryChange(title))
            }}
        >
            {title}
        </button>
	);
}

export default ButtonCategory;
