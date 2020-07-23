import React from 'react'
import { Link } from 'gatsby'

const Search_Element = (props) => {
  return (
      //prop.postID
      <Link
      to="/viewPost/"
      >
    <div className="mb-5 w-auto hover:text-blue-700" >
      <div className="h-5">
        <span className="xl:text-sm text-xs pl-4">{props.title}</span>
      </div>
      <div className="h-5 pl-4">
        <span className="xl:text-sm text-xs  text-opacity-75">{props.tags}</span>
      </div>
    </div>
    </Link>
  )
}
export default Search_Element
