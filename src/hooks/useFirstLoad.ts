import { useState, useEffect } from 'react'

const useFirstLoad = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  useEffect(() => {
    // Check if this is the first load in this session
    const hasVisited = sessionStorage.getItem('hasVisited')
    
    if (hasVisited) {
      // Not first load - user has refreshed or navigated
      setIsFirstLoad(false)
    } else {
      // First load - mark as visited
      sessionStorage.setItem('hasVisited', 'true')
      setIsFirstLoad(true)
    }
  }, [])

  return isFirstLoad
}

export default useFirstLoad 