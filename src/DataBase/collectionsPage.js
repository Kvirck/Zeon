import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class collectionsPage {

    constructor() {
        makeAutoObservable(this)
    }
    collections = [] // свойства 
    links = []
    products = []
    limit = 8
    page = 1
    currentPage = 1
    url = `http://localhost/collections?products=true&limit=${this.limit}&page=${this.page}`
    getCollections(url) {
        url ? axios.get(url)
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

    collections_links = []
    collections_products = []
    collections_currentPage = 1
    collections_url = ''
    async getCollectionsPage(url) {
        const response = await axios.get(url)
        this.collections_links = response.data.meta.links
        this.collections_currentPage = response.data.meta.page
        this.collections_products = response.data.data
        this.collections_url = url
    }
    async getCollectionsPageNew(url) {
        const response = await axios.get(url)
        this.collections_links = response.data.meta.links
        this.collections_currentPage = response.data.meta.page
        this.collections_products = response.data.data
        this.collections_url = url
    }
    productsSimilar = []

    productsRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    async getProductsSimilar(setLoad, makeid) {
        await axios.get(`http://localhost/products?limit=5&page=${this.productsRandom(0,50)}`)
            .then(res => {
                this.productsSimilar = res.data
                setLoad(false)
            })

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

    get toJS_getCollPage_Links() {
        return toJS(this.collections_links)
    }

    get toJS_getCollPage_products() {
        return toJS(this.collections_products)

    }
    get toJS_getCollPage_currentPage() {
        return toJS(this.collections_currentPage)
    }
    get toJS_getProductsSimilar() {
        return toJS(this.productsSimilar)
    }
}
export default new collectionsPage();
