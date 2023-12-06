import React from 'react'

function InFoDetail(props) {
  return (
    <div>
        <h2>Thông tin chi tiết</h2>
        <p>Tên: {props.name}, Tuổi: {props.age}, Địa chỉ: {props.address}</p>
    </div>
  )
}

export default InFoDetail