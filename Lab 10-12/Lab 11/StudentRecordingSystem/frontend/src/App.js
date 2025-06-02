import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";


const App = () => {
  const [students, setStudents] = useState([]);

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }

  // Fetch students on page load
  useEffect(() => {
    document.body.style.backgroundColor = 'beige'
    document.body.style.fontFamily = 'Arial, sans-serif'
    document.body.style.color = 'black'
    document.body.style.textAlign = 'center'
    fetchStudents();
  }, []);


  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };


  // Add student and update list
  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents(); // Refresh student list immediately
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };


  return (
    <div>
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />
      <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
      <StudentList students={students} />
    </div>
  );
};


export default App;