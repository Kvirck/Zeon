import { makeAutoObservable, toJS } from "mobx";
export default class Basket {
    products = []
    constructor() {
        makeAutoObservable(this)
    }
    main() {
        this.products = this.parseLocalStorageBasket()
    }

    parseLocalStorageBasket() {
        let basket = JSON.parse(localStorage.getItem('basket'))
        if (basket) {
            return basket
        } else {
            return []
        }
    }
    examinationBasket(post) {
        this.products = this.products.filter((prod) => prod.id === post.id)
        this.setLocalStorageBasket()
    }
    setLocalStorageBasket() {
        localStorage.setItem('basket', JSON.stringify(this.products))
    }

    addBasket(post) {
        this.products = [...this.products, post]
        this.setLocalStorageBasket()
    }
    delBasket(post) {
        this.products = this.products.filter((item) => item.id !== post.id)
        this.setLocalStorageBasket()
    }
    get toJS_products(){
        return toJS(this.products)  
    }
    
}