import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  indexAxis: 'x' as const, // y = horizontal, x or undefined is vertical
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const labels = [
  'Type 1',
  'Type 2',
  'Type 3',
  'Type 4',
  'Type 5',
  'Type 6',
  'Type 7',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [21, 62, 3, 4, 5, 21, 13],
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [11, 22, 63, 24, 15, 43, 15],
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export interface BarChartProps {
  type: 'horizontal' | 'vertical';
}

export const BarChart = () => {
  return <Bar options={options} data={data} />;
};
