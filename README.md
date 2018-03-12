NO REGRETS APP

Developed By: Austin Matteson, Dawn Aldrich, Josiah Green, and Peter Kim.

This app utilizes the Yelp Fusion API and King Counties Food Establishment Inspection Data. Users can search any restaurant in the Seattle area based on Yelps data. If a restaurant exists in the King County area it will append all health records to the results. Users are able to create and update reviews of the app itself, however, reviewing actual restaurants must be written directly on Yelp as per the user agreement. The app has an additional page called “Don’t Go List” that is constantly checking for the worst restaurants in the area and lists them in a descending order which is made possible through the King County Health API. 

Getting Started: 
Users need to install required packages specified in package.json including express, postgress, pageJS, and bodyparser.

Architecture:
This app is built based on Javascript using node for server side. It uses Postgres for db.

Change Log: 
3-5-2018: New users can be added, updated and deleted. 
3–6-2018: Populates data from the KC API. Base styling complete
3–7-2018: Added successful navigation of the Yelp Fusion API
3–8-2018: Mobile functionality ready
3-9-2018: Desktop Ready

CSS reset code by:
https://meyerweb.com/eric/tools/css/reset/

Search functionality powered by Yelp Fusion: 
https://www.yelp.com/developers/documentation/v3

King County - Food Establishment Inspection Data:
https://data.kingcounty.gov/Health/Food-Establishment-Inspection-Data/f29f-zza5

ChartJS:
http://www.chartjs.org/docs/latest/getting-started/installation.html

Special thanks: 
To Allie, Vinicio, Kat, Jeff, Shannon and Nicholas. Thanks for helping us get through this course and especially this final project!