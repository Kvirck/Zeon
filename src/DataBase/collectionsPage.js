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
    url = `http://localhost/collections?page=${this.page}&limit=${this.limit}`
    getCollections(url) {
        url ? axios.get(`${url}`)
            .then(res => {
                this.collections = res.data.data
                this.links = res.data.meta
                this.page++
            }) :
            axios.get(`${this.url}`)
                .then(res => {
                    this.collections = res.data.data
                    this.links = res.data.meta
                    this.page++
                })
    }


    get get_Collections() {
        return toJS(this.collections)
    }
    get get_Links() {
        return toJS(this.links)
    }


}
export default new collectionsPage();
