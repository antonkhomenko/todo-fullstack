import logoImg from '../assets/listLogo.svg'

const Logo = ({txt}) => {
  
  return (
    <a 
      href="#"
      className={"flex items-center gap-x-2 text-white text-2xl font-extrabold lg:text-3xl "}  
    >
      <img src={logoImg} alt="logo-img" className="lg:h-[30px]"/>
      <span className='inline-block text-[18px]'>
        {txt}
      </span>
    </a>
  )
}

export default Logo;