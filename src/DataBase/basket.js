import { makeAutoObservable, toJS } from "mobx";
export default class Basket {
    products = []
    constructor() {
        makeAutoObservable(this)
    }
    main() {
        this.products = this.parseLocalStorageBasket()
    }
    addBasketCount = (data) => {
        data.basketCount = 1
        return JSON.parse(JSON.stringify(data))
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
        this.products = this.products.filter((item) => item.color.id !== post.color.id)
        this.setLocalStorageBasket()
    }
    delBasketAll() {
        this.products = localStorage.removeItem('basket')
        this.products= this.parseLocalStorageBasket()
        this.setLocalStorageBasket()
    }
    addingCount(prod) {
        const exemple = this.products.find((e) => e.color.id === prod.color.id)
        exemple.basketCount += 1
        this.setLocalStorageBasket()
    }
    dellCount(prod) {
        const exemple = this.products.find((e) => e.color.id === prod.color.id)
        if (exemple.basketCount - 1 === 0) {
            return
        } else {
            exemple.basketCount -= 1
            this.setLocalStorageBasket()
        }

    }
    get numberOfLines() {
        let sum = 0
        for (let item of this.products) {
            sum += 1 * item.basketCount
        }
        return sum
    }
    get numberOfGoods() {
        return this.numberOfLines * 5
    }
    get price() {
        let sum = 0
        for (let item of this.products) {
            sum += item.color.price * item.basketCount
        }
        return sum
    }
    get sale() {
        let sum = 0
        this.products.forEach(count => {
            if (count.color.current_price) {
                return sum += count.color.price / 100 * count.color.discount * count.basketCount 
            } else return sum
        })
        return sum
    }

    get totalPayable() {
        let sum = Math.floor(this.price - this.sale)
        return sum
    }
    get toJS_products() {
        return toJS(this.products)
    }


}