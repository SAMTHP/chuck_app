import React from "react";
import { Joke } from "../../../api/model/Joke";
import Footer from "../../Partials/Footer";
import Navbar from '../../Partials/Navbar';
import HomeBody from "./Main/HomeBody";
import HomeHeader from "./Main/HomeHeader";

interface HomeProps {
    jokes: Joke[]
}

function Home({jokes} : HomeProps) {
	return (
		<>
            <Navbar />
            <HomeHeader jokes={jokes}/>
            <HomeBody jokes={jokes}/>
            <Footer />
        </>
	);
}

export default Home;
