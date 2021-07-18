import { useState, useEffect } from 'react'
import axios from 'axios';
import BreedCard from './BreedCard'

export default function AllBreeds() {
  const [breeds, setBreeds] = useState([])

  //fetch all breeds
  useEffect(() => {
    const fetchData = async () => {
      let allBreeds = []
      try {
        const {data} = await axios.get('https://dog.ceo/api/breeds/list/all')
        Object.keys(data.message).forEach(breed => {
            (data.message[breed].length > 0) ? 
                data.message[breed].forEach(subBreed => allBreeds.push(`${breed}/${subBreed}`)) :
                allBreeds.push(breed)
        })
        setBreeds(allBreeds)
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  //filter function
  const [filter, setFilter] = useState('')
  const [filteredBreeds, setFilteredBreeds] = useState([])
  useEffect(() => {
    setFilteredBreeds(
      breeds.filter(breed =>
        breed.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [filter, breeds])

  return (
    <div className='all-breeds-container'>
      <h1 className='title'>Welcome to Dogpedia!</h1>
      <input
        type='text'
        placeholder='Search Breeds!'
        onChange={(e) => setFilter(e.target.value)}
        className='filter'
      />
      <div className='all-breeds'>
        {filteredBreeds.map((breed, idx) => <BreedCard breed={breed} key={idx}></BreedCard>)}
      </div>
    </div>
  );
}