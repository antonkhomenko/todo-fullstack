import logoImg from '../assets/listLogo.svg'
import { Link } from 'react-router-dom'
const Logo = ({txt}) => {
  
  return (
    <Link
      to="/"
      className={"flex items-center gap-x-2 text-white text-2xl font-extrabold lg:text-3xl "}  
    >
      <img src={logoImg} alt="logo-img" className="lg:h-[30px]"/>
      <span className='inline-block text-[18px] md:text-4xl'>
        {txt}
      </span>
    </Link>
  )
}

export default Logo;