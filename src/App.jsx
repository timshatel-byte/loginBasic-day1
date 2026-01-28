import { useEffect, useState } from 'react'
import Login from './assets/pages/login.jsx'
import Registration from './assets/pages/Registration.jsx'
import Landing from './assets/pages/Landing.jsx'
import Home from './assets/pages/Home.jsx'
import About from './assets/pages/About.jsx'
import Contact from './assets/pages/Contact.jsx'
import Dashboard from './assets/pages/Dashboard.jsx'

function App() {
  const [page, setPage] = useState('landing')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

//   session restoration logic can be added here
useEffect(() => {
    const  users = JSON.parse(localStorage.getItem("users"));
    if (users && users.isLoggedIn) {
        setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {page === 'landing' && <Landing onNavigate={setPage} />}
      {page === 'home' && <Home onNavigate={setPage} />}
      {page === 'dashboard' && <Dashboard onNavigate={setPage} />}
      {page === 'about' && <About onNavigate={setPage} />}
      {page === 'contact' && <Contact onNavigate={setPage} />}
      {page === 'dashboard' && (
        <Dashboard
          onNavigate={setPage}
          onLogout={() => {
            setIsLoggedIn(false)
            setPage('landing')
          }}
        />
      )}
      {page === 'register' && (
        <Registration onNavigate={setPage} onRegisterSuccesful={() => setPage('login')} />
      )}

<button onClick={()=> setPage("landing")}>GO TO DASHBOARD</button>

      {page === 'login' && (
        <Login
          onNavigate={setPage}
          onLogin={() => {
            setIsLoggedIn(true)
            setPage('dashboard')
          }}
        />
      )}
    </div>
  )
}

export default App