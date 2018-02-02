google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Define the chart to be drawn.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Element');
      data.addColumn('number', 'Percentage');
      data.addRows([
        ['PP', 137],
        ['PSOE', 85],
        ['PEDOEMOS', 71],
        ["C'S", 32], 
        ["Otros", 25]
      ]);

      // Instantiate and draw the chart.
      var chart = new google.visualization.PieChart(document.getElementById('grafica1'));
      chart.draw(data, null);
    }




google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ["Partido", "Escaños", { role: "style" } ],
        ["PP", 137, "#b87333"],
        ["PSOE", 85, "silver"],
        ["PODEMOS", 71, "gold"],
        ["C'S", 32, "color: #e5e4e2"],
        ["Otros", 25, "grey"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
        var options = {
        title: "Escaños de los partidos politicos 2016",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById("grafica2"));
      chart.draw(view, options);
  }