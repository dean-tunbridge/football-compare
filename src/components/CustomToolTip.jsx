export default function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    const playerName = payload[0]?.payload?.name

    return (
      <div className="p-4 bg-slate-900/90 flex flex-col gap-2 rounded-md text-white">
        <p className="text-lg font-semibold">{playerName}</p>

        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: <span className="ml-1">{entry.value}</span>
          </p>
        ))}
      </div>
    )
  }

  return null
}
