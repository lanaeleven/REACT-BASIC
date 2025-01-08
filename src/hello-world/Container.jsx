export default function Container({children}) {

  return (
    <div>
      <h1>This is  Contanier Header</h1>
      {children}
      <footer>
        @2025
      </footer>
    </div>
  );
}