google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        let data = google.visualization.arrayToDataTable([
          [' ', ' '],
          ['07/12', 88, ],
          ['08/12', 95, ],
          ['09/12', 130, ],
          ['10/12', 121, ],
          ['12/12', 120, ],
          ['13/12', 0, ],
          ['14/12', 0, ]
        ]);

        let options = {
          chart: {
            title: ' ',
            subtitle:' '
          },
          vAxis: {
            scaleType: 'log',
            FormData:'number',
            max:[10,30]}
        };

        
        let chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }