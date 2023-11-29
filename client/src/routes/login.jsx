import PasswordInput from '/src/components/PasswordInput'
import { Form, Link } from "react-router-dom"
import loginImg from "/src/assets/productivity-img.jpeg"

const Login = () => {

  return (
    <div className="flex justify-between items-start lg:items-stretch lg:gap-x-4 xl:gap-x-6">
      <div className="lg:w-2/5 w-1/4 hidden lg:block">
        <img src={loginImg} alt="login-image" className="rounded-r-lg lg:h-full" />
      </div>
      <div className="w-[90%] lg:w-3/5 lg:m-0 lg:mr-4 xl:mr-6 flex flex-col items-center py-12 bg-stone-800 rounded-lg mt-0 2xl:mt-16 m-auto">
        <h1 className="text-white font-black text-4xl xl:text-6xl">Login</h1>
        <Form
          method="post"
          action="http://localhost:8080/login"
          className="flex flex-col w-[85%] gap-y-5"
        >
          <label className="label-item">
            Email:
            <input
              type="email"
              placeholder="Type your email"
              className="form-item"
            />
          </label>
          <PasswordInput
            labelTxt={"Password"}
            placeholderTxt="Type your password"
          />
          <button className="submit-btn">
            Log in
          </button>
          <Link 
            to="/signup"
            className='self-end text-sky-400 hover:text-sky-500 underline text-lg mt-1'
          >
              Don't have an account ?
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login