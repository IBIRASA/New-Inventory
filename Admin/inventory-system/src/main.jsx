import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import User from './Pages/User.jsx'
import Notfound from './Pages/Notfound.jsx'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Finance from './Pages/Finance.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Operations from './Pages/Operations.jsx'
import Report from './Pages/Report.jsx'
import Weekly from './Pages/Weekly.jsx'
import Montly from './Pages/Montly.jsx'
import Annualy from './Pages/Annualy.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
       <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>  
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="/User" element={<User/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/Finance" element={<Finance/>}/>
          <Route path="/Operations" element={<Operations/>}/>
          <Route path="/Weekly" element={<Weekly/>}/>
          <Route path="/Monthly" element={<Montly/>}/>
          <Route path="/Annualy" element={<Annualy/>}/>
          <Route path="/Daily" element={<Report/>}/>
          <Route path="*" element={<Notfound />} />
       </Routes>
      </Router>
  </React.StrictMode>
)
