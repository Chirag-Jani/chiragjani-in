import './App.scss'
import { Analytics } from '@vercel/analytics/react';
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className='app_container'>
        <Analytics />
      <Home/>
    </div>
  )
}

export default App
