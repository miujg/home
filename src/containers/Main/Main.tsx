import './main.scss'
import React, {useState, useEffect} from 'react'
import axios from 'src/tool/axios'
import {useMappedState, IState} from 'store'
import {Article} from 'coms/index'

export default function Main(props:any) {

  const search = useMappedState((state:IState) => state.info)
  const [articles, setArticles] = useState([])

  useEffect(() =>{
    getData()
  }, [search])

  const getData = () =>{
    axios.get('/article', {word: search.search})
      .then((result:any) => {
        if(result.data.code) setArticles(result.data.result)
      })
  }

  return (
    <div className={'main'}>
      {
        articles.map((item:any, i) => (
          <Article key={`ar${i}`} article={item} />
        ))   
      }
    </div>
  )
}