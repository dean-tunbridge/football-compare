import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

import CustomToolTip from './CustomToolTip'
import CustomLegend from './CustomLegend'

import { PlayerData } from '../data/PlayerStats'

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={PlayerData}>
        <Tooltip content={<CustomToolTip />} />
        <Legend content={<CustomLegend />} />
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />

        {/* Radars for different stats */}
        <Radar
          dataKey="goals"
          stroke="#FF268C"
          fill="#FF268C33"
          fillOpacity={0.3}
          name="Goals"
        />
        <Radar
          dataKey="assists"
          stroke="#FFD500"
          fill="#FFD50033"
          fillOpacity={0.3}
          name="Assists"
        />
        <Radar
          dataKey="progressiveCarries"
          stroke="#E2001A"
          fill="#E2001A33"
          fillOpacity={0.3}
          name="Progressive Carries"
        />
        <Radar
          dataKey="progressivePasses"
          stroke="#0066B2"
          fill="#0066B233"
          fillOpacity={0.3}
          name="Progressive Passes"
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default RadarChartComponent
