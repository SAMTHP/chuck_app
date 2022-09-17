import axios from "axios";

export class CategoryService {
    /**
     * Allow to get all categories
     *
     * @returns Joke[]
     */
    public static async allCategories(): Promise<[]> {
        return axios
            .get('https://api.chucknorris.io/jokes/categories')
            .then(response => response.data)
            .catch(reason => console.log(reason));
    }
}