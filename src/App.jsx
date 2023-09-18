
import Navbar from './assets/component/Navbar/Navbar'
import PriceOptions from './assets/component/PriceOptions/PriceOptions'
import LineChart from './assets/component/LineChart/LineChart'
import DataFetch from './assets/component/DataFetch/DataFetch'

function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <DataFetch></DataFetch>
      </div>
    </>
  )
}

export default App
