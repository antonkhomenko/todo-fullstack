

const Header = () => {

  return (
   <header className="flex items-center p-10 justify-between">
      <a href="#" className="left-[35px] text-gray-100 text-4xl font-black relative before:absolute before:bg-[url('./assets/listLogo.svg')] before:w-[30px] before:h-full before:left-[-35px] before:inline-block before:bg-no-repeat before:bg-center before:bg-contain">
        TodoList 
      </a>
      <div>

        <a href="#">Log in</a>
      </div>
   </header> 
  )
}

export default Header;