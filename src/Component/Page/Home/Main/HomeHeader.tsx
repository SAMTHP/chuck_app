import React, { useState, useEffect } from "react";
import { Joke } from "../../../../api/model/Joke";
import SearchList from "./SearchList";
import TextField from "@mui/material/TextField";

interface HomeHeaderProps {
    jokes: Joke[]
}

function HomeHeader({jokes} : HomeHeaderProps) {
    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

	return (
		<div 
            className="main" 
            style={{
                border: "solid",
            }}
        >
            <h1 style={{textAlign: "center", color: "bisque", marginBottom: 0 }}>The Joke Bible</h1>
            <h3 style={{textAlign: "center", color: "white", marginBottom: "30px" ,marginTop: 0}}>Daily Laughs for you and yours</h3>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
            <SearchList jokes={jokes} input={inputText}/>
		</div>
	);
}

export default HomeHeader;
