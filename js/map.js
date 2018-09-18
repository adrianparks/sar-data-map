function submitCoords() {

       var latitude = document.getElementById("lat").value
       var longitude = document.getElementById("long").value
       var label = document.getElementById("label").value

   	L.marker([latitude,longitude]).addTo(mymap)
   		.bindPopup("<b>" + label + "</b><br />" + longitude + "," + latitude).openPopup();
}

function toggleCoverageArea(track) {

       var trackCheck = "track" + track;
       var checkBox = document.getElementById(trackCheck);
       var loc = areas[track];
       
       if (checkBox.checked == true){
           areaPolygons[track] = L.polygon(loc);
           areaPolygons[track].addTo(mymap).bindPopup("Track " + track + " search area");
       } else {
           areaPolygons[track].removeFrom(mymap);
       }
}

function toggleSearchArea(volc) {

       var checkBox = document.getElementById(volc);
       var volcLoc = searchAreas[volc];
       
       if (checkBox.checked == true){
           volcPolygons[volc] = L.polygon(volcLoc);
           volcPolygons[volc].addTo(mymap).bindPopup(volc + " area of interest");
       } else {
           volcPolygons[volc].removeFrom(mymap);
       }
}

function toggleTrackCoverageArea(track) {

       var covCheck = "cov" + track;
       var checkBox = document.getElementById(covCheck);
       var trackImages = [track + "N",track + "M",track + "S"]
       console.log(trackImages)

       if (checkBox.checked == true){
           for (i = 0; i < trackImages.length; i++) { 
              var image = trackImages[i];
              console.log(image)
              var imageLoc = trackCoverage[image];
              trackPolygons[image] = L.polygon(imageLoc);
              trackPolygons[image].addTo(mymap)
           }
            
       } else {
           console.log("Unticked " + track);
           for (i = 0; i < trackImages.length; i++) { 
              var image = trackImages[i];
              trackPolygons[image].removeFrom(mymap);
           }
       }
}


function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent(e.latlng.toString())
		.openOn(mymap);
}

// Coordinates for the areas we search for images on, for any particular
// track on the Copernicus hub

var areas = {};
areas['9'] = [[63.39,-20.5],[63.39,-16.6],[66.54,-16.6],[66.54,-20.5]];
areas['16'] = [[63.39,-24.1],[63.39,-18.5],[66.47,-18.5],[66.47,-24.1]];
areas['111'] = [[63.39,-19.5],[63.39,-13.5],[66.54,-13.5],[66.54,-19.5]];
areas['118'] = [[63.39,-22.0],[63.39,-14.0],[66.47,-14.0],[66.47,-22.0]];
areas['147'] = [[63.75,-17.3],[63.75,-16.3],[66.54,-16.3],[66.54,-17.3]];
areas['155'] = [[63.7,-24.1],[63.7,-20.3],[66.47,-20.3],[66.47,-24.1]];


// Coordinates for the areas of interest - these are the areas we include
// in the image processing

var searchAreas = {};
searchAreas['Askja'] = [[64.96,-16.95],[65.13,-16.95],[65.13,-16.50],[64.96,-16.50]];
searchAreas['Eyja'] = [[63.52,-20.00],[63.72,-20.00],[63.72,-19.45],[63.45,-19.45]];
searchAreas['Grimsvotn'] = [[64.38,-17.45],[64.47,-17.45],[64.47,-17.17],[64.38,-17.17]];
searchAreas['Hekla'] = [[63.92,-19.75],[64.00,-19.85],[64.06,-19.55],[64.00,-19.45]];
searchAreas['Holuhraun'] = [[64.82,-16.90],[64.95,-16.90],[64.95,-16.50],[64.82,-16.50]];
searchAreas['Katla'] = [[63.45,-19.45],[63.82,-19.45],[63.82,-18.70],[63.38,-18.70],[63.38,-19.10]];
searchAreas['Krafla'] = [[65.60,-16.98],[65.77,-16.90],[65.77,-16.60],[65.60,-16.60]];
searchAreas['Krisuvik'] = [[63.88,-22.15],[63.94,-22.15],[63.94,-22.00],[63.88,-22.00]];
searchAreas['Oraefajokull'] = [[63.85,-16.95],[64.10,-16.95],[64.10,-16.25],[64.00,-16.25],[63.85,-16.50]];
searchAreas['Reykjanes'] = [[63.79,-22.75],[63.87,-22.75],[63.87,-22.55],[63.79,-22.55]];
searchAreas['Þeistareykir'] = [[65.92,-16.90],[65.85,-16.90],[65.85,-17.05],[65.92,-17.05]];

