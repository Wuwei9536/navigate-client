import { configure } from 'mobx'
import NavigateStore from './navigate/index'

configure({ enforceActions: "observed" })

export default {
    NavigateStore
}
