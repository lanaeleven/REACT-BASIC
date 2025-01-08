import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Halo Dunia"
  };

  return (
    <div>
      <Header {...props} />
      <Paragraph />
    </div>
  );
    
}


function Header({text= "Default Header Text"}) {
  
  return (
    <h1 className="title">{text.toUpperCase()}</h1>
  );
}

function Paragraph() {
  const text = "Belajar React Cuy";
  return (
    <p className="content">{text.toLowerCase()}</p>
  );
}
