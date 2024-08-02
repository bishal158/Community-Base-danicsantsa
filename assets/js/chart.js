function firstChart(){

    var options = {
      series: [42, 43, 43, 47],
      chart: {
        width: 380,
        type: 'polarArea'
      },
      labels: ['Google', 'Personal', 'Others', 'Others'],
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom'
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0
          },
          spokes: {
            strokeWidth: 0
          },
        }
      },
      colors: [   '#34CAA5', '#F6F6F6', '#84E8F4', '#FDCF24'],
      tooltip: {
        y: {
          formatter: function(value) {
            let total = options.series.reduce((a, b) => a + b, 0);
            let percentage = (value / total * 100).toFixed(2);
            return percentage + "%";
          },
          title: {
            formatter: function() {
              return '';
            }
          }
        }
      }
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    if(chart){
      chart.render();
    }
   
  }
  
  firstChart()
  
  
  
  
  
  
  
  var options = {
    series: [
      {
        name: "Net Sales",
        type: 'line',
        data: [45000, 56000, 60000, 52657, 54000, 49000, 53000]
      },
      {
        name: "Revenue",
        type: 'line',
        data: [44000, 55000, 57000, 52000, 53000, 48000, 50000]
      }
    ],
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
      background: '#FFF' // Background color for the chart area
    },
    stroke: {
      width: [4, 4]
    },
    
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0, 1]
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    xaxis: {
      type: 'category',
      axisBorder: {
        show: true,
        color: '#78909c'
      },
      axisTicks: {
        show: true,
        color: '#78909c'
      }
    },
    yaxis: [
      {
  
        axisBorder: {
          show: true,
          color: '#78909c'
        },
        axisTicks: {
          show: true,
          color: '#78909c'
        },
        labels: {
          style: {
            colors: '#78909c'
          }
        }
      }
    ],
    grid: {
      show: true,
      borderColor: '#e0e0e0', // Color of the grid lines
      strokeDashArray: 4, // Style of the grid lines (dashed or solid)
      row: {
        colors: ['#FFF', 'transparent'], // Alternate row colors (if using row-based coloring)
        opacity: 0.5
      },
      column: {
        colors: ['#EAFBF7', 'transparent'], // Alternate column colors (if using column-based coloring)
        opacity: 0.5
      }
    },
    colors: ['#94D82D', '#69C5FF'],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (value) {
          return `$${value.toLocaleString()}`;
        }
      }
    },
    legend: {
      show: false
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chartTwo"), options);
  chart.render();