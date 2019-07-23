/**
 * markdown 编辑器
 */
import './editPad.scss'
import React from 'react'
import Markdown from 'react-markdown'
import CodeMirror from 'react-codemirror'

export default function EditPad(props: any) {

  const options = {
    mode: 'javascript'
  }

  return (
    <div className={'edit-pad'}>
      <CodeMirror className={'edit'} value={'let a = 10'} autoFocus={true} options = {options}  />
    </div>
  )
}