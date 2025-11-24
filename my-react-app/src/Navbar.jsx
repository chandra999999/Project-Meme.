import React, { useContext } from 'react'
import { UserContext } from './UserContext'
export const Navbar = () => {
    const user = useContext(UserContext);
    
  return (
    <div>Navbar + {user.name}</div>
  )
}
