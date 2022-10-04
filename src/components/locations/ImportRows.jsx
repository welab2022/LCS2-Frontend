import React from 'react'

const ImportRows= ({item}) => {
  return (
    <tr>
        <td>{item.ID}</td>
        <td>{item.Address}</td>
        <td>{item.Status}</td>
    </tr>
  )
}

export default ImportRows