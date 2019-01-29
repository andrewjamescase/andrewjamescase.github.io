$("#retrieve-financials-portfolio-BankofAmerica").click(function(){var displayResources = $("#display-financials-portfolio-BankofAmerica");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/BAC/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-BauschHealthCompany").click(function(){var displayResources = $("#display-financials-portfolio-BauschHealthCompany");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/BHC/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-CaraTherapeutics").click(function(){var displayResources = $("#display-financials-portfolio-CaraTherapeutics");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/CARA/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Discover").click(function(){var displayResources = $("#display-financials-portfolio-Discover");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/DFS/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Entegris").click(function(){var displayResources = $("#display-financials-portfolio-Entegris");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/ENTG/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-ElectroScientificIndustries").click(function(){var displayResources = $("#display-financials-portfolio-ElectroScientificIndustries");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/ESIO/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-ETSY").click(function(){var displayResources = $("#display-financials-portfolio-ETSY");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/ETSY/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-FifthThird").click(function(){var displayResources = $("#display-financials-portfolio-FifthThird");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/FITB/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-GeneralMotors").click(function(){var displayResources = $("#display-financials-portfolio-GeneralMotors");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/GM/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Humana").click(function(){var displayResources = $("#display-financials-portfolio-Humana");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/HUM/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Intel").click(function(){var displayResources = $("#display-financials-portfolio-Intel");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/INTC/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Oracle").click(function(){var displayResources = $("#display-financials-portfolio-Oracle");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/ORCL/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-PfizerInc").click(function(){var displayResources = $("#display-financials-portfolio-PfizerInc");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/PFE/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-RossStores").click(function(){var displayResources = $("#display-financials-portfolio-RossStores");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/ROST/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});


$("#retrieve-financials-portfolio-Weibocorporation").click(function(){var displayResources = $("#display-financials-portfolio-Weibocorporation");+displayResources.text("Loading data from JSON source...");$.getJSON("https://api.iextrading.com/1.0/stock/WB/financials?period=annual", function (data) {var mdata ="<table><thead><tr><th>symbol</th><th>reportDate</th><th>grossProfit</th><th>costOfRevenue</th><th>operatingRevenue</th><th>totalRevenue</th><th>operatingIncome</th><th>netIncome</th><th>researchAndDevelopment</th><th>operatingExpense</th><th>currentAssets</th><th>totalAssets</th><th>totalLiabilities</th><th>currentCash</th><th>currentDebt</th><th>totalCash</th><th>totalDebt</th><th>shareholderEquity</th><th>cashChange</th><th>cashFlow</th><th>operatingGainsLosses</th></thead><tbody>";$.each(data['financials'], function (key, value) {mdata += '<tr>';mdata += '<td>'+data.symbol + '</td>';mdata += '<td>'+value.reportDate + '</td>';mdata += '<td>'+value.grossProfit + '</td>';mdata += '<td>'+value.costOfRevenue + '</td>';mdata += '<td>'+value.operatingRevenue + '</td>';mdata += '<td>'+value.totalRevenue + '</td>';mdata += '<td>'+value.operatingIncome + '</td>';mdata += '<td>'+value.netIncome + '</td>';mdata += '<td>'+value.researchAndDevelopment + '</td>';mdata += '<td>'+value.operatingExpense + '</td>';mdata += '<td>'+value.currentAssets + '</td>';mdata += '<td>'+value.totalAssets + '</td>';mdata += '<td>'+value.totalLiabilities + '</td>';mdata += '<td>'+value.currentCash + '</td>';mdata += '<td>'+value.currentDebt + '</td>';mdata += '<td>'+value.totalCash + '</td>';mdata += '<td>'+value.totalDebt + '</td>';mdata += '<td>'+value.shareholderEquity + '</td>';mdata += '<td>'+value.cashChange + '</td>';mdata += '<td>'+value.cashFlow + '</td>';mdata += '<td>'+value.operatingGainsLosses + '</td>';mdata += '</tr>';});mdata += "</tbody></table>";displayResources.html(mdata);$("table").addClass("table");});});
