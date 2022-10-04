import React from 'react'

const ImportRows= ({item}) => {
  return (
    <tr>
        <td>{item.Email}</td>
        <td>{item.Name}</td>
        <td>{item.Password}</td>
    </tr>
  )
}

export default ImportRows