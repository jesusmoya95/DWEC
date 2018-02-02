google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
var options;
 var chart;
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ["Partido", "Escaños", { role: "style" } ],
        ["PP", 137, "#b87333"],
        ["PSOE", 85, "silver"],
        ["PODEMOS", 71, "gold"],
        ["C'S", 32, "color: #e5e4e2"],
        ["Otros", 25, "grey"]
      ]);

      var view = new google.visualization.DataView(data);
      view.setColumns([0,1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
        options = {
        title: "Escaños de los partidos politicos 2016",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
            animation:{
                duration: 2000,
                easing: 'out'
            }
      };
      chart = new google.visualization.BarChart(document.getElementById("grafica"));
      chart.draw(view, options);
        setTimeout(poner_datos, 2000);
  }





function poner_datos(){
   var data2 = google.visualization.arrayToDataTable([
        ["Partido", "Escaños", { role: "style" } ],
        ["PP", 139, "#b87333"],
        ["PSOE", 95, "silver"],
        ["PODEMOS", 51, "gold"],
        ["C'S", 4, "color: #e5e4e2"],
        ["Otros", 25, "grey"]
      ]);
    
          var view = new google.visualization.DataView(data2);
      view.setColumns([0,1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
    chart.draw(view, options);
}
 



var rowData2 = [["Partido", "Escaños", { role: "style" } ],
        ["PP", 105, "#b87333"],
        ["PSOE", 85, "silver"],
        ["PODEMOS", 96, "gold"],
        ["C'S", 35, "color: #e5e4e2"],
        ["Otros", 29, "grey"]]; 



