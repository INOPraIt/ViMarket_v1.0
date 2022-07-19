import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	Brush,
	AreaChart,
	Area,
	ResponsiveContainer,
} from 'recharts';

const ScheduleWeek = () => {

	const week = [
		{
			name: 'Monday',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: 'Tuesday',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: 'Wednesday',
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: 'Thursday',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: 'Friday',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: 'Saturday',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: 'Sunday',
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];

	return (
		<div className='container'>
			<div style={{ width: '100%', color: 'white' }}>

						<h3>Статистика за месяц</h3>
						<ResponsiveContainer width="100%" height={200}>
							<AreaChart
								width={500}
								height={200}
								data={week}
								syncId="anyId"
								margin={{
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Area type="monotone" dataKey="pv" stroke="rgb(28, 255, 8)" fill="rgba(255, 255, 255, 0)" />
							</AreaChart>
						</ResponsiveContainer>

			</div>
		</div>
	)
}

export default ScheduleWeek;