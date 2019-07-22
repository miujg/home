import './routers.scss'
import React from 'react'
import{Route, Switch, HashRouter} from 'react-router-dom'
import {Main, Nav} from 'cons/index'

export default function Routers(props:object) {
  
  return(
    <div className={'container'}>
      <div className={'left-nav'}>
        <Nav />
      </div>
      <div className={'right-content'}>
        <HashRouter>
          <Switch>
            <Route path={'/'} component={Main} />
          </Switch>
        </HashRouter>
      </div>
    </div>
  )
}