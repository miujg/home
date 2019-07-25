import React, {useState, useEffect} from 'react'
import Highlight from 'react-highlight'


export default function CodeRender(props:any) {
  return (
    <Highlight className={'js'}>
      {props.value}
    </Highlight>
  )
}
