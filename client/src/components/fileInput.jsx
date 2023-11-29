import uploadIcon from "/src/assets/upload-2.png"
import {useState} from 'react'

const FileInput = () => {

  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    try {
      setFileName(e.target.files[0].name);
    } catch(error) {
      setFileName("");
    }
  }

  return (
    <span className="label-item">
      Choose your profile picture:
      <label 
        className="text-lg w-full bg-sky-500 hover:bg-sky-600 flex justify-center items-center gap-2 py-2 px-4 rounded-md cursor-pointer"
      >
        {
          fileName === "" ? (
            <>
              <img src={uploadIcon} alt="upload icon img" className="w-[16px] mb-[2px]" />
              Choose an image file
            </>
          ) : (
            fileName
          )
        }
                <input
          type="file"
          accept="image/*"
          className="fileInput"
          name="file"
          id="file"
          onChange={handleFile}
        />
      </label>
    </span>
  );
}

export default FileInput;