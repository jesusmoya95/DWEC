
google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart2);

    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ["Año", "Poblacion", { role: "style" } ],
        ['2011', 1452, "#b87333"],
        ['2012', 2360, "silver"],
        ['2013', 4021, "gold"],
        ['2014', 1300, "color: #e25452"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
        var options = {
        title: "Evolución de la población zurda en Badajoz",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
        backgroundColor: "eee"
      };
      var chart = new google.visualization.BarChart(document.getElementById("grafica2"));
      chart.draw(view, options);
  }