import React from 'react'

export default async function WebSearchPage({searchParams}) {

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`) //get the API & API_KEY & API_CONTEXT from google developers rest API programable search Engine

  const data = await response.json()
  console.log(data)
  const results = data.items
  return<>{results && results.map((result) => <h1>{result.title}</h1>)}</>
  
}
