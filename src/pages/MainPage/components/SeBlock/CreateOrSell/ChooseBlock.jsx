import React from 'react'
import './ChooseBlock.css'



export const ChooseBlock = (props) => {
const {Name,Value,Img} = props

  return (
   
    <div class="choose-block">
    <img
      class="main-image-choose-block"
      alt=""
      src={Img}
    />
    <div class="create-artwork-div">{Name}</div>
    <div class="create-your-collection-add-so">
      {Value}
    </div>
  </div>

  )
}
