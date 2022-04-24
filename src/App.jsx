import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Bookeeper!</h1>
      <nav className="border-b border-black-500 pb-1">
        <Link to="/invoices">Invoices</Link> | {" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
