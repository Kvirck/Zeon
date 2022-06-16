import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class novelties {
    constructor(){
        makeAutoObservable(this)
    }
    novelties = []
    limit = 4
    page  = 1
    stop = true
    getNovelties (){
        axios.get(`http://localhost:80/products?limit=${this.limit}&page=${this.page}`)
        .then(res=>{
            if (res.data.data.length < this.limit) this.stop = false
            this.novelties = [ ...this.novelties, ...res.data.data]
            this.page++
        })
    }

    get toJS_novelties(){
        return toJS(this.novelties)
    }
    get get_Stop(){
        return toJS(this.stop)  
    }
}

export default new novelties()