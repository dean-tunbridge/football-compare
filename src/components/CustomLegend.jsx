import { PlayerData } from '../data/PlayerStats'

export default function CustomLegend({ payload }) {
  if (payload)
    return (
      <ul className="flex gap-6 mt-4 justify-center">
        {payload.map((entry, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}></span>
            <span className="text-sm text-white">{PlayerData}</span>
          </li>
        ))}
      </ul>
    )
}
