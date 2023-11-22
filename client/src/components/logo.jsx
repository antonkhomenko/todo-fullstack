import logoImg from '../assets/listLogo.svg'

const Logo = ({txt}) => {
  
  return (
    <a 
      href="#"
      className="flex items-center gap-x-2 text-white text-2xl font-extrabold"  
    >
      <img src={logoImg} alt="logo-img" className=""/>
      <span>
        {txt}
      </span>
    </a>
  )
}

export default Logo;