$(document).ready(function() {

  $("#retrieve-chart-Walmart").click(function()
  {var displayResources = $("#display-chart-Walmart");
  +displayResources.text("Loading data from JSON source...");
  $.ajax(
    {type: "GET",
    url: "https://api.iextrading.com/1.0/stock/WMT/chart/1m",
    success: function(result) {
      console.log(result);
      var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";
      for (var i in result)
      {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";
    }
    output += "</tbody></table>";
    displayResources.html(output);
    $("table").addClass("table");
  }
});
});





  $("#retrieve-chart-UnitedHealth").click(function() {
    var displayResources = $("#display-chart-UnitedHealth");
    +displayResources.text("Loading data from JSON source...");
    $.ajax({
      type: "GET",
      url: "https://api.iextrading.com/1.0/stock/UNH/chart/1m",
      success: function(result)
      {console.log(result);
        var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";
        for (var i in result)
        {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";
      }
      output += "</tbody></table>";
      displayResources.html(output);
      $("table").addClass("table")
      ;}
    });
  });






  $("#retrieve-chart-Apple").click(function()
  {var displayResources = $("#display-chart-Apple");
  +displayResources.text("Loading data from JSON source...");
  $.ajax({
    type: "GET",
    url: "https://api.iextrading.com/1.0/stock/AAPL/chart/1m",
    success: function(result)
    {
      console.log(result);
      var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";
      for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";
    }
      output += "</tbody></table>";
      displayResources.html(output);
      $("table").addClass("table");}
    });
  });






  $("#retrieve-chart-Mastercard").click(function() {var displayResources = $("#display-chart-Mastercard"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/MA/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-LululemonAthletica").click(function() {var displayResources = $("#display-chart-LululemonAthletica"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/LULU/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BestBuy").click(function() {var displayResources = $("#display-chart-BestBuy"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BBY/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Yum").click(function() {var displayResources = $("#display-chart-Yum"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/YUM/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-TJX").click(function() {var displayResources = $("#display-chart-TJX"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/TJX/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Sony").click(function() {var displayResources = $("#display-chart-Sony"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/SNE/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Costco").click(function() {var displayResources = $("#display-chart-Costco"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/COST/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Conocophillips").click(function() {var displayResources = $("#display-chart-Conocophillips"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/COP/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-SynchronyFinancial").click(function() {var displayResources = $("#display-chart-SynchronyFinancial"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/SYF/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-CapitalOne").click(function() {var displayResources = $("#display-chart-CapitalOne"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/COF/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BankOfMontreal").click(function() {var displayResources = $("#display-chart-BankOfMontreal"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BMO/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BristolMyers").click(function() {var displayResources = $("#display-chart-BristolMyers"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BMY/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Raytheon").click(function() {var displayResources = $("#display-chart-Raytheon"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/RTN/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Dell").click(function() {var displayResources = $("#display-chart-Dell"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/DVMT/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-HewlettPackard").click(function() {var displayResources = $("#display-chart-HewlettPackard"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/HPE/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-HP").click(function() {var displayResources = $("#display-chart-HP"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/HPQ/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Intuit").click(function() {var displayResources = $("#display-chart-Intuit"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/INTU/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Bandwidth").click(function() {var displayResources = $("#display-chart-Bandwidth"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BAND/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BuckleInc").click(function() {var displayResources = $("#display-chart-BuckleInc"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BKE/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BJsRestaurant").click(function() {var displayResources = $("#display-chart-BJsRestaurant"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BJRI/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-GibraltarIndustries").click(function() {var displayResources = $("#display-chart-GibraltarIndustries"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ROCK/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-MarcusandMillichapInc").click(function() {var displayResources = $("#display-chart-MarcusandMillichapInc"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/MMI/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-AngiHomeServices").click(function() {var displayResources = $("#display-chart-AngiHomeServices"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ANGI/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-Nordstrom").click(function() {var displayResources = $("#display-chart-Nordstrom"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/JWN/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-ColumbiaSportswear").click(function() {var displayResources = $("#display-chart-ColumbiaSportswear"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/COLM/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-JazzPharmaceuticals").click(function() {var displayResources = $("#display-chart-JazzPharmaceuticals"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/JAZZ/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});




  $("#retrieve-chart-BradyCorp").click(function() {var displayResources = $("#display-chart-BradyCorp"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BRC/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
});
