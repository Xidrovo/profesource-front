import React from 'react'

const table = (props) => {
  return (
        <tr class="bg-gray-100">
          <td class="border px-4 py-2">{props.name}</td>
          <td class="border px-4 py-2">{props.science}</td>
          <td class="border px-4 py-2">{props.career}</td>
          <td class="border px-4 py-2">{props.description}</td>
        </tr>
  )
}
export default table
