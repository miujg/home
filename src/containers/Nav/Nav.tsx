import './nav.scss'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Icon, Input} from 'antd'

export default function Nav(props:any) {

  return (
    <div className={'nav'}>
      <div className={'nav-mask'}></div>
      <div className={'user-info'}>
        <div className={'user-head'}></div>
        <span className={'user-name'}>hardToCoder</span>
        <span className={'user-desc'}>this man is lazy, nothing~</span>
      </div>
      <div className={'search-box'}>
        <Input.Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
      </div>
      <div className={'nav-icon'}>
        <NavLink to={'index'}><span title={'主页'} className={'nav-item'}><Icon type="home" /></span></NavLink>
        <NavLink to={'/edit'}><span className={'nav-item'}><Icon type="book" /></span></NavLink>
        <span className={'nav-item'}><Icon type="download" /></span>
        <span className={'nav-item'}><Icon type="bulb" /></span>
        <span className={'nav-item'}><Icon type="tag" /></span>
        <span className={'nav-item'}><Icon type="usb" /></span>
        <span className={'nav-item'}><Icon type="desktop" /></span>
        <span className={'nav-item'}><Icon type="monitor" /></span>
      </div>
    </div>
  )
}