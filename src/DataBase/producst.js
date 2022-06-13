import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class producst {
    constructor(){
        makeAutoObservable(this)
    }
    producst = []
    getProducst (){
        axios.get('http://localhost:80/products?limit=1')
        .then(res=>{
            this.producst = [ ...this.producst, ...res.data.data]
        })
    }

    get toJS_producst(){
        return toJS(this.producst)
    }

}

export default new producst()