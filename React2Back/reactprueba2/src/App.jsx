import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

const baseUrl = "http://localhost:3001/api/notes";

const App = () => {
  // Uso de Hook de Estado para almacenar las notas
  const [notes, setNotes] = useState([]);

  // Uso de Hook de Efecto para mandar llamar las notas del Back-end
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNotes(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <NoteList notes={notes} />
      <NoteForm setNotes={setNotes} />
    </>
  );
};

export default App;
