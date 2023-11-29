import {useState} from "react"
import visiblePass from "/src/assets/viss_pass.svg"
import invisPass from '/src/assets/invis_pass.svg'

const PasswordInput = ({labelTxt, placeholderTxt}) => {

  const [visible, setVisible] = useState(false);
  const [focusClass, setFocusClass] = useState("");

  return (
    <label className="label-item">
      {labelTxt}:
      <div className={"password-container" + " " + focusClass}>
        <input
          type={visible ? "text" : "password"}
          placeholder={placeholderTxt}
          className="password-input"
          onFocus={() => setFocusClass("password-container-focus")}
          onBlur={() => setFocusClass("")}
        />
        <img
          src={visible ? visiblePass : invisPass}
          alt="password-img"
          className="absolute right-4 top-0 bottom-0 m-[auto_0] w-[25px] lg:w-[30px] cursor-pointer"
          onClick={() => setVisible(!visible)}
        />
      </div>
    </label>
  );
}


export default PasswordInput