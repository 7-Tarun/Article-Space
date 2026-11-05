import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "./appWrite/auth"
import { login, logout } from "./store/authSlice"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()

      .then((userData) => {
        if (userData) {
          dispatch(login( userData ))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))

  }, []);


  return !loading ? (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      <Header/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-stone-50">
      <div className="w-7 h-7 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )

}

export default App