import './main.scss'
import React, {useState, useEffect} from 'react'
import axios from 'src/tool/axios'
import {Article} from 'coms/index'

export default function Main(props:any) {
  const articleTemp = [1,1,1,1,1,1,1,1]

  const [articles, setArticles] = useState([])
  useEffect(() =>{
    axios.get('/article')
      .then((result:any) => {
        if(result.data.code) setArticles(result.data.result)
      })
  })

  return (
    <div className={'main'}>
      <Article article={articles[0]} />        
      { 
        articleTemp.map((item, i) => (
          <Article key={i} />
        ))
      }
    </div>
  )
}