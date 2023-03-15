import ImageSearchResults from '@/components/ImageSearchResults'
import Link from 'next/link'
import React from 'react'

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1"

  await new Promise((resolve)=> setTimeout(resolve,10000))
  
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`) //get the API & API_KEY & API_CONTEXT from google developers rest API programable search Engine

  if(!response.ok){
    throw new Error("Something went wrong")
  }
  const data = await response.json()
  
  const results = data.items

  if(!results){
    return <div className="flex flex-col justify-center items-center">
      <h1 className='text-3xl mb-4'>Pia wewe kuwa serious</h1>
      <p className='text-lg'>Try searching for something or go back to the homepage{" "}
      <Link className='text-blue-500' href="/">Home</Link>
      </p>
    </div>
    
  }
  return<>{results && <ImageSearchResults results={data}/>}</>
  
}
