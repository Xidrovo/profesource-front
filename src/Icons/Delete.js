import React from 'react'
import Icon from './Icon'

const DeleteIcon = (props) => (
  <Icon
    viewBox="0 0 32 32"
    className={props.className}
    width={props.width}
    height={props.height}
  >
    <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z" />
  </Icon>
)

export default DeleteIcon