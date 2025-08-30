import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import CustomToolTip from './CustomToolTip'
import CustomLegend from './CustomLegend'

import { PlayerData } from '../data/PlayerStats'

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={PlayerData} margin={{ right: 30 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomToolTip />} />
        <Legend content={<CustomLegend />} />

        {/* Bars for some stats - you can adjust which ones you want */}
        <Bar
          dataKey="goals"
          fill="#FF268C"
          name="Goals"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="assists"
          fill="#FFD500"
          name="Assists"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="progressiveCarries"
          fill="#E2001A"
          name="Progressive Carries"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="progressivePasses"
          fill="#0066B2"
          name="Progressive Passes"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartComponent
