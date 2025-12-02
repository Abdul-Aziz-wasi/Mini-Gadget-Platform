'use client'

import React, { useState, useEffect } from 'react'
import { getGadgets } from '@/lib/api'
import Link from 'next/link'

export default function GadgetsList() {
  const [gadgets, setGadgets] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('') 


  useEffect(() => {
    async function fetchData() {
      const data = await getGadgets()
      setGadgets(data)
    }
    fetchData()
  }, [])

    const filteredGadgets = gadgets.filter(gadget =>
    gadget.title.toLowerCase().includes(search.toLowerCase()) ||
    gadget.category.toLowerCase().includes(search.toLowerCase())
  )

  
  const sortedGadgets = filteredGadgets.sort((a, b) => {
    switch (sort) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'title-asc':
        return a.title.localeCompare(b.title)
      case 'title-desc':
        return b.title.localeCompare(a.title)
      default:
        return 0
    }
  })

  return (
    <div>
      <h1 className='text-2xl font-bold text-center p-6'>All Gadgets</h1>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-4">
        <input
          type="text"
          placeholder="Search by title or category"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input bg-white text-black input-primary w-full md:w-1/3"
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-primary w-full md:w-1/3 bg-white text-black"
        >
          <option value="">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6'>
        {sortedGadgets.map((gadget) => (

          <div 
          key={gadget.id}
          className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img src={gadget.thumbnail} className="w-full bg-white rounded" />
            </figure>

            <div className="card-body items-center text-center">
              <h2 className="card-title">{gadget.title}</h2>
              <p className='text-xl'>Price: ${gadget.price}</p>
              <p className='text-xl'>Category: {gadget.category}</p>

              <div className="card-actions">
               <Link href={`/gadget/${gadget.id}`}> 
               <button className="btn bg-[#FF9900] text-black border-[#e17d00]">Details</button>
               </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
