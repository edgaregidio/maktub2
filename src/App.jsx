import Notice from './components/common/Notice'
import Sections from './components/common/Sections'
import Accordion from './components/core/Accordion'
import Banner from './components/core/Banner'
import CardDrinks from './components/core/CardDrinks'
import Nav from './components/core/Nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Notice click={'Clique para interagir!'}/>
      <Accordion />
      <Sections name={'DRINKS CLÁSSICOS'}/>
    </div>
  )
}

export default App
