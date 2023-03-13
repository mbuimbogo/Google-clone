
import SearchHeader from '@/components/SearchHeader'
import './../globals.css'

export const metadata = {
  title: 'Google clone app',
  description: 'Google clone created by nextjs 13',
  icons: {
    icon: '/favicon.svg',
  },
}



export default function SearchLayout({ children }) {
  return (
    
      <body>
        <SearchHeader/>
        {children}

        </body>
   
  )
}
