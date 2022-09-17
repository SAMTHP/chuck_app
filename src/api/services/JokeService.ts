import axios from "axios";
import {Joke} from "../model/Joke";

interface JokesReponse {
    result: [];
    total: number;
}

export class JokeService {
    /**
     * Allow to get all jokes
     *
     * @returns Joke[]
     */
    public static async allJokes(): Promise<JokesReponse> {
        return axios
            .get('https://api.chucknorris.io/jokes/search?query=all')
            .then(response => response.data)
            .catch(reason => console.log(reason));
    }
}