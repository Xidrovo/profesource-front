import React from 'react'
import Icon from './Icon'

const CommentIcon = (props) => (
    <Icon
    viewBox="0 0 20 20"
    className={props.className}
    width={props.width}
    height={props.height}
  >
    <path
      d="M5.8 12.2v-6.2h-3.8c-1.1 0-2 0.9-2 2v6c0 1.1 0.9 2 2 2h1v3l3-3h5c1.1 0 2-0.9 2-2v-1.82c-0.064 0.014-0.132 0.021-0.2 0.021l-7-0.001zM18 1h-9c-1.1 0-2 0.9-2 2v8h7l3 3v-3h1c1.1 0 2-0.899 2-2v-6c0-1.1-0.9-2-2-2z"
    />
  </Icon>
)

export default CommentIcon;
