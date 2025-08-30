export default function CustomToolTip({ active, payload }) {
  if (active && payload && payload.length) {
    const data = payload[0]?.payload

    return (
      <div className="p-4 bg-slate-900/90 flex flex-col gap-2 rounded-md text-white">
        <p className="text-lg font-semibold">{data?.name}</p>
        <p>Goals: {data?.goals}</p>
        <p>Assists: {data?.assists}</p>
        <p>Progressive Carries: {data?.progressiveCarries}</p>
        <p>Progressive Passes: {data?.progressivePasses}</p>
        <p>Goals per 90: {data?.goalsPer90}</p>
        <p>Assists per 90: {data?.assistsPer90}</p>
        <p>Goals + Assists per 90: {data?.goalsAndAssistsPer90}</p>
        <p>Pass Completion %: {data?.passCompletionPercentage}</p>
      </div>
    )
  }

  return null
}
