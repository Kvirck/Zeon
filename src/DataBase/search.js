import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class search {
    constructor() {
        makeAutoObservable(this)
    }
    product = []
    links = []
    currentPage = 1
    async getSearch(value) {
        await axios.get(`http://localhost/products/search?limit=16&page=1&q=${value}`)
            .then(res => {
                this.product = res.data.data
                this.links = res.data.meta.links
                this.currentPage = res.data.meta.page
            })
            .catch(err=>console.log(`err`,err))
    }
    get toJS__product() {
        return toJS(this.product)
    }
    get toJS__links() {
        return toJS(this.links)
    }
    get toJS__currentPage() {
        return toJS(this.currentPage)
    }
}

export default new search()