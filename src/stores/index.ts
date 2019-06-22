import { configure } from 'mobx'
import HomeStore from './home/index'

configure({ enforceActions: "observed" })

export default {
    HomeStore
}
