import './App.css'
import CardList from './components/CardList'
import MainHeader from './components/MainHeader'
import { FilmProvider } from './contexts/FilmProvider'

function App() {

  return (
    <>
      <FilmProvider>
        <MainHeader />
        <CardList />
      </FilmProvider>
    </>
  )

}

export default App
