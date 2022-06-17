import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class favorites {

    constructor() {
        makeAutoObservable(this)
    }
    data = []
    products = []
    async getFavorites(url) {
        const response = await axios.get(url)
        this.data = [...this.data, response.data.data]
    }

    get toJS_data() {
        return toJS(this.data)
    }
}
export default new favorites();
