import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add-expense' component={AddExpense} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
