import PasswordInput from "../components/passwordInput";
import loginImg from "/src/assets/productivity-img.jpeg"
import FileInput from "/src/components/fileInput"

const SignUp = () => {

  return (
    <div className="flex justify-between items-start lg:items-stretch">
      <div className="lg:w-2/5 hidden lg:block">
        <img src={loginImg} alt="login-image" className="rounded-r-lg lg:h-full lg:object-cover" />
      </div>
      <div className="bg-stone-800 w-[90%] lg:w-[56%] m-auto rounded-md flex flex-col items-center py-6 lg:py-12 gap-y-2">
        <h1 className="text-white font-black text-4xl lg:text-6xl">Registration</h1>
        <form className="flex flex-col w-[85%] gap-y-5">
          <label className="label-item">
            Name:
            <input
              type="text"
              className="form-item"
              placeholder="Type your name"
            />
          </label>
          <label className="label-item">
            Email:
            <input
              type="email"
              className="form-item"
              placeholder="Type your email"
            />
          </label>
          <PasswordInput
            labelTxt={"Password"}
            placeholderTxt={"Type your password"}
          />
          <PasswordInput
            labelTxt={"Confirm password"}
            placeholderTxt={"Type your password again"}
          />
          <FileInput/> 
          <button className="submit-btn bg-gradient-to-r from-lime-600 to-green-600 hover:bg-gradient-to-r hover:from-lime-700 hover:to-green-700">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;