// Coordinates of the track coverage over Iceland

var trackCoverage = {};
trackCoverage['118N'] = [[67.371796,-23.953613],[67.863426,-18.000816],[66.129463,-17.252567],[65.658020,-22.812874]];
trackCoverage['118M'] = [[65.657928,-22.812813],[66.129265,-17.254272],[64.643021,-16.673197],[64.185806,-21.937000]];
trackCoverage['118S'] = [[64.185715,-21.936977],[64.642830,-16.674635],[63.154430,-16.146009],[62.708752,-21.145411]];
trackCoverage['9N'] = [[65.574234,-15.069144],[66.032883,-20.477591],[67.806145,-19.726826],[67.327614,-13.923862]];
trackCoverage['9M'] = [[64.065895,-15.982362],[64.508675,-21.083271],[66.168625,-20.440292],[65.710457,-15.015354]];
trackCoverage['9S'] = [[62.597469,-16.742146],[63.030479,-21.597906],[64.635025,-21.019876],[64.189430,-15.884782]];
trackCoverage['16N'] = [[67.159966,-25.789627],[67.639542,-19.994373],[65.593933,-19.143673],[65.136665,-24.492598]];
trackCoverage['16M'] = [[65.263237,-24.569729],[65.721786,-19.195007],[64.117836,-18.586283],[63.673649,-23.655844]];
trackCoverage['16S'] = [[63.799568,-23.724388],[64.244789,-18.631956],[62.638958,-18.064144],[62.205868,-22.883640]];

trackCoverage['111N'] = [[64.703735,-13.534931],[65.153839,-18.767210],[66.927223,-18.052839],[66.459175,-12.453618]];
trackCoverage['111M'] = [[63.190212,-14.374984],[63.627663,-19.330770],[65.288116,-18.714428],[64.836670,-13.455451]];
trackCoverage['111S'] = [[61.770397,-15.100785],[62.197803,-19.824457],[63.755127,-19.284733],[63.316647,-14.306708]];

trackCoverage['147N'] = [[68.033432,-20.306084],[68.531250,-14.222633],[66.544800,-13.350828],[66.071472,-18.960833]];
trackCoverage['147M'] = [[66.200119,-19.019754],[66.673393,-13.390676],[65.069565,-12.752210],[64.612488,-18.049068]];
trackCoverage['147S'] = [[64.738586,-18.128628],[65.197220,-12.804549],[63.592636,-12.212057],[63.147697,-17.240082]];

trackCoverage['155N'] = [[64.790718,-19.663605],[65.241219,-24.911037],[66.899986,-24.242214],[66.432671,-18.650854]];
trackCoverage['155M'] = [[63.326870,-20.483105],[63.764858,-25.460030],[65.368240,-24.862144],[64.916588,-19.590130]];



var areaPolygons = {};
var volcPolygons = {};
var trackPolygons = {};

var mymap = L.map('mapid').setView([63.92, -19.85], 8);
var score = 0;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox.streets'
}).addTo(mymap);

// L.marker([63.6304,-19.6067]).addTo(mymap)
//	.bindPopup("<b>Eyjafjallajökull</b><br />63.6304,-19.6067").openPopup();

/*	L.circle([64.605, -18.44], 500, {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");
*/

var popup = L.popup();


mymap.on('click', onMapClick);

