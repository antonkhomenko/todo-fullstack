import Logo from './logo'

const Header = () => {

  return (
   <header className="flex items-center px-6 py-9 justify-between">
      <Logo txt="ToDo List"/>
      <div>
        <a href="#">Log in</a>
      </div>
   </header> 
  )
}

export default Header;