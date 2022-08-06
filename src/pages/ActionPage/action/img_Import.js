import React from 'react'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../data_picture/', false, /\.(png||jpe?g||svg)$/));

const img_Import =  {

 images

}


export default img_Import