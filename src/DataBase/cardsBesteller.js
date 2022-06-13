import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class cardsBesteller {

    constructor (){
        makeAutoObservable(this)
    }

    cardsBesteller = []; // свойства 
    limit = 4;
    page = 1
    stop = true
    getCardBesteller() {
          axios.get(`http://localhost:80/products?limit=${this.limit}&page=${this.page}&reverse=asd`)
            .then(res => {
                if (res.data.data.length < this.limit) this.stop = false
                this.cardsBesteller = [...this.cardsBesteller, ...res.data.data]
                this.page++
            })
    }
    
    get toJS_cardsBesteller(){
        return toJS(this.cardsBesteller)  
    }
     
    get get_Stop(){
        return toJS(this.stop)  
    }
    
}
export default new cardsBesteller();
