'use client'
import { useSession } from 'next-auth/react'
import { isMobile } from 'mobile-device-detect'
import useMetaMask from 'app/hooks/useMetaMask'
import SideBar from 'app/components/sideBar'
import { useEffect } from 'react'
import Feed from '../components/Feed'

export default function page() {
  const { status } = useSession()
  const { status: web3Status } = useMetaMask()

  useEffect(() => {
    const container = document.getElementById('main')
    container.addEventListener('wheel', handleScroll)
    return () => {
      container.removeEventListener('wheel', handleScroll)
    }
  }, [])

  const handleScroll = (e) => {
    const container = document.getElementById('main')
    const isScrollable = container.scrollHeight > container.clientHeight

    if (isScrollable) {
      container.scrollTop += e.deltaY
    }
  }

  return (
    <div id="main" className="overflow-y-auto h-screen max-w-4xl">
      
        <Feed />
    </div>
  )
}
