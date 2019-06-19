import { configure } from 'mobx'
import Homestore from './home/index'

configure({enforceActions:"observed"})

export default {
    Homestore
}
