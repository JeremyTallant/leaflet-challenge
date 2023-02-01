# Leaflet Challenge

![1-Logo](https://user-images.githubusercontent.com/112406455/213352302-7e8b28e7-f59b-44a2-b791-8ba2b545095a.png)

## Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Deployment
Link: https://jeremytallant.github.io/leaflet-challenge/

## Instructions
The instructions for this activity are broken into two parts:

* Part 1: Create the Earthquake Visualization

* Part 2: Gather and Plot More Data

## Part 1: Create the Earthquake Visualization

![image](https://user-images.githubusercontent.com/112406455/211964430-f40e7e53-51e9-4739-91d0-890cc084ac98.png)

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps:

    * The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:
    ![image](https://user-images.githubusercontent.com/112406455/211963549-941d9a21-c3e8-49fa-8bf9-2920606e6633.png)
    * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
    ![image](https://user-images.githubusercontent.com/112406455/211963665-fd72e5c6-01f0-4636-bbd6-2934a6b3a6b8.png)
  
2. Import and visualize the data by doing the following:

    * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

        * Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

        * **Hint**: The depth of the earth can be found as the third coordinate for each earthquake.
        
    * Include popups that provide additional information about the earthquake when its associated marker is clicked.

    * Create a legend that will provide context for your map data.

    * Your visualization should look something like the preceding map.

## Part 2: Gather and Plot More Data
Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. You will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at [https://github.com/fraxen/tectonicplates](https://github.com/fraxen/tectonicplates).

The following image is an example screenshot of what you should produce:

![image](https://user-images.githubusercontent.com/112406455/211966598-580fa95d-a45a-4f66-ae53-78bd38957ad1.png)

Perform the following tasks:

  * Plot the tectonic plates dataset on the map in addition to the earthquakes.

  * Add other base maps to choose from.

  * Put each dataset into separate overlays that can be turned on and off independently.

  * Add layer controls to your map.
  
## File Organization and Structure
* Located in the parent directory are three folders and the [index.html](https://github.com/tallantj95/leaflet-challenge/blob/main/index.html) file
* The [Leaflet-Part-1](https://github.com/tallantj95/leaflet-challenge/tree/main/Leaflet-Part-1) folder contains a [js](https://github.com/tallantj95/leaflet-challenge/tree/main/Leaflet-Part-1/js) folder that houses the [config.js](https://github.com/tallantj95/leaflet-challenge/blob/main/Leaflet-Part-1/js/config.js) and the [logic.js](https://github.com/tallantj95/leaflet-challenge/blob/main/Leaflet-Part-1/js/logic.js) files for part one of the challenge
* The [Leaflet-Part-2](https://github.com/tallantj95/leaflet-challenge/tree/main/Leaflet-Part-2) folder contains a [js](https://github.com/tallantj95/leaflet-challenge/tree/main/Leaflet-Part-2/js) folder that houses the [logic2.js](https://github.com/tallantj95/leaflet-challenge/blob/main/Leaflet-Part-2/js/logic2.js) file for part two of the challenge
* The [css](https://github.com/tallantj95/leaflet-challenge/tree/main/css) folder contains the [style.css](https://github.com/tallantj95/leaflet-challenge/blob/main/css/style.css) file for styling of the map

## References
Dataset created by [the United States Geological Survey]()

© 2023 edX Boot Camps LLC
