import { Line } from "react-chartjs-2";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Charts = () => {
  // Chart data related to quizzes
  const data = {
    labels: [
      "Quiz 1",
      "Quiz 2",
      "Quiz 3",
      "Quiz 4",
      "Quiz 5",
      "Quiz 6",
      "Quiz 7",
      "Quiz 8",
      "Quiz 9",
      "Quiz 10",
    ], // Quizzes
    datasets: [
      {
        label: "Scores",
        data: [32, 40, 78, 58, 92, 70, 83, 90, 85, 90], // Scores for each quiz
        borderColor: "#4caf50", // Green line
        backgroundColor: "rgba(76, 175, 80, 0.2)", // Green fill
        fill: true,
        tension: 0.4, // Smoothness of the line
        pointBackgroundColor: "#4caf50",
      },
      {
        label: "Average Time (minutes)",
        data: [25, 30, 28, 22, 35, 26, 20, 60, 70, 60], // Average time spent on each quiz
        borderColor: "#f44336", // Red line
        backgroundColor: "rgba(244, 67, 54, 0.2)", // Red fill
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#f44336",
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quiz Performance Overview
        </Typography>
        <Box sx={{ height: 300 }}>
          <Line data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Charts;
