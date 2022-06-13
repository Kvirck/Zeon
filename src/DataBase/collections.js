import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class collections {

    constructor (){
        makeAutoObservable(this)
    }

    collections = []; // свойства 
    limit = 4;
    page = 1
    stop = true
    getCollections() {
          axios.get(`http://localhost:80/collections?page=${this.page}&limit=${this.limit}`)
            .then(res => {
                if (res.data.data.length < this.limit) this.stop = false
                this.collections = [...this.collections, ...res.data.data]
                this.page++
            })
    }
    
    get get_Collections(){
        return toJS(this.collections)  
    }
    
    get get_Stop(){
        return toJS(this.stop)  
    }
    
}
export default new collections();
