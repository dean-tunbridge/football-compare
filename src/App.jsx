import './App.css'
import GridItem from './components/GridItem'
import AreaChartComponent from './components/AreaChartComponent'
import BarChartComponent from './components/BarChartComponent'
import LineChartComponent from './components/LineChartComponent'
import RadarChartComponent from './components/RadarChartComponent'

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className="grid w-full gap-10 max-w-[1400px]">
          <h1 className="text-4xl">
            Using Data to compare the aattack minded midfield transfer targets
            of Tottenham Hotspur in the Summer 25/26 window{' '}
          </h1>
          <GridItem title="Area Chart">
            <AreaChartComponent />
          </GridItem>
          <GridItem title="Bar Chart">
            <BarChartComponent />
          </GridItem>
          <GridItem title="Line Chart">
            <LineChartComponent />
          </GridItem>
          <GridItem title="RadarChart">
            <RadarChartComponent />
          </GridItem>
        </div>
      </div>
    </>
  )
}

export default App
