import React, { useState } from 'react'
import data from './data/Image'
import CloseIcon from '@mui/icons-material/Close';

const ImageFeeder = () => {
    const [model, setModel] = useState(false)
    const [tempimg, setTempImg] = useState('')

    const getImg = (imgSrc) =>{
        setTempImg(imgSrc);
        setModel(true);
    }
  return (
    <>
    <div className={model? 'model open' : 'model'}>
        <img src={tempimg} alt='coolpic'/>
        <CloseIcon onClick={() => setModel(false)}/>
    </div>
    
    <div className='gallery'>
        {data.map((data, index) => {
            return(
                <div className='pics' key = {index} onClick={() => getImg(data.imgSrc)}>
                    <img src= {data.imgSrc} style={{width: '100%'}} alt={data.id}/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default ImageFeeder
