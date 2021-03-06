import { createStore } from 'redux'
import axios from 'axios'

const EAT = 'eat'
const HUNGRY = 'hungry'
const ARTICLE_LIST = 'article_list'

const initState = {
  num: 160,
  list: []
}

// reducer
export const weight = (state = initState , action) => {
  switch (action.type) {
    case EAT:
    return {...state, num: state.num + 10}
    case HUNGRY:
    return {...state, num: state.num - 10}
    case ARTICLE_LIST:
    console.log('action',action)
      return {...state, list: action.playload.article}
    default:
      return initState
  }
}

// const store = createStore(weight)

// action
export const eat = (data) => {
  console.log('stark wang 正在吃'+ data)
  return {type: EAT}
}

export const hungry = () => {
  console.log('饿了一天')
  return {type: HUNGRY}
}

export const eatAsync = () =>{
  return dispatch =>{
    setTimeout(()=>{
      // dispatch(eat('煎饼')) 
      dispatch({type: EAT}) 
    },2000)
  }
}

export const getArticle = () =>{
  return dispatch =>{
    setTimeout(()=>{
      // dispatch(eat('煎饼')) 
        axios.get('/v1/article/list').then(res=>{
          console.log('article',res)
          dispatch({type:ARTICLE_LIST,playload:res.data})
        })
    },2000)
  }
}


// const watch = () => {
//   const cur = store.getState()
//   console.log(`stark wang 现在体重为${cur}斤`)
// }

// store.subscribe(watch)
// watch()
// store.dispatch({type: 'eat'})

// store.dispatch({type: 'eat'})

// store.dispatch({type: 'eat'})

// store.dispatch({ type: 'hungry' })

// console.log(store.getState())

// store.dispatch({ type: 'eat' })
// console.log('我吃了一些事物')
// console.log(store.getState())

// console.log('我饿了好几天')
// store.dispatch({ type: 'hungry' })
// console.log(store.getState())
// console.log('我又饿了好几天')
// store.dispatch({ type: 'hungry' })
// console.log(store.getState())
