import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    BarChart,
    Bar,
    ResponsiveContainer,
    Legend
} from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

// Custom Tooltip Component
// const CustomTooltip = ({ active, payload, label }) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="bg-muted text-primary p-2  rounded">
//                 <p className="font-bold">{`Page: ${label}`}</p>
//                 <p>{`PV: ${payload[0].value}`}</p>
//                 <p>{`UV: ${payload[1].value}`}</p>
//             </div>
//         );
//     }
//     return null;
// };

const RenderBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* Use the custom tooltip */}
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default RenderBarChart;


const RenderLineChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
            >
                <CartesianGrid stroke='#808080' strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export { RenderLineChart, RenderBarChart };