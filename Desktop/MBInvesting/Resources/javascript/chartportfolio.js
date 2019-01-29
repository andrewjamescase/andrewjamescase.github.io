$("#retrieve-chart-portfolio-BankofAmerica").click(function() {var displayResources = $("#display-chart-portfolio-BankofAmerica"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BAC/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-BauschHealthCompany").click(function() {var displayResources = $("#display-chart-portfolio-BauschHealthCompany"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BHC/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-CaraTherapeutics").click(function() {var displayResources = $("#display-chart-portfolio-CaraTherapeutics"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/CARA/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Discover").click(function() {var displayResources = $("#display-chart-portfolio-Discover"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/DFS/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Entegris").click(function() {var displayResources = $("#display-chart-portfolio-Entegris"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ENTG/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-ElectroScientificIndustries").click(function() {var displayResources = $("#display-chart-portfolio-ElectroScientificIndustries"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ESIO/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-ETSY").click(function() {var displayResources = $("#display-chart-portfolio-ETSY"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ETSY/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-FifthThird").click(function() {var displayResources = $("#display-chart-portfolio-FifthThird"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/FITB/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-GeneralMotors").click(function() {var displayResources = $("#display-chart-portfolio-GeneralMotors"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/GM/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Humana").click(function() {var displayResources = $("#display-chart-portfolio-Humana"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/HUM/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Intel").click(function() {var displayResources = $("#display-chart-portfolio-Intel"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/INTC/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Oracle").click(function() {var displayResources = $("#display-chart-portfolio-Oracle"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ORCL/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-PfizerInc").click(function() {var displayResources = $("#display-chart-portfolio-PfizerInc"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/PFE/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-RossStores").click(function() {var displayResources = $("#display-chart-portfolio-RossStores"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ROST/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});
$("#retrieve-chart-portfolio-Weibocorporation").click(function() {var displayResources = $("#display-chart-portfolio-Weibocorporation"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/WB/chart/1m",success: function(result) {console.log(result);var output ="<table><thead><tr><th>date</th><th>open</th><th>close</th><th>high</th><th>low</th><th>change</th><th>changepercent</th><th>volume</th></thead><tbody>";for (var i in result) {output +="<tr><td>" +result[i].date +"</td><td>" +result[i].open +"</td><td>" +result[i].close +"</td><td>" +result[i].high +"</td><td>" +result[i].low +"</td><td>" +result[i].change +"</td><td>" +result[i].changePercent +"</td><td>" +result[i].volume +"</td></tr>";}output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});