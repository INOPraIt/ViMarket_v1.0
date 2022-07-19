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

const ScheduleMonth = () => {
	const month = [
		{
			name: '1',
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: '2',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '3',
			uv: 2000,
			pv: 5386,
			amt: 2290,
		},
		{
			name: '4',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '5',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '6',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '7',
			uv: 2000,
			pv: 3880,
			amt: 2290,
		},
		{
			name: '8',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '9',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '10',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '11',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '12',
			uv: 2000,
			pv: 5800,
			amt: 2290,
		},
		{
			name: '13',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '14',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '15',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '16',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '17',
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: '18',
			uv: 2000,
			pv: 4595,
			amt: 2290,
		},
		{
			name: '19',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '20',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '21',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '22',
			uv: 2000,
			pv: 3683,
			amt: 2290,
		},
		{
			name: '23',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '24',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '25',
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: '26',
			uv: 2000,
			pv: 5275,
			amt: 2290,
		},
		{
			name: '27',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '28',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: '29',
			uv: 2000,
			pv: 3401,
			amt: 2290,
		},
		{
			name: '30',
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: '31',
			uv: 1890,
			pv: 4800,
			amt: 2181,
		}
	];

	return (
		<div className='container'>
			<div style={{ width: '100%', color: 'white'  }}>
						<h3>Статистика за месяц</h3>
						<ResponsiveContainer width="100%" height={200}>
							<AreaChart
								width={500}
								height={200}
								data={month}
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
								<Area type="monotone" dataKey="pv" stroke="rgb(255, 0, 247)" fill=" rgba(255, 255, 255, 0)" />
							</AreaChart>
						</ResponsiveContainer>
			
				
			</div>
		</div>
	)
}

export default ScheduleMonth;