/* function MainContent() {
  return <h1>Desde el js</h1>;
}

function MainContentImg() {
  return <img src="https://picsum.photos/2500/300" />;
}

console.log(crearElement),
  ReactDOM.render(
    <>
      <MainContent />
      <MainContentImg />
    </>,

    document.getElementById("root")
    ); */

const h1 = document.createElement("h1");
h1.textContent = "Este es un texto de prueba";
h1.className = "header";
document.getElementById("root").append(h1);
