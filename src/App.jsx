import Dashboard from "./Dashboard/Dashboard";
import { HashRouter, Route, Routes} from "react-router-dom";
import TransactionPage from "./Transaction/Transaction";
import Support from "./Support/Support";





function App() {
  return (
    <HashRouter>
      <div className="center">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Transactions' element={<TransactionPage />} />
          <Route path='/Support' element={<Support />} />
        </Routes>
      </div>

      
      
    </HashRouter>
  );
}

export default App;