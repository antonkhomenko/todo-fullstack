import Logo from './logo'
import {NavLink} from 'react-router-dom'
const Header = () => {

  return (
   <header className="flex items-center px-6 py-9 sm:px-8 justify-between">
      <Logo txt="ToDo List"/>
      <div>
        <NavLink to="/login" className={({isActive}) => isActive ? "text-white text-lg" : "hover:text-white text-lg"}>Sign in</NavLink>
      </div>
   </header> 
  )
}

export default Header;