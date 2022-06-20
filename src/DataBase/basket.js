import { makeAutoObservable, toJS } from "mobx";
class Basket {
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

    setLocalStorageBasket() {
        localStorage.setItem('basket', JSON.stringify(this.products))
    }

    addBasket(product) {
        this.products = [...this.products, product]
        this.setLocalStorageBasket()
    }
    delBasket(product) {
        this.products = this.products.filter((item) => item.id !== product.id)
        this.setLocalStorageBasket()
    }
}
export default new Basket()