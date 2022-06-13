import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class collectionsPage {

    constructor() {
        makeAutoObservable(this)
    }
    collections = [] // свойства 
    links = []
    limit = 8
    page = 1
    currentPage = 1
    url = `http://localhost/collections?limit=${this.limit}&page=${this.page}`
    getCollections(url) {
        url ? axios.get(`${url}`)
            .then(res => {
                this.collections = res.data.data
                this.links = res.data.meta.links
                this.currentPage = res.data.meta.page
            }) :
            axios.get(`${this.url} `)
                .then(res => {
                    this.collections = res.data.data
                    this.links = res.data.meta.links
                    this.page = res.data.meta.page
                })
                .catch(err => console.log(err))

    }


    get get_Collections() {
        return toJS(this.collections)
    }
    get get_Links() {
        return toJS(this.links)
    }
    get get_currentPage() {
        return toJS(this.currentPage)
    }

}
export default new collectionsPage();
