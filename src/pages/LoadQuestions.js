import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";

const LoadQuestions = () => {

  const [fileName, setfileName] = useState(null);
  const [loadedFile, setLoadedFile] = useState(localStorage.getItem("fileName") || "");
  const [lastModifiedDate, setLastModifiedDate] = useState(localStorage.getItem("lastModifiedDate") || "");
  const [numberOfQuestions, setNumberOfQuestions] = useState(localStorage.getItem("NumberOfQuestions") || "");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setfileName(file.name);
    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    // const workbook = XLSX.readFile(data, {sheetRows: 4});
    
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
    localStorage.setItem("questions", JSON.stringify(jsonData));
    localStorage.setItem("answerPool", JSON.stringify([]));
    localStorage.setItem("NumberOfQuestions", jsonData.length);
    setNumberOfQuestions(jsonData.length);
    localStorage.setItem("fileName", file.name);
    setLoadedFile(file.name);
    localStorage.setItem("lastModifiedDate", JSON.stringify(file.lastModifiedDate));
    setLastModifiedDate(JSON.stringify(file.lastModifiedDate));
    console.log(jsonData);
  }


  return (
    <section className="main">
      <div>
      <p>Loaded questions:</p>
        {loadedFile && (
          <p>
            File Name: <span>{loadedFile}</span>
          </p>
        )}
        {loadedFile && (
          <p>
            Number Of Questions : <span>{numberOfQuestions}</span>
          </p>
        )}
        {loadedFile && (
          <p>
            Last Modified Date : <span>{lastModifiedDate}</span>
          </p>
        )}
      </div>
      <div className="alphabet">
        <p>Load new questions:</p>
        {fileName && (
          <p>
            FileName: <span>{fileName}</span>
          </p>
        )}
        <input
          type="file"
          onInput={(e) => handleFile(e)}
        />
      </div>
      <div>
        <h3>
          <Link to="/">Main page</Link>
        </h3>
      </div>
    </section>
  );
};

export default LoadQuestions;