import './article.scss'
import React, {useState, useEffect} from 'react'

interface IArticle {
  article?: {
    title: string,
    createTime: string,
    content: string
  } 
}

export default function Article(props: IArticle) {
  
  return (
    <div className={'article'}>
      <div className={'header'}>
        <h1 className={'title'}>{props.article.title}</h1>
        <span className={'create-time'}>{props.article.createTime}</span>        
      </div>
      <p className={'content'}>
        {props.article.content}
      </p>
      <div className={'bottom'}>
        <span className={'read-more'}>阅读全文>></span>
      </div>
    </div>
  )
}

Article.defaultProps ={
  article: {
    title: '博客文章标题',
    createTime: '2019-07-22',
    content: `React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）。如果你使用过 React 一段时间，
    你也许会熟悉一些解决此类问题的方案，比如 render props 和 高阶组件。但是这类方案需要重新组织你的组件结构，这可能会很麻烦，
    使你的代码难以理解。如果你在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 
    等其他抽象层组成的组件会形成“嵌套地狱”。尽管我们可以在 DevTools 过滤掉它们，但这说明了一个更深层次的问题：React 需要为共享状
    态逻辑提供更好的原生途径。`
  }
}