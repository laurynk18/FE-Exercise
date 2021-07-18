import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function BreedCard(props) {
    const breedName = props.breed.split('/').reverse().join(' ')
    const [image, setImage] = useState('')
    
    //fetch random image
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`https://dog.ceo/api/breed/${props.breed}/images/random/1`)
            setImage(data.message)
        }
        fetchData()
      }, [props.breed])
    
    return (
      <Link to={`/${props.breed}`}>
        <div className='breed-card'> 
          <h1>{breedName}</h1>
          <img src={image} alt={breedName} className='breed-card-img'/>
        </div>
      </Link>
  )
}