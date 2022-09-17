import './App.css';
import React, { useState, useEffect } from "react";
import { JokeService } from './api/services/JokeService';
import Home from './Component/Page/Home/Home';
import Navbar from './Component/Partials/Navbar';
import { Provider } from "react-redux";
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchJokes, JokeILoadingSelector, JokesSelector, onSelectedJokes, selectedCategorySelector } from './redux/slices/JokeSlice';
import { store } from './redux/store';
import { Joke } from './api/model/Joke';

function App() {
	// Get jokes
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchJokes());
	}, [])

	const jokeItemsSelector = useAppSelector(
        JokesSelector
    );

    const loading = useAppSelector(
        JokeILoadingSelector
    );

	let selectedCategory = useAppSelector(
        selectedCategorySelector
    );

	useEffect(() => {
		if(jokeItemsSelector){
			let filteredJokes = jokeItemsSelector.filter((joke) => joke.categories.includes(selectedCategory.toLowerCase()));
			console.log(filteredJokes);
			dispatch(onSelectedJokes(filteredJokes));
		}
	}, [selectedCategory])

	window.onstorage = (event) => console.log(event)

	console.log("selected category", selectedCategory)

	return (
		<Home jokes={jokeItemsSelector}/>
	);
}

export default App;
