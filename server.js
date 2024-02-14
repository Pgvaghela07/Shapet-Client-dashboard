const express = require('express')
const path = require('path');
const app = express()


app.set('view engine', 'ejs');

// ------------------ For Homepages ----------------
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/public/css", express.static(__dirname + '/public/css'));
app.use("/public/flags", express.static(__dirname + '/public/flags'));
app.use("/public/images", express.static(__dirname + '/public/images'));
app.use("/public/js", express.static(__dirname + '/public/js'));
app.use("/public/js/custom", express.static(__dirname + '/public/js/custom'));
app.use("/public/fonts", express.static(__dirname + '/public/fonts'));
app.use("/public/webfonts", express.static(__dirname + '/public/webfonts'));
app.use("/public/plugins", express.static(__dirname + '/public/plugins'));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/pages/chart1.html")
   });
app.get("/chart1", function(req, res){
    res.sendFile(__dirname + "/views/pages/chart1.html")
   });
app.get("/chart2", function(req, res){
    res.sendFile(__dirname + "/views/pages/chart2.html")
   });
app.get("/machine-health.html", function(req, res){
    res.sendFile(__dirname + "/views/pages/machine-health.html");
   });
app.get("/historical-data.html", function(req, res){
    res.sendFile(__dirname + "/views/pages/historical-data.html")
   });
app.get("/systemhealth", function(req, res){
    res.sendFile(__dirname + "/views/pages/systemhealth.html")
   });
app.get("/notification", function(req, res){
    res.sendFile(__dirname + "/views/pages/notification.html")
   });
app.get("/energyconsumption", function(req, res){
    res.sendFile(__dirname + "/views/pages/energyconsumption.html")
   });
app.get("/machine-utilization", function(req, res){
    res.sendFile(__dirname + "/views/pages/machine-utilization.html")
   });
app.get("/generate-report", function(req, res){
    res.sendFile(__dirname + "/views/pages/generate-report.html")
   });
app.get("/real-alert", function(req, res){
    res.sendFile(__dirname + "/views/pages/chart1.html")
   });



app.listen(3000);
console.log('Server is listening on port 3000');
