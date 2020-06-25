import React from 'react'
import Icon from './Icon'

const FavIcon = (props) => (
    <Icon
    viewBox="0 0 20 20"
    className={props.className}
    width={props.width}
    height={props.height}
  >
    <path
      d="M10 15l-5.878 3.090 1.123-6.545-4.756-4.635 6.572-0.955 2.939-5.955 2.939 5.955 6.572 0.955-4.756 4.635 1.123 6.545z"
    />
  </Icon>
)

export default FavIcon;
