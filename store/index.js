import {createStore} from 'vuex'
import { loading } from './modules/loading'
import {products} from "~/store/modules/products";
export const store = createStore({
    modules : {
        loading,
        products,
    }
})