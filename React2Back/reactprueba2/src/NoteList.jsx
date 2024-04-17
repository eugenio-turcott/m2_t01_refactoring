const NoteList = ({ notes }) => {
  const noteContainer = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "0 30px 25px"
  }

  const noteStyle = {
    backgroundImage: "url('src/post-it.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: "10px",
    marginRight: "25px",
    marginBottom: "20px",
    height: "150px",
    width: "150px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px",
    border: "2px solid black"
  }

  const contentDiv = {
    overflow: "scroll"
  }

  const contentText = {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: 1.2,
    fontSize: "20px",
    fontWeight: 500,
    fontStyle: "normal"
  }

  return (
    <div style={noteContainer}>
      {notes.map((note) => (
        <div
          key={note.id}
          style={noteStyle}
        >
          <div style={contentDiv}>
            <h2 style={contentText}>{note.content}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
