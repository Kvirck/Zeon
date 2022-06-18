import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class search {
    constructor() {
        makeAutoObservable(this)
    }
    data = []
    async getNovelties(value) {
        await axios.get(`http://localhost/products/search?q=${value}`)
            .then(res => {
                this.data = res
                console.log(res);
            })
    }
    get toJS__data() {
        return toJS(this.data)
    }
}

export default new search()