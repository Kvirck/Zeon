import axios from "axios"
import {  makeAutoObservable, toJS } from 'mobx';

class collectionsPage {

    constructor() {
        makeAutoObservable(this)
    }

    collections = [] // свойства 
    links = []
    limit = 8
    page = 1
    getCollections(url) {
            axios.get(`http://localhost/collections?page=${this.page}&limit=${this.limit}`)
                .then(res => {
                    this.collections = [...this.collections, ...res.data.data]
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
