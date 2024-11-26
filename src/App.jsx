import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Footer from './components/Footer'
import Topbar from './components/Topbar'
import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';

function App() {

  return (
    <>
      <Topbar claim="EpiBooks" />
      <Welcome titolo="Cipo" sottotitolo="Il migior E-Commerce di libri"/>
      <AllTheBooks />
      <Footer />
    </>
  )
}
export default App
