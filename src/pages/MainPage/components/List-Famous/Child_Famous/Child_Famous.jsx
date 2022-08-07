import React from 'react'
import img_Import from './../../../../MainPage/action/img_Import';

export const Child_Famous = (props) => {

  const {Pic,NamePic,AuthName,AuthAvatar,Eth,EndingTime} = props

  return (
    
    <div className="child_famous">
      <div className="img-famous-child">
        <img
          className="image-2-icon5"
          alt=""
          src={img_Import.images["image-252x.png"]}
        />
      </div>
        <div className="detail_piture_famous">

          <div className="image-and-create">
            <div className="hoi-an-created">
              <b className="hoi-an-viet-nam">Hoi An - Viet Nam</b>
              <div className="created-by-quynh-anh">
                <span>Created by</span>
                <b className="quynh-anh-b"> Quynh Anh</b>
              </div>
            </div>
            <div className="user-avatar-famous">
              <img
                className="ellipse-icon6"
                alt=""
                src={img_Import.images["ellipse-72x.png"]}
              />
            </div>
          </div>

          <div className="current-timeeding-eth">
           
            
          
            <div className="data-current-eth">

        
       
              <div className="eth-crune">
                <div className="current-bid-div2">Current Bid</div>
                
                <div className="eth-div1">
                <img
                className="ellipse-icon7"
                alt=""
                src={img_Import.images["ellipse-62x.png"]}
              />
                  1.90 ETH</div>
              </div>
            </div>
           
            <div className="time-ending-stop">
              <div className="ending-in-div1">Ending In</div>
              <div className="h-43m-26s1">10h 43m 26s</div>
            </div>
          </div>
        </div>
      </div>

  )
}
