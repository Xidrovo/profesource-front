import React from 'react'
import { Link } from 'gatsby'

const Search_Element = (props) => {
  return (
      //prop.postID
      <Link
      to="/viewPost/"
      >
    <div className="mb-1 w-auto hover:text-blue-700 border-2" >
      <div className="pl-4">
        <span className="xl:text-sm text-xs font-bold">{props.title}</span>
      </div>
      <div className="pl-4">
        <span className="xl:text-sm text-xs opacity-50">{props.tags}</span>
      </div>
    </div>
    </Link>
  )
}
export default Search_Element
