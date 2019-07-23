import './main.scss'
import React, {useState, useEffect} from 'react'
import {useMappedState, IState} from 'store'
import {Article} from 'coms/index'

export default function Main(props:any) {
  const articles = [1,1,1,1,1,1,1,1]

  return (
    <div className={'main'}>
      { 
        articles.map((item, i) => (
          <Article key={i} />
        ))
      }
    </div>
  )
}