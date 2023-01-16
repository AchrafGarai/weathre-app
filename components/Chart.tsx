'use client'
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from 'recharts'

function Chart({ data }: any) {
  return (
    <div className="py-12 border border-zinc-800 bg-zinc-900 rounded-2xl my-24 px-8 pl-0">
      <ResponsiveContainer width={'100%'} height={400}>
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="Date" />
          <YAxis dataKey="Temperature" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Temperature"
            stroke="#2361e7"
            fill="#12274e"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
