const Header = () => {
  const title = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "35px 0",
    margin: "0 30px 20px",
    textAlign: "center"
  }

  const header = {
    fontFamily: "'Unbounded', sans-serif",
    color: "#333",
    fontSize: "60px",
    padding: "15px",
    backgroundColor: "rgb(182, 159, 255)",
    border: "2px solid black"
  }

  return (
    <div style={title}>
        <h1 style={header}>POST YOUR NOTE</h1>
    </div>
  );
};

export default Header;