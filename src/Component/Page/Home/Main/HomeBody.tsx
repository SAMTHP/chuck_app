import React, { useState, useEffect } from "react";
import { CategoryService } from "../../../../api/services/CategoryService";
import ButtonCategory, { categoryTitle } from "./Buttons/ButtonCategory";
import { Joke } from "../../../../api/model/Joke";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { selectedCategorySelector, selectedJokesSelector } from "../../../../redux/slices/JokeSlice";
import JokeCard from "./Cards/JokeCard";
import { Combobox } from '@headlessui/react'

interface HomeBodyProps {
    jokes: Joke[]
}

function HomeBody({jokes} : HomeBodyProps) {
    const dispatch = useAppDispatch();

    const [selectedJoke, setSelectedJoke] = useState(jokes[0])
    const [query, setQuery] = useState('')

    const filteredJokes =
        query === ''
        ? jokes
        : jokes.filter((joke) => {
            return joke.value.toLowerCase().includes(query.toLowerCase())
            })

    const jokesFromCurrentCategory = useAppSelector(
        selectedJokesSelector
    );

    let selectedCategory = useAppSelector(
        selectedCategorySelector
    );
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryService.allCategories().then((response) => {
            setCategories(response)
        })
    }, [])

	return (
		<div 
            className="main-home" 
            style={{
                border: "solid",
            }}
        >
            {/* Buttons categories */}
            <div className="flex justify-center" style={{boxSizing: "border-box", marginTop: "20px"}}>
                {
                    categories.map((category, index) => {
                        return (
                            <ButtonCategory 
                                key={index}
                                jokes={jokes}
                                bgColor={categoryTitle[category].bgColor} 
                                title={category.toUpperCase()}
                            />
                        )
                    })
                }
            </div>

            {
                selectedCategory && <h3 style={{textAlign: "center"}}>Catégorie : {selectedCategory}</h3>
            }
                <div className="flex justify-center" style={{boxSizing: "border-box", marginTop: "20px"}}>
                {selectedCategory && jokesFromCurrentCategory.length > 0 &&
                    jokesFromCurrentCategory.map((joke, index) => {
                        return <JokeCard joke={joke} key={index} />
                    })
                }
            </div>
            
		</div>
	);
}

export default HomeBody;
