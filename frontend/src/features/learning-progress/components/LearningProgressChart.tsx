import { Card } from 'antd';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const progressData = [
  { month: 'Tháng 1', score: 6.8, attendance: 82 },
  { month: 'Tháng 2', score: 7.2, attendance: 86 },
  { month: 'Tháng 3', score: 7.6, attendance: 88 },
  { month: 'Tháng 4', score: 8.1, attendance: 92 },
  { month: 'Tháng 5', score: 8.4, attendance: 95 },
];

export function LearningProgressChart() {
  return (
    <Card title="Tiến độ học tập" className="analytics-card">
      <div className="chart-container" aria-label="Biểu đồ tiến độ học tập">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={progressData} margin={{ top: 8, right: 16, left: 0, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="score" domain={[0, 10]} />
            <YAxis yAxisId="attendance" orientation="right" domain={[0, 100]} />
            <Tooltip />
            <Legend />
            <Line yAxisId="score" type="monotone" dataKey="score" name="Điểm trung bình" stroke="#0b2f66" strokeWidth={3} />
            <Line yAxisId="attendance" type="monotone" dataKey="attendance" name="Chuyên cần (%)" stroke="#ff5c00" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
