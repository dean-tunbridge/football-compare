import {
  LineChart,
  Line,
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

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={PlayerData} margin={{ right: 30 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />

        <Tooltip content={<CustomToolTip />} />
        <Legend content={<CustomLegend />} />

        <Line
          type="monotone"
          dataKey="goals"
          stroke="#FF268C"
          fill="#FF268C"
          name="Goals"
        />
        <Line
          type="monotone"
          dataKey="assists"
          stroke="#FFD500"
          fill="#FFD500"
          name="Assists"
        />
        <Line
          type="monotone"
          dataKey="progressiveCarries"
          stroke="#E2001A"
          fill="#E2001A"
          name="Progressive Carries"
        />
        <Line
          type="monotone"
          dataKey="progressivePasses"
          stroke="#0066B2"
          fill="#0066B2"
          name="Progressive Passes"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartComponent
