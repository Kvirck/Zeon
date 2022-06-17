import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class novelties {
    constructor(){
        makeAutoObservable(this)
    }
    data = []
    getNovelties (){
        axios.get(`http://localhost/products/search?q=${value}`)
        .then(res=>{
            console.log(res);
        })
    }
    get get_Stop(){
        return toJS(this.stop)  
    }
}

export default new novelties()