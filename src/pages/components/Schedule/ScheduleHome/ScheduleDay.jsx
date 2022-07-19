import React from 'react';
import { Component } from 'react/cjs/react.development';
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

const ScheduleDay = () => {



	const day = [
		{
			name: '00:00',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: '1:00',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '2:00',
			uv: 2000,
			pv: 3465,
			amt: 2290,
		},
		{
			name: '3:00',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '4:00',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '5:00',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '6:00',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: '7:00',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '8:00',
			uv: 2000,
			pv: 3584,
			amt: 2290,
		},
		{
			name: '9:00',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '10:00',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '11:00',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '12:00',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: '13:00',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '14:00',
			uv: 2000,
			pv: 5239,
			amt: 2290,
		},
		{
			name: '15:00',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '16:00',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '17:00',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '18:00',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: '19:00',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '20:00',
			uv: 2000,
			pv: 6456,
			amt: 2290,
		},
		{
			name: '21:00',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '22:00',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '23:00',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
	];
	return (
		<div className='container'>
			<div style={{ width: '100%', color: 'white' }}>
				<h3>Статистика за день</h3>
				<ResponsiveContainer width="100%" height={200}>
					<AreaChart
						width={500}
						height={200}
						data={day}
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
						<Area type="monotone" dataKey="pv" stroke="rgb(222, 196, 0)" fill="rgba(255, 255, 255, 0)" />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}

export default ScheduleDay;