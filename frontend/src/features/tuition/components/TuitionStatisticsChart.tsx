import { Card } from 'antd';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const tuitionData = [
  { month: 'Tháng 1', collected: 28, outstanding: 4 },
  { month: 'Tháng 2', collected: 31, outstanding: 3 },
  { month: 'Tháng 3', collected: 29, outstanding: 6 },
  { month: 'Tháng 4', collected: 35, outstanding: 2 },
  { month: 'Tháng 5', collected: 33, outstanding: 5 },
];

export function TuitionStatisticsChart() {
  return (
    <Card title="Thống kê học phí" className="analytics-card">
      <div className="chart-container" aria-label="Biểu đồ thống kê học phí">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={tuitionData} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis unit="tr" />
            <Tooltip formatter={(value) => [`${value} triệu`, '']} />
            <Legend />
            <Bar dataKey="collected" name="Đã thu" fill="#3b826f" radius={[4, 4, 0, 0]} />
            <Bar dataKey="outstanding" name="Còn thiếu" fill="#ff5c00" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
