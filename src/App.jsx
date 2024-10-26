import viteLogo from '/vite.svg'
import './App.css'
import Messages from './components/Messages'
import Login from './components/Login'
import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

function App() {

  const [session, setSession] = useState(null);

  const getSession = async () => {
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
  }

  useEffect(() => {
    getSession()
  }, [])

  return (
    <div className='App'>
      <h1>Whattsap Clone</h1>
      <p>React Js & Supabase</p>
      {session ? <Messages /> : <Login />}
    </div>
  )
}

export default App
