import axios from "axios"
import { makeAutoObservable, toJS } from 'mobx';

class dataLinks {

    constructor() {
        makeAutoObservable(this)
    }

    help = []
    links = []
    publicOffer = []
    news = {}
    async getDataLinks() {
        await axios.get(`http://localhost:3001/data`)
            .then(res => {
                this.help = res.data.help
                this.links = res.data.links
                this.publicOffer = res.data.publicOffer
                this.news = res.data.news
            })
    }
    get toJS_news() {
        return toJS(this.news)
    }
    get toJS_help() {
        return toJS(this.help)
    }
    get toJS_links() {
        return toJS(this.links)
    }
    get toJS_publicOffer() {
        return toJS(this.publicOffer)
    }


}
export default new dataLinks();
