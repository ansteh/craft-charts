(function(angular, Chartist){
  var app = angular.module('app', []);
  console.log(app);

  var Linechart = new Chartist.Line('.line-chart', {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
  }, {
    low: 0,
    high: 13,
    fullWidth: true,
    chartPadding: {
      top: 20,
      right: 0,
      bottom: 30,
      left: 0
    },
    plugins: [
      Chartist.plugins.tooltip({
        pointClass: 'my-cool-point'
      }),
      Chartist.plugins.ctAxisTitle({
        axisX: {
          axisTitle: 'Time (mins)',
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 50
          },
          textAnchor: 'middle'
        },
        axisY: {
          axisTitle: 'Goals',
          axisClass: 'ct-axis-title',
          offset: {
            x: 0,
            y: 0
          },
          textAnchor: 'middle',
          flipTitle: false
        }
      })
    ]
  });

  Linechart.on('draw', function(data) {
    if(data.type === 'point') {
      //console.log(data.value.y);
      var circle = new Chartist.Svg('circle', {
  	    cx: [data.x],
        cy: [data.y],
        r: [5],
        'ct:value': data.value.y,
        //'ct:meta': data.meta,
        class: 'my-cool-point',
      }, 'ct-area');
      data.element.replace(circle);
    }
  });
}(angular, Chartist));
