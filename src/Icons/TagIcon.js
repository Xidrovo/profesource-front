import React from 'react'
import Icon from './Icon'

const TagIcon = (props) => (
    <Icon
    viewBox="0 0 32 32"
    className={props.className}
    width={props.width}
    height={props.height}
  >
    <path
      d="M31.391 13.883l-5-8c-0.73-1.169-2.012-1.88-3.391-1.88h-19c-2.209 0-4 1.791-4 4v16c0 2.209 1.791 4 4 4h19c1.379 0 2.66-0.711 3.391-1.881l5-8c0.812-1.295 0.812-2.942 0-4.239zM29.695 17.062l-5 8.002c-0.367 0.588-1.002 0.939-1.695 0.939h-19c-1.103 0-2-0.898-2-2v-16c0-1.103 0.897-2 2-2h19c0.693 0 1.328 0.352 1.695 0.939l5 8c0.403 0.645 0.403 1.477 0 2.12zM23 13.003c-1.658 0-3 1.343-3 3s1.342 3 3 3c1.656 0 3-1.344 3-3 0-1.657-1.344-3-3-3zM23 18.004c-1.105 0-2-0.896-2-2s0.895-2 2-2c1.104 0 2 0.896 2 2s-0.896 2-2 2z"
    />
  </Icon>
)

export default TagIcon;