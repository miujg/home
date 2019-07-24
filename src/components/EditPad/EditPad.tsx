/**
 * markdown 编辑器
 */
import './editPad.scss'
import React, {useState, useEffect} from 'react'
import Markdown from 'react-markdown'
import {Controlled as CodeMirror} from 'react-codemirror2'

import Highlight from 'react-highlight'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/jsx/jsx'

import CodeRender from './CodeRender'

const str = `
## Custom code renderer

This example shows how you can make react-markdown syntax-highlight code blocks.
By default, react-markdown will simply wrap code blocks in <pre><code>.

\`\`\`js
const React = require('react')
const ReactDOM = require('react-dom')
const Markdown = require('react-markdown')
const CodeRenderer = require('./code-renderer')

ReactDOM.render(
  React.createElement(Markdown, {
    source: 'your markdown here',
    renderers: {
      CodeBlock: CodeRenderer
      Code: CodeRenderer
    }
  }),
  document.body
)
\`\`\`

By checking the \`inline\` property, we can reuse the same renderer for both inline and blocks of code!
For instance, we could highlight \`const React = require('react')\` inline.

See \`examples/custom-renderers\` for the code behind this.
`

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
          source={str}
          escapeHtml 
          renderers={{
            code: CodeRender
          }}  
        />
        <Highlight className={'js'}> 
          { `let a = 'xxx'` }
        </Highlight>
      </div>
    </div>
  )
}