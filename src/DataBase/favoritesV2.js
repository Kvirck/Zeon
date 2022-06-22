import { makeAutoObservable } from "mobx";
export default class favorites {
    products = []
    constructor() {
        makeAutoObservable(this)
    }
    main() {
        this.products = this.parseLocalStorageFavorites()
    }

    parseLocalStorageFavorites() {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (favorites) {
            return favorites
        } else {
            return []
        }
    }

    setLocalStorageFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.products))
    }

    addFavorites(post) {
        this.products = [...this.products, post]
        this.setLocalStorageFavorites()
    }
    delFavorites(data) {
        this.products = this.products.filter((prod) => prod.id !== data.id)
        this.setLocalStorageFavorites()
    }
}