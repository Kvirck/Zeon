import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class search {
    constructor() {
        makeAutoObservable(this)
    }
    product = []
    links = []
    currentPage = 1
    url = ''
    async getSearch(url) {
        await axios.get(url)
            .then(res => {
                this.product = res.data.data
                this.links = res.data.meta.links
                this.currentPage = res.data.meta.page
                this.url = url
            })
            .catch(err => console.log(`err`, err))
    }
    async getSearchNew(url) {
        await axios.get(url)
            .then(res => {
                this.links = res.data.meta.links
                this.currentPage = res.data.meta.page
                this.product = res.data.data
                this.url = url
            }
            )

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