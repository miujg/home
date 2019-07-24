import React, {useState, useEffect} from 'react'
import Highlight from 'react-highlight'


export default function CodeRender(props:any) {
  console.log(props)
  return (
    <Highlight className={'js'}>
      {props.value}
    </Highlight>
  )
}
