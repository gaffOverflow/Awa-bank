//    // Sample data for the chart
//    const data = [30, 50, 70, 40, 90];

//    // Get the canvas element and its context
//    const canvas = document.getElementById('myChart');
//    const ctx = canvas.getContext('2d');

//    // Set up the chart properties
//    const barWidth = 50;
//    const barSpacing = 20;
//    const chartHeight = canvas.height - 30;

//    // Function to draw the bars
//    function drawBars() {
//      let x = 20;

//      for (let i = 0; i < data.length; i++) {
//        const barHeight = (data[i] / 100) * chartHeight;

//        ctx.fillStyle = 'blue';
//        ctx.fillRect(x, chartHeight - barHeight, barWidth, barHeight);

//        // Move to the next bar position
//        x += barWidth + barSpacing;
//      }
//    }

//    // Function to draw the axis
//    function drawAxis() {
//      ctx.beginPath();
//      ctx.moveTo(10, 0);
//      ctx.lineTo(10, chartHeight);
//      ctx.lineTo(canvas.width, chartHeight);
//      ctx.strokeStyle = '#000';
//      ctx.stroke();
//    }

//    // Function to draw the entire chart
//    function drawChart() {
//      drawBars();
//      drawAxis();
//    }

//    // Call the drawChart function
//    drawChart();

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sample Data",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      data: [10, 30, 45, 25, 55],
      fill: true, // Enable area fill below the line
    },
  ],
};

// Get the canvas element
const canvas = document.getElementById("myChart");
const ctx = canvas.getContext("2d");

// Create a new line chart instance
const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: {
    scales: {
      x: [
        {
          grid: {
            display: false,
          },
          ticks: {
            maxRotation: 0,
          },
        },
      ],
      y: [
        {
          grid: {
            color: "#eee",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    elements: {
      line: {
        tension: 0.4, // Adjust tension for smooth curves
      },
    },
  },
});
