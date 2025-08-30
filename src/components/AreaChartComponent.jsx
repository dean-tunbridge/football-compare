import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import { PlayerData } from '../data/PlayerStats'

import CustomToolTip from './CustomToolTip'
import CustomLegend from './CustomLegend'

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={PlayerData} margin={{ right: 30 }}>
        <YAxis />
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip content={<CustomToolTip />} />
        <Legend content={<CustomLegend />} />
        <Area
          type="monotone"
          dataKey="goals"
          stroke="#FF268C"
          fill="#FF268C33"
          name="Goals"
        />
        <Area
          type="monotone"
          dataKey="assists"
          stroke="#FFD500"
          fill="#FFD50033"
          name="Assists"
        />
        <Area
          type="monotone"
          dataKey="progressiveCarries"
          stroke="#E2001A"
          fill="#E2001A33"
          name="Progressive Carries"
        />
        <Area
          type="monotone"
          dataKey="progressivePasses"
          stroke="#0066B2"
          fill="#0066B233"
          name="Progressive Passes"
        />
        <Area
          type="monotone"
          dataKey="passCompletionPercentage"
          stroke="#003399"
          fill="#00339933"
          name="Pass Completion"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaChartComponent
