export default function CustomToolTip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900/90 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>

        <p className="text-sm text-[#FF268C]">
          Premier League Goals:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-[#FFD500]">
          La Liga Goals:
          <span className="ml-2">{payload[1].value}</span>
        </p>
        <p className="text-sm text-[#E2001A]">
          Bundesliga Goals:
          <span className="ml-2">{payload[2].value}</span>
        </p>

        <p className="text-sm text-[#0066B2]">
          Serie A Goals:
          <span className="ml-2">{payload[3].value}</span>
        </p>

        <p className="text-sm text-[#003399]">
          Ligue 1 Goals:
          <span className="ml-2">{payload[4].value}</span>
        </p>
      </div>
    )
  }
}
