import ReactApexCharts from 'react-apexcharts';

function generateDayWiseTimeSeries(baseval: any, count: any, yrange: any) {
  let i = 0;
  const series = [];
  while (i < count) {
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([baseval, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const ScatteredDatetimeChart = () => {
  const state = {
    series: [
      {
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 60,
          },
        ),
      },
      {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          20,
          {
            min: 10,
            max: 60,
          },
        ),
      },
      {
        name: 'TEAM 3',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          30,
          {
            min: 10,
            max: 60,
          },
        ),
      },
      {
        name: 'TEAM 4',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          10,
          {
            min: 10,
            max: 60,
          },
        ),
      },
      {
        name: 'TEAM 5',
        data: generateDayWiseTimeSeries(
          new Date('11 Feb 2017 GMT').getTime(),
          30,
          {
            min: 10,
            max: 60,
          },
        ),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          type: 'xy',
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        max: 70,
      },
    },
  };

  return (
    <ReactApexCharts
      options={state.options}
      series={state.series}
      type="scatter"
      height={350}
    />
  );
};
