(function(angular){
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
    fullWidth: true,
    chartPadding: {
      right: 40
    },
    plugins: [
      Chartist.plugins.tooltip({
        pointClass: 'my-cool-point'
      })
    ]
  });

  Linechart.on('draw', function(data) {
    if(data.type === 'point') {
      console.log(data.value.y);
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
}(angular));
