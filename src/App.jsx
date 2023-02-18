import Notice from './components/common/Notice'
import Accordion from './components/core/Accordion'
import Banner from './components/core/Banner'
import Nav from './components/core/Nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Notice click={'Clique para interagir!'}/>
      <Accordion />
    </div>
  )
}

export default App
