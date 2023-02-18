import ScrollToTop from 'react-scroll-to-top'
import Notice from './components/common/Notice'
import Sections from './components/common/Sections'
import Accordion from './components/core/Accordion'
import Banner from './components/core/Banner'
import Nav from './components/core/Nav'

function App() {

  return (
    <>
    <ScrollToTop
      smooth
      viewBox='0 0 256 256'
      className='btnUp'
      color='#222'
      />
      <Nav />
      <Banner />
      <Notice click={'Clique para interagir!'}/>
      <Accordion />
      <Sections name={'DRINKS CLÁSSICOS'}/>
    </>
  )
}

export default App
