import React from 'react'
import CountryLookup from './CountryLookup.jsx'

export default function Footer() {
  return (
    <div>
      <footer className='absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full'>
        <div className="border-b px-8 py-3">
        <CountryLookup />
        
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className='flex items-center space-x-6'>
                <li className="link">About</li>
                <li className="link">Advertising</li>
                <li className="link">Business</li>
                <li className="link">How Search works</li>
            </ul>
            <p>Made with ❤️ by mbuimbogo</p>
            <ul className='flex items-center space-x-6'>
                <li className="link">Privacy</li>
                <li className="link">Terms</li>
                <li className="link">Settings</li>
            </ul>
        </div>
      </footer>
    </div>
  )
}
