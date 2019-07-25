/**
 * markdown 编辑器
 */
import './editPad.scss'
import React, {useState, useEffect, createRef, ChangeEvent} from 'react'
import Markdown from 'react-markdown'
import axios from 'src/tool/axios'
import {Controlled as CodeMirror} from 'react-codemirror2'
import Highlight from 'react-highlight'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/mode/markdown/markdown'

import CodeRender from './CodeRender'



export default function EditPad(props: any) {

  //标题
  const [title, setTitle] = useState('')
  // 内容
  const [content, setContent] = useState('# markdown')

  useEffect(() => {
    titleEl.current.focus()
  }, [title])

  const titleEl = createRef<HTMLInputElement>()

  const options = {
    mode: 'markdown',
    theme: 'material',
    lineNumbers: true
  }

  const handleChange = (newValue:any) => {
    setContent(newValue)
  }

  // 获取标题
  const handleTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  // 发布
  const handleClickPush = () => {
    axios.post('/article', {title: title, content: content})
      .then((result:any) => {
        console.log(result)
      })
  }
  
  return (
    <div className={'edit-pad'}>
      <div className={'edit-action'}>
        <input onChange={handleTitleChange} ref={titleEl} className={'edit-input'} placeholder={'article title~~~~'} type={'content'} />
        <span onClick={handleClickPush} className={'edit-push'}>发 布</span>
      </div>
      <div className={'edit-box'}>
        <CodeMirror
          value={content}
          className={'edit-code'}
          options={options}
          onBeforeChange={(editor, data, value) => {
            setContent(value)
          }}
          onChange={(editor, data, value) => {
          }}
        />
      </div>
      <div className={'edit-show'}>
        <Markdown 
          source={content}
          escapeHtml 
          renderers={{
            code: CodeRender
          }}  
        />
      </div>
    </div>
  )
}