/**
 * reduce 集合
 */
 
import  {combineReducers} from 'redux'
import {info} from './reducer/info'

const reducers = combineReducers({info})
export {
   reducers
}