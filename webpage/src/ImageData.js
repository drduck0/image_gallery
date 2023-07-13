import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ImageData = () => {


    const [imagedata, setImageData] = useState([])
    const [model, setModel] = useState(false)
    const [tempimg, setTempImg] = useState('')

    useEffect( ()=> {
        getImage()
    }, [])

    let getImage = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/images/')
        let image = await response.json()
        console.log('data:',image)
        setImageData(image)
    }

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
        {imagedata.map((data, index) => {
            return(
                <div className='pics' key = {index} onClick={() => getImg(data.image)}>
                    <img src= {data.image} style={{width: '100%'}} alt={data.id}/>
                </div>
            )
        })}
    </div>
    </>
    )
}

export default ImageData
