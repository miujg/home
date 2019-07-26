import './article.scss'
import React, {useState, useEffect} from 'react'
import Markdown from 'react-markdown'
import Mock from 'mockjs'
import {CodeRender} from 'coms/index'

interface IArticle {
  article?: {
    title: string,
    createTime: string,
    content: string
  } 
}

const mock = Mock.Random
const count = mock.natural(200,300)

export default function Article(props: IArticle) {

  const [bstr, setBstr] = useState('阅读全文>>')
  const [content, setContent] = useState(`${props.article.content.slice(0, count)} ...`)

  const handleClickBtn = () =>{
    if(bstr === '阅读全文>>') {
      setBstr('收起^')
      setContent(props.article.content)
    } else {
      setBstr('阅读全文>>')
      setContent(`${props.article.content.slice(0, count)} ...`)
    }
  }
  
  return (
    <div className={'article'}>
      <div className={'header'}>
        <h1 className={'title'}>{props.article.title}</h1>
        <span className={'create-time'}>{props.article.createTime}</span>        
      </div>
      <p className={'content'}>
        <Markdown 
          source={content}
          escapeHtml 
          renderers={{
            code: CodeRender
          }}  
        />
      </p>
      <div className={'bottom'}>
        <span onClick={handleClickBtn} className={'read-more'}>{bstr}</span>
      </div>
    </div>
  )
}

Article.defaultProps ={
  article: {
    title: '博客文章标题',
    createTime: '2019-07-22',
    content: `### markdown`
  }
}