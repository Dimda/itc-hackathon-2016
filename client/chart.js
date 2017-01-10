import { getLatestTemperature, getLatestPressure } from '../imports/aggregations'

let Highcharts = require('highcharts/highstock');

Template.Chart.helpers({
  createChart: function() {
    Meteor.defer(function() {
      Highcharts.chart('chart', {
          chart: {
              type: 'line'
          },
          title: {
              text: '時間ごとの平均気温、気圧'
          },
          subtitle: {
              text: 'asds'
          },
          xAxis: {
                categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
          },
          yAxis: {
              title: {
                  text: '気温 (°C)'
              }
          },
          plotOptions: {
              line: {
                  dataLabels: {
                      enabled: true
                  },
                  enableMouseTracking: false
              }
          },
          series: [{
              name: '気温',
              data: getLatestTemperature()
          }, {
              name: '気圧',
              data: getLatestPressure()
          }]
      });
    })
  }
});
