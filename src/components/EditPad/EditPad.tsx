/**
 * markdown 编辑器
 */
import './editPad.scss'
import React, {useState, useEffect} from 'react'
import { Input } from 'antd'
import Markdown from 'react-markdown'
import {Controlled as CodeMirror} from 'react-codemirror2'

import Highlight from 'react-highlight'
import 'highlight.js/styles/github.css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/markdown/markdown'

import CodeRender from './CodeRender'

export default function EditPad(props: any) {

  const [text, setText] = useState('')

  useEffect(() => {
  })

  const options = {
    mode: 'markdown',
    theme: 'material',
    lineNumbers: true
  }

  const handleChange = (newValue:any) => {
    console.log(newValue)
    setText(newValue)
  }

  return (
    <div className={'edit-pad'}>
      <div className={'edit-action'}>
        <input className={'edit-input'} placeholder={'article cnm title~~~~'} type={'text'} />
        <span className={'edit-push'}>发 布</span>
      </div>
      <div className={'edit-box'}>
        <CodeMirror
          value={text}
          className={'edit-code'}
          options={options}
          onBeforeChange={(editor, data, value) => {
            setText(value)
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </div>
      <div className={'edit-show'}>
        <Markdown 
          source={text}
          escapeHtml 
          renderers={{
            code: CodeRender
          }}  
        />
      </div>
    </div>
  )
}