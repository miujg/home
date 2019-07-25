import './routers.scss'
import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import {Main, Nav} from 'cons/index'
import {EditPad} from 'coms/index'

// 代码编辑器 css
import 'highlight.js/styles/github.css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'


export default function Routers(props:object) {
  
  return(
    <div className={'container'}>
      <HashRouter>
        <div className={'left-nav'}>
          <Nav />
        </div>
        <div className={'right-content'}>
          <Switch>
            <Route path={'/edit'} component={EditPad} />
            <Route path={'/index'} component={Main} />
            <Route path={'/'} component={Main} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}