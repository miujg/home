import './main.scss'
import React, {useState, useEffect} from 'react'
import axios from 'src/tool/axios'
import {Article} from 'coms/index'

export default function Main(props:any) {

  const [articles, setArticles] = useState([])

  // 相当于 componentDidMount componentDidUpdate componentWillUnmount集合
  useEffect(() =>{
    getData()
    return () => {
      console.log('article 组件卸载~~')
    }
  }, [])

  const getData = () =>{
    axios.get('/article')
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