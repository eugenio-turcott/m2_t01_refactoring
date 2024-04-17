import { useState } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/api/notes";

const NoteForm = ({ setNotes }) => {
  // Uso de Hook de Estado para manejar la creación de notas
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),
    };

    axios.post(baseUrl, noteObject).then((response) => {
      setNotes((prevNotes) => prevNotes.concat(response.data));
      setNewNote("");
    });
  };

  const noteForm = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "30px"
  }

  const noteInput = {
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "2px solid black",
    width: "400px",
    fontSize: "18px"
  }

  const noteButton = {
    padding: "15px 30px",
    backgroundColor: "#59ff99",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "25px",
    fontWeight: "700",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };
  
  const noteButtonHover = {
    backgroundColor: "#13e062"
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <form onSubmit={addNote} style={noteForm}>
      <input
        value={newNote}
        onChange={handleNoteChange}
        placeholder="Enter your note..."
        style={noteInput}
      />
      <button type="submit" style={isHovered ? { ...noteButton, ...noteButtonHover} : noteButton } onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Save</button>
    </form>
  );
};

export default NoteForm;