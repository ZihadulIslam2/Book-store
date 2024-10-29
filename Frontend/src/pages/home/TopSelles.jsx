import React, { useEffect, useState } from 'react'

const TopSelles = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch("books.json")
        .then( res =>res.json())
        .then((data) => setBooks(data))

    }, [])

    console.log("Books data: ", books)
    

  return (
    <div>TopSelles</div>
  )
}

export default TopSelles