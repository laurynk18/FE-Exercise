import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

export default function SingleDog(props) {
    const { breed } = useParams()
    const [imageUrls, setImageUrls] = useState([])

    //fetch four random images
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/4`)
            setImageUrls(data.message)
        }
        fetchData()
      }, [breed])
    
    return (
      <div className='single-dog-container'>
        <Link to='/' className='back'>←</Link>
        <h1>{breed.split('/').reverse().join(' ')}</h1>
        <div className='single-dog-images'>
            {imageUrls.map((url, idx) => <img src={url} alt={breed} key={idx} className='single-dog-img'/>)}
        </div>
      </div>
  )
}