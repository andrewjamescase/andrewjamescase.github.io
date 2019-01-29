$("#retrieve-company-portfolio-BankofAmerica").click(function() {var displayResources = $("#display-company-portfolioBankofAmerica"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BAC/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-BauschHealthCompany").click(function() {var displayResources = $("#display-company-portfolioBauschHealthCompany"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/BHC/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-CaraTherapeutics").click(function() {var displayResources = $("#display-company-portfolioCaraTherapeutics"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/CARA/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Discover").click(function() {var displayResources = $("#display-company-portfolioDiscover"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/DFS/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Entegris").click(function() {var displayResources = $("#display-company-portfolioEntegris"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ENTG/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-ElectroScientificIndustries").click(function() {var displayResources = $("#display-company-portfolioElectroScientificIndustries"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ESIO/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-ETSY").click(function() {var displayResources = $("#display-company-portfolioETSY"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ETSY/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-FifthThird").click(function() {var displayResources = $("#display-company-portfolioFifthThird"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/FITB/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-GeneralMotors").click(function() {var displayResources = $("#display-company-portfolioGeneralMotors"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/GM/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Humana").click(function() {var displayResources = $("#display-company-portfolioHumana"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/HUM/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Intel").click(function() {var displayResources = $("#display-company-portfolioIntel"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/INTC/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Oracle").click(function() {var displayResources = $("#display-company-portfolioOracle"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ORCL/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-PfizerInc").click(function() {var displayResources = $("#display-company-portfolioPfizerInc"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/PFE/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-RossStores").click(function() {var displayResources = $("#display-company-portfolioRossStores"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/ROST/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});


$("#retrieve-company-portfolio-Weibocorporation").click(function() {var displayResources = $("#display-company-portfolioWeibocorporation"); +displayResources.text("Loading data from JSON source...");$.ajax({type: "GET",url: "https://api.iextrading.com/1.0/stock/WB/company",success: function(result) {console.log(result);var output ="<table><thead><tr><th>symbol</th><th>companyName</th><th>exchange</th><th>industry</th><th>website</th><th>description</th><th>CEO</th><th>issuetype</th><th>sector</th><th>tags</th></thead><tbody>";output +="<tr><td>" +result.symbol+"</td><td>" +result.companyName+"</td><td>" +result.exchange +"</td><td>" +result.industry+"</td><td>" +result.website+"</td><td>" +result.description+"</td><td>" +result.CEO+"</td><td>" +result.issueType+"</td><td>" +result.sector+"</td></tr>";output += "</tbody></table>";displayResources.html(output);$("table").addClass("table");}});});