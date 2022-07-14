mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9tY2luZG9yIiwiYSI6ImNqemppMjBuOTA5ZXEzYnJ0MDAyb3NxZnMifQ.TBesYQPZPQv94LtuXZyNTA";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [16.463013, 44.516093],
  zoom: 6,
});

var layerList = document.getElementById("menu");

var inputs = layerList.getElementsByTagName("input");

function switchLayer(layer) {
  var layerId = layer.target.id;
  map.setStyle("mapbox://styles/mapbox/" + layerId);
}

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

// Pretvara pointove[geoJson format] u polygone[novi geoJson format] i taj novi geoJson format vise nema features-e iz pointsa
var points = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.751194, 45.213348] },
      properties: { site: "baderna", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.676442, 45.212489] },
      properties: { site: "filipini", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.670276, 45.164543] },
      properties: { site: "flengi", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.773581, 45.083114] },
      properties: { site: "golas", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.846768, 45.118054] },
      properties: { site: "kanfanar", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.836191, 45.111261] },
      properties: { site: "kanfanartdr", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.623983, 45.102217] },
      properties: { site: "pcrovvaldalis", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.624466, 45.059316] },
      properties: { site: "rovcrveniotok", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.645421, 45.075269] },
      properties: { site: "rovmobilija", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.648629, 45.09542] },
      properties: { site: "rovmoncenestre", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.626795, 45.110548] },
      properties: { site: "rovmontelongo", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.640865, 45.068133] },
      properties: { site: "rovmonviacs", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.639148, 45.074428] },
      properties: { site: "rovmulin", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.685488, 45.072074] },
      properties: { site: "rovvaltida", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.774129, 45.199432] },
      properties: { site: "rusnjak", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.740637, 45.12507] },
      properties: { site: "svetimartin", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.722575, 45.228078] },
      properties: { site: "zenodraga", cluster: 1 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.55458, 45.388243] },
      properties: { site: "babici", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.632998, 45.377347] },
      properties: { site: "brtonigla", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.558888, 45.486662] },
      properties: { site: "crvenivrht2", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.689453, 45.310069] },
      properties: { site: "diklici", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.618161, 45.346943] },
      properties: { site: "istralandaqua", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.567052, 45.484441] },
      properties: { site: "kanegrakamp", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.567882, 45.361109] },
      properties: { site: "karigador", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.548861, 45.342207] },
      properties: { site: "maredakamp", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.620226, 45.457839] },
      properties: { site: "markovac", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.613797, 45.41491] },
      properties: { site: "matelici", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.654213, 45.322635] },
      properties: { site: "mirna", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.560567, 45.317283] },
      properties: { site: "novcentar", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.572931, 45.316097] },
      properties: { site: "novmaestral", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.599991, 45.234715] },
      properties: { site: "pcpohotelzg", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.607209, 45.224401] },
      properties: { site: "pcporecsd", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.605652, 45.198608] },
      properties: { site: "porecaqua", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.606823, 45.271108] },
      properties: { site: "poreccervar", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.586157, 45.195849] },
      properties: { site: "porecdelfin", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.599042, 45.213834] },
      properties: { site: "porecdiamant", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.586607, 45.223958] },
      properties: { site: "porecfortuna", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.604716, 45.230165] },
      properties: { site: "poreclacop", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.578004, 45.295814] },
      properties: { site: "poreclanterna", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.595184, 45.248009] },
      properties: { site: "porecmaterada", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.592612, 45.227281] },
      properties: { site: "porecneptun", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.597527, 45.236628] },
      properties: { site: "porecpical", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.605811, 45.223384] },
      properties: { site: "porecstadion", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.625355, 45.300083] },
      properties: { site: "porectar", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.599969, 45.226372] },
      properties: { site: "porectkc", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.592323, 45.200271] },
      properties: { site: "porecvista", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.528149, 45.497778] },
      properties: { site: "savudrijakemp", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.491498, 45.489813] },
      properties: { site: "savudrijasvj", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.5113, 45.441292] },
      properties: { site: "umadriatic", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.521255, 45.463917] },
      properties: { site: "umkatpraonica", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.514623, 45.459836] },
      properties: { site: "umkoralj", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.519542, 45.44777] },
      properties: { site: "umstellamaris", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.522733, 45.431767] },
      properties: { site: "umtkc", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.542449, 45.447821] },
      properties: { site: "umungarija", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.620422, 45.227386] },
      properties: { site: "varvari", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.723347, 45.277247] },
      properties: { site: "visnjan", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.601461, 45.1712] },
      properties: { site: "vrsarfuntana", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.606847, 45.151162] },
      properties: { site: "vrsarkastel", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.600978, 45.147761] },
      properties: { site: "vrsarpineta", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.612332, 45.144687] },
      properties: { site: "vrsarvodt2", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.61095, 45.1446] },
      properties: { site: "vrsarvodt2", cluster: 2 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.747731, 45.002193] },
      properties: { site: "barbariga", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.025039, 44.924252] },
      properties: { site: "dugauvala", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.816662, 44.92611] },
      properties: { site: "fazana", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.803276, 45.039406] },
      properties: { site: "forke", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.889798, 44.931109] },
      properties: { site: "galizana", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.921596, 44.925717] },
      properties: { site: "glavica", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.872558, 45.019709] },
      properties: { site: "jursici", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.848301, 44.867901] },
      properties: { site: "mcpuflanat", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.941903, 44.811561] },
      properties: { site: "medulin", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.984243, 44.95921] },
      properties: { site: "mutvoran", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.85666, 44.953047] },
      properties: { site: "pcvodnjaninfo", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.856661, 44.953048] },
      properties: { site: "pcvodnjaninfo", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.890893, 44.75789] },
      properties: { site: "porersvj", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.910286, 44.801364] },
      properties: { site: "premantura", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.922838, 44.897165] },
      properties: { site: "puaerodrom", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.84858, 44.871729] },
      properties: { site: "pudz", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.814066, 44.855744] },
      properties: { site: "pukampstoja", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.85711, 44.865965] },
      properties: { site: "pukbc", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.852137, 44.86848] },
      properties: { site: "pumletacka", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.866818, 44.859375] },
      properties: { site: "pumontemagno", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.844834, 44.863448] },
      properties: { site: "pumontezaro", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.857574, 44.873178] },
      properties: { site: "pumonvidal", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.850211, 44.875588] },
      properties: { site: "pupunta", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.865286, 44.876198] },
      properties: { site: "pusijana", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.850657, 44.862085] },
      properties: { site: "pustadion", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.844742, 44.867416] },
      properties: { site: "putkc", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.839549, 44.859444] },
      properties: { site: "putomassini", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.85063, 44.86536] },
      properties: { site: "putrgrep", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.849363, 44.894055] },
      properties: { site: "puvelivrhhrt", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.83095, 44.857979] },
      properties: { site: "puveruda", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.839182, 44.83614] },
      properties: { site: "puverudela", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.829817, 44.836387] },
      properties: { site: "puverudelap", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.846603, 44.852162] },
      properties: { site: "puvidikovac", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.727473, 45.022281] },
      properties: { site: "sanpolo", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.989493, 44.930648] },
      properties: { site: "segotici", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.908952, 44.857418] },
      properties: { site: "sikici", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.819818, 44.897498] },
      properties: { site: "stinjan", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.762138, 44.913798] },
      properties: { site: "teget", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.865839, 44.831854] },
      properties: { site: "vinkuran", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.851371, 44.961084] },
      properties: { site: "vodnjan", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.872699, 44.951613] },
      properties: { site: "vodnjancvorj", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.941823, 44.830495] },
      properties: { site: "vrcevan", cluster: 3 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.88949, 45.24897] },
      properties: { site: "beram", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.664427, 45.406937] },
      properties: { site: "buje", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.917892, 45.338573] },
      properties: { site: "butonigaiv", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.969859, 45.406975] },
      properties: { site: "buzet", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.964341, 45.407645] },
      properties: { site: "buzetht", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.758147, 45.419008] },
      properties: { site: "buzleti", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.012893, 45.282993] },
      properties: { site: "cerovlje", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.009297, 45.398072] },
      properties: { site: "cunj", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.697098, 45.338223] },
      properties: { site: "gradole", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.720421, 45.386458] },
      properties: { site: "groznjanroman", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.943192, 45.391506] },
      properties: { site: "hrib", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.88349, 45.377045] },
      properties: { site: "istarsketopl", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.851863, 45.227191] },
      properties: { site: "jezenj", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.812808, 45.293185] },
      properties: { site: "karojba", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.955143, 45.119681] },
      properties: { site: "klimni", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.690808, 45.384179] },
      properties: { site: "krasica", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.977345, 45.025032] },
      properties: { site: "kuici", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.859341, 45.276084] },
      properties: { site: "martinci", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.065634, 45.121348] },
      properties: { site: "martinski", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.026431, 45.193301] },
      properties: { site: "medigi", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.694796, 45.443984] },
      properties: { site: "merisce", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.041376, 45.066137] },
      properties: { site: "mostrasa", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.82843, 45.336387] },
      properties: { site: "motovun", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.891474, 45.186808] },
      properties: { site: "parizi", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.938156, 45.240659] },
      properties: { site: "pazintkc", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.027597, 45.053466] },
      properties: { site: "puntera", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.091232, 45.082958] },
      properties: { site: "rasa", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.077405, 45.334149] },
      properties: { site: "rebri", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.909566, 45.435328] },
      properties: { site: "salez", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.120757, 45.244188] },
      properties: { site: "susnjevica", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.829922, 45.371722] },
      properties: { site: "svetajelena", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.881286, 45.087585] },
      properties: { site: "svetivincenat", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.203534, 45.287665] },
      properties: { site: "ucka", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.943172, 45.227702] },
      properties: { site: "velanovbreg", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.76022, 45.318255] },
      properties: { site: "vizinada", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.026775, 45.4544] },
      properties: { site: "zbevnica", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [13.903319, 45.15772] },
      properties: { site: "zminj", cluster: 4 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.738055, 45.876039] },
      properties: { site: "brdovec", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.693955, 45.840106] },
      properties: { site: "breganax", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.798608, 45.787695] },
      properties: { site: "brezjeac", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.7525, 45.81841] },
      properties: { site: "domaslovec", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.735423, 45.954668] },
      properties: { site: "dubravica", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.766244, 45.924001] },
      properties: { site: "gornjapusca", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.793027, 45.804047] },
      properties: { site: "hotoville", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.848951, 45.946656] },
      properties: { site: "jakovlje", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.690425, 45.886955] },
      properties: { site: "kljucbrdovec", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.812026, 45.926563] },
      properties: { site: "kupljenovo", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.720362, 45.905359] },
      properties: { site: "marijagorica", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.882346, 45.895583] },
      properties: { site: "poljanibistra", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.829085, 45.787325] },
      properties: { site: "rakitje", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.818488, 45.793565] },
      properties: { site: "rakitjeprimark", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.826991, 45.810933] },
      properties: { site: "rakitjesjever", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.707371, 45.820267] },
      properties: { site: "samoborhelena", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.712021, 45.80451] },
      properties: { site: "samoborht", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.721939, 45.797447] },
      properties: { site: "samoborzp", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.72457, 45.802946] },
      properties: { site: "samoborka", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.725029, 45.863976] },
      properties: { site: "savskimarof", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.789302, 45.809877] },
      properties: { site: "strmec", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.775552, 45.796312] },
      properties: { site: "svnedjelja", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.76524, 45.79892] },
      properties: { site: "svnedjeljazap", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.826541, 45.87088] },
      properties: { site: "zaprestrgcent", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.830966, 45.87477] },
      properties: { site: "zapresicauto", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.802557, 45.858301] },
      properties: { site: "zapresiccentar", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.79906, 45.864129] },
      properties: { site: "zapresicstadi", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.819669, 45.840678] },
      properties: { site: "zapresiczaob", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.776358, 45.861586] },
      properties: { site: "zapresiczapad", cluster: 5 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.899499, 45.797571] },
      properties: { site: "cantunovic", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.884402, 45.799533] },
      properties: { site: "citycentarone", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.874893, 45.815785] },
      properties: { site: "gajnice", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.905588, 45.830374] },
      properties: { site: "gornjevrapce", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.886213, 45.813124] },
      properties: { site: "gospodska", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.878491, 45.799138] },
      properties: { site: "holiday", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.872294, 45.805934] },
      properties: { site: "jankomiratlan", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.86172, 45.797709] },
      properties: { site: "jankomirkika", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.84895, 45.791334] },
      properties: { site: "jezdovecpetlja", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.862732, 45.82573] },
      properties: { site: "lisicina", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.893226, 45.757687] },
      properties: { site: "lucko", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.894386, 45.807626] },
      properties: { site: "malesnica", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.90123, 45.808382] },
      properties: { site: "malesnicaistok", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.894895, 45.791254] },
      properties: { site: "paljetkova", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.899588, 45.797498] },
      properties: { site: "pccantunovic", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.88597, 45.799422] },
      properties: { site: "pccitycenone", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.860293, 45.797756] },
      properties: { site: "pcjankomirem", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.854901, 45.796789] },
      properties: { site: "pckingcross", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.893509, 45.797852] },
      properties: { site: "pckonzum1", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.863754, 45.811262] },
      properties: { site: "pcsamoborskaz", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.894225, 45.829681] },
      properties: { site: "perjavica", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.846135, 45.815921] },
      properties: { site: "podsused", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.838843, 45.822165] },
      properties: { site: "podsuseddolje", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.855435, 45.807295] },
      properties: { site: "podsusedtrius", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.904705, 45.795784] },
      properties: { site: "precko", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.864696, 45.811283] },
      properties: { site: "samoborskaz", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.859446, 45.803764] },
      properties: { site: "solidum", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.895336, 45.803515] },
      properties: { site: "spansko", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.855831, 45.815462] },
      properties: { site: "strojopromet", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.903868, 45.800488] },
      properties: { site: "tenchinijeva", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.887729, 45.817818] },
      properties: { site: "vrapceht", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.900438, 45.816729] },
      properties: { site: "vrapcekpb", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.8793, 45.774505] },
      properties: { site: "zgplitvicehup", cluster: 6 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.929349, 45.814922] },
      properties: { site: "ciglana", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.944622, 45.811819] },
      properties: { site: "crnomerec", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.923164, 45.812129] },
      properties: { site: "donjakustosija", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.931917, 45.794584] },
      properties: { site: "drvinje", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.932911, 45.801729] },
      properties: { site: "fallerovo", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.930554, 45.833151] },
      properties: { site: "fraterscica", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.919771, 45.824043] },
      properties: { site: "graberje", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.94365, 45.783303] },
      properties: { site: "gredice", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.927894, 45.787014] },
      properties: { site: "jarunck", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.91364, 45.785239] },
      properties: { site: "jarundoo", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.93474, 45.786659] },
      properties: { site: "jarunvukasova", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.934741, 45.78666] },
      properties: { site: "jarunvukasova", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.946363, 45.788554] },
      properties: { site: "knezija", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.937505, 45.796428] },
      properties: { site: "ljubljanicazet", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.910069, 45.800474] },
      properties: { site: "oranice", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.940643, 45.811636] },
      properties: { site: "pclaubazg", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.936073, 45.810764] },
      properties: { site: "pcplivazg", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.911912, 45.796788] },
      properties: { site: "pcskyoffice", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.913616, 45.790988] },
      properties: { site: "pcvrbanicenta", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.91112, 45.795651] },
      properties: { site: "pcvrbanizapad", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.945896, 45.793632] },
      properties: { site: "pczadarska", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.937402, 45.81177] },
      properties: { site: "pliva", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.911417, 45.805043] },
      properties: { site: "rudes", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.942799, 45.8045] },
      properties: { site: "selskasigma", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.90788, 45.797225] },
      properties: { site: "spanskopos", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.925818, 45.792132] },
      properties: { site: "staglisce", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.940997, 45.82198] },
      properties: { site: "svetiduh", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.941684, 45.816135] },
      properties: { site: "svetiduhcrkva", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.93857, 45.819985] },
      properties: { site: "svetiduhob", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.943025, 45.7973] },
      properties: { site: "tresnjevka", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.938136, 45.832432] },
      properties: { site: "trsje", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.933791, 45.805123] },
      properties: { site: "voltino", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.915433, 45.791856] },
      properties: { site: "vrbanihorvacan", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.91697, 45.79508] },
      properties: { site: "vrbanijadran", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.923197, 45.805534] },
      properties: { site: "zagrebacka", cluster: 7 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.960044, 45.799561] },
      properties: { site: "andrasecova", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.963618, 45.812092] },
      properties: { site: "britanskitrg", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.968081, 45.810506] },
      properties: { site: "dezeliceva", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.947102, 45.803322] },
      properties: { site: "ericsson", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.97477, 45.792741] },
      properties: { site: "hrtdom", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.9562, 45.798936] },
      properties: { site: "janaf", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.961527, 45.809464] },
      properties: { site: "klaiceva", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.950159, 45.808335] },
      properties: { site: "magazinska", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.953011, 45.793771] },
      properties: { site: "omiska", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.960084, 45.820544] },
      properties: { site: "pantovcakcrkva", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.96405, 45.807328] },
      properties: { site: "pbf", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.963567, 45.803148] },
      properties: { site: "pccibonatoran", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.963661, 45.801942] },
      properties: { site: "pchoto", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974513, 45.792735] },
      properties: { site: "pchrtdom", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.969721, 45.79381] },
      properties: { site: "pchypo", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.969358, 45.7907] },
      properties: { site: "pckockica", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.966358, 45.806868] },
      properties: { site: "pcopera", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.952223, 45.805619] },
      properties: { site: "pcpanorama", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.959789, 45.793678] },
      properties: { site: "pcvjesnik", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.962519, 45.79837] },
      properties: { site: "pczagrepcanka", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.957726, 45.812915] },
      properties: { site: "republikeaus", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.958842, 45.79473] },
      properties: { site: "savskatica", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.96843, 45.806139] },
      properties: { site: "savskavatro", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.96071, 45.797864] },
      properties: { site: "savskazaba", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.961855, 45.803109] },
      properties: { site: "tratinska", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.948001, 45.798672] },
      properties: { site: "tresnjevkajug", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.953425, 45.806698] },
      properties: { site: "trgsportova", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.958198, 45.788698] },
      properties: { site: "veslacka", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.95332, 45.815579] },
      properties: { site: "vinogradska", cluster: 8 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.98037, 45.809825] },
      properties: { site: "boskoviceva", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.988793, 45.805956] },
      properties: { site: "branimirova", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.981272, 45.804788] },
      properties: { site: "branimirovahp", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.971244, 45.801508] },
      properties: { site: "fer", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976759, 45.807139] },
      properties: { site: "gajeva", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.980612, 45.807502] },
      properties: { site: "hatzova", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.97336, 45.809256] },
      properties: { site: "hebrangova", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.969777, 45.797049] },
      properties: { site: "humboldtova", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974385, 45.798656] },
      properties: { site: "international", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.980342, 45.80826] },
      properties: { site: "mcpetrinjska", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.985048, 45.80588] },
      properties: { site: "pcbrancentar", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.970304, 45.799222] },
      properties: { site: "pcerstehq", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.970344, 45.798556] },
      properties: { site: "pceurotower", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.97734, 45.805074] },
      properties: { site: "pcimpcentar", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974072, 45.799172] },
      properties: { site: "pcinternationa", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.968972, 45.801042] },
      properties: { site: "pckupskahep", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977502, 45.796659] },
      properties: { site: "pcnsb", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.984626, 45.807503] },
      properties: { site: "pcsheraton", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.989409, 45.803683] },
      properties: { site: "pcstrojarvmd", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.00102, 45.7962] },
      properties: { site: "petljasavica", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.990698, 45.795843] },
      properties: { site: "pile", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976666, 45.801084] },
      properties: { site: "poglavarstvo", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.992327, 45.789801] },
      properties: { site: "ruzdjakova", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.003767, 45.787991] },
      properties: { site: "savicabp", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.987319, 45.802639] },
      properties: { site: "strojarska", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.98484, 45.799205] },
      properties: { site: "trnje", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.967322, 45.799391] },
      properties: { site: "vukovarskaz", cluster: 9 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974887, 45.811915] },
      properties: { site: "bogoviceva", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.972135, 45.817184] },
      properties: { site: "demetrova", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.983123, 45.811286] },
      properties: { site: "draskoviceva", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.971026, 45.813379] },
      properties: { site: "ilicazaba", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977845, 45.814058] },
      properties: { site: "kaptol", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977595, 45.820341] },
      properties: { site: "kaptolcentar", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977491, 45.82034] },
      properties: { site: "kaptolcentar", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.98185, 45.814249] },
      properties: { site: "langovtrg", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.979813, 45.81989] },
      properties: { site: "malascena", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.972349, 45.814717] },
      properties: { site: "markovicevtrg", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.973871, 45.811978] },
      properties: { site: "mccvjetnitrg", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.97674, 45.81276] },
      properties: { site: "mchodubrovnik", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.978554, 45.812657] },
      properties: { site: "mcjelacic1", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976263, 45.81337] },
      properties: { site: "mcjelacic2", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.981142, 45.812788] },
      properties: { site: "mcjurisiceva1", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.97517, 45.814882] },
      properties: { site: "mcklovicevi", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.975576, 45.813106] },
      properties: { site: "mcnama", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977432, 45.814728] },
      properties: { site: "mcopatovina", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976398, 45.813729] },
      properties: { site: "mctkalciceva", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976633, 45.815391] },
      properties: { site: "mctkalciceva1", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976234, 45.81759] },
      properties: { site: "mctkalciceva2", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.983369, 45.811383] },
      properties: { site: "mctrgburze", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.976971, 45.819248] },
      properties: { site: "pcacademiazg", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.980272, 45.813039] },
      properties: { site: "pcbancentar", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.973646, 45.812366] },
      properties: { site: "pccvjetprolaz", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974248, 45.818066] },
      properties: { site: "pcdemetrova", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.983031, 45.811152] },
      properties: { site: "pcdraskoviceva", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.984944, 45.813133] },
      properties: { site: "pcimpgalleria", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.982023, 45.814544] },
      properties: { site: "pclangovtrg", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977861, 45.812016] },
      properties: { site: "praska", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.974722, 45.816478] },
      properties: { site: "sabor", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.975059, 45.812921] },
      properties: { site: "statistika", cluster: 10 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.998924, 45.867296] },
      properties: { site: "bacun", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.938511, 45.847096] },
      properties: { site: "bijenik", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.012581, 45.838508] },
      properties: { site: "bukovac", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.000766, 45.841555] },
      properties: { site: "bukovackikrc", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.034894, 45.834556] },
      properties: { site: "dubravakbc", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.970258, 45.855009] },
      properties: { site: "gracani", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977387, 45.847426] },
      properties: { site: "gracanskacesta", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.015164, 45.849571] },
      properties: { site: "jazbina", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.003333, 45.826065] },
      properties: { site: "jordanovackb", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.977047, 45.831674] },
      properties: { site: "ksaver", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.967985, 45.821296] },
      properties: { site: "lovackimuzej", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.015628, 45.877127] },
      properties: { site: "markusevac", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.982522, 45.844377] },
      properties: { site: "mirogoj", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.963819, 45.846777] },
      properties: { site: "mlinovi", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.011892, 45.832495] },
      properties: { site: "oboj", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.958435, 45.841424] },
      properties: { site: "pantovcak", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.985583, 45.861662] },
      properties: { site: "pcgracanisk", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.945302, 45.89821] },
      properties: { site: "pctomislavac", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.990779, 45.814163] },
      properties: { site: "petreticevtrg", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.989075, 45.850142] },
      properties: { site: "remete", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.98459, 45.82002] },
      properties: { site: "salata", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.985866, 45.815753] },
      properties: { site: "salatasrc", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.962619, 45.858601] },
      properties: { site: "sestkraljevec", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.947932, 45.899025] },
      properties: { site: "sljeme", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.946111, 45.904124] },
      properties: { site: "sljemerefl1", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.957833, 45.901605] },
      properties: { site: "sljemetoramup", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.992749, 45.825087] },
      properties: { site: "srebrnjak", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.971833, 45.824997] },
      properties: { site: "tuskanac", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.965198, 45.877349] },
      properties: { site: "tustivrh", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.009665, 45.820349] },
      properties: { site: "valdecova", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.957302, 45.839948] },
      properties: { site: "vilazagorje", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.027302, 45.857758] },
      properties: { site: "zelenibrijeg", cluster: 11 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.01197, 45.802036] },
      properties: { site: "heinzalmeria", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.00245, 45.810596] },
      properties: { site: "heinzgrawe", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.992318, 45.807365] },
      properties: { site: "kresimirovtrg", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.998056, 45.814558] },
      properties: { site: "kvaternikovtrg", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.019162, 45.818223] },
      properties: { site: "maksimir", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.004876, 45.816721] },
      properties: { site: "maksimirska", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.012383, 45.818391] },
      properties: { site: "maksimirskaist", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.019044, 45.818152] },
      properties: { site: "mcmaksimir1", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.012344, 45.80206] },
      properties: { site: "pcalmeria", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.999256, 45.802553] },
      properties: { site: "pcbudmanijeva", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.008858, 45.802811] },
      properties: { site: "pcchromos", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.00902, 45.801801] },
      properties: { site: "pceuroherc", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.00265, 45.802398] },
      properties: { site: "pcgreengold", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.994142, 45.807196] },
      properties: { site: "pchac", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.000272, 45.803228] },
      properties: { site: "pcpbz", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.99572, 45.80432] },
      properties: { site: "pcradgrand", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.008202, 45.803518] },
      properties: { site: "pcsiemens", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.00741, 45.800961] },
      properties: { site: "pczagrebtower", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.007047, 45.80441] },
      properties: { site: "pczavrtnica", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.009938, 45.814121] },
      properties: { site: "pescenica", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.995614, 45.804637] },
      properties: { site: "radnickagrand", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.994062, 45.8121] },
      properties: { site: "subiceva", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.003417, 45.802103] },
      properties: { site: "vmdpromet", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.003313, 45.802102] },
      properties: { site: "vmdpromet", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.995775, 45.809332] },
      properties: { site: "vrbaniceva", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.995453, 45.799923] },
      properties: { site: "vukovarska", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.989647, 45.809862] },
      properties: { site: "zvonimirovapmf", cluster: 12 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.940317, 45.770932] },
      properties: { site: "arenacentar", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.916297, 45.758412] },
      properties: { site: "blatocentar", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.932006, 45.767572] },
      properties: { site: "blatozg", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.936922, 45.750174] },
      properties: { site: "botinec", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.001568, 45.768647] },
      properties: { site: "bozidaramag", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.988882, 45.758049] },
      properties: { site: "dugavejz", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.993934, 45.764484] },
      properties: { site: "dugaveprilaz", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.008406, 45.762099] },
      properties: { site: "jakusevac", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.961574, 45.783046] },
      properties: { site: "kajzerica", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.947782, 45.772112] },
      properties: { site: "laniste", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.945449, 45.758904] },
      properties: { site: "otocec", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.980412, 45.764637] },
      properties: { site: "otoknetcity", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.940213, 45.770931] },
      properties: { site: "pcarenacentar", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.944613, 45.77104] },
      properties: { site: "pcarenazg", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.979339, 45.776758] },
      properties: { site: "pcavenue", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.981726, 45.782307] },
      properties: { site: "pcbundekcen", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.988318, 45.755103] },
      properties: { site: "pcsupernovazg", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.973439, 45.778338] },
      properties: { site: "pczvp1010a", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.972654, 45.779065] },
      properties: { site: "pczvpav8", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.946367, 45.767534] },
      properties: { site: "remetinec", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.955273, 45.777844] },
      properties: { site: "savskigaj", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.978121, 45.774006] },
      properties: { site: "sigetbrodarski", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.979051, 45.778632] },
      properties: { site: "sigetina", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.982874, 45.770078] },
      properties: { site: "sopotind", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.98841, 45.77704] },
      properties: { site: "sopotmf", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.971403, 45.757381] },
      properties: { site: "svklara", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.004709, 45.773856] },
      properties: { site: "travno", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.968366, 45.767602] },
      properties: { site: "trnsko", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.96575, 45.773922] },
      properties: { site: "trnskocentar", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.993261, 45.773614] },
      properties: { site: "utrina", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.968864, 45.777792] },
      properties: { site: "velesajam", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.000555, 45.778805] },
      properties: { site: "zaprudje", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.994276, 45.782261] },
      properties: { site: "zaprudjelojeno", cluster: 13 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.028639, 45.819244] },
      properties: { site: "augustinciceva", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.028879, 45.812737] },
      properties: { site: "borongaj", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.017064, 45.781503] },
      properties: { site: "borovje", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.056994, 45.799819] },
      properties: { site: "carinarnica", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.052046, 45.819291] },
      properties: { site: "donjadubrava", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.042487, 45.831005] },
      properties: { site: "dubravacrkva", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.054359, 45.83059] },
      properties: { site: "dubravaht", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.038597, 45.823941] },
      properties: { site: "dubravaokret", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.039816, 45.796864] },
      properties: { site: "elka", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.026068, 45.799121] },
      properties: { site: "ferenscicax", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.019828, 45.806114] },
      properties: { site: "ivanicgradska", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.056545, 45.83999] },
      properties: { site: "klaka", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.03648, 45.803553] },
      properties: { site: "konzum", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.045859, 45.837866] },
      properties: { site: "mramorniprilaz", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.050491, 45.801535] },
      properties: { site: "pcccoeast", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.017052, 45.794973] },
      properties: { site: "pccvh", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.046674, 45.836725] },
      properties: { site: "pcgardenmall", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.065179, 45.800652] },
      properties: { site: "pcmandicentar", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.051678, 45.799005] },
      properties: { site: "pcsegro", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.063947, 45.821755] },
      properties: { site: "platana", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.067396, 45.828462] },
      properties: { site: "poljanice", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.022954, 45.794137] },
      properties: { site: "radnicka", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.077527, 45.801895] },
      properties: { site: "resnikht", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.029237, 45.786117] },
      properties: { site: "savicasanci", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.055618, 45.814112] },
      properties: { site: "trnava", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.065577, 45.837] },
      properties: { site: "trnovcica", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.015207, 45.810205] },
      properties: { site: "volovcica", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.064413, 45.807039] },
      properties: { site: "vukomerec", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.051392, 45.807025] },
      properties: { site: "vukomereckac", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.038265, 45.784659] },
      properties: { site: "zitnjakzep", cluster: 14 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.175122, 45.882632] },
      properties: { site: "belovar", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.99815, 45.747846] },
      properties: { site: "buzin", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.064542, 45.896045] },
      properties: { site: "cucerje", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.058509, 45.870871] },
      properties: { site: "degidovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.083689, 45.834994] },
      properties: { site: "dubec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.032828, 45.754241] },
      properties: { site: "dugaveistok", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.16037, 45.792966] },
      properties: { site: "ivanjareauto", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.129323, 45.795644] },
      properties: { site: "ivanjarekapet", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.110777, 45.804887] },
      properties: { site: "jelkovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.12699, 45.920225] },
      properties: { site: "kasinatm", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.15521, 45.831989] },
      properties: { site: "kobiljak", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.030956, 45.87986] },
      properties: { site: "markusevactrn", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.077633, 45.754744] },
      properties: { site: "micevec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.037447, 45.867312] },
      properties: { site: "mirosevec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.079922, 45.8625] },
      properties: { site: "novoselec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.108094, 45.774023] },
      properties: { site: "obrezina", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.147384, 45.795086] },
      properties: { site: "pcikeasop", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.080486, 45.741391] },
      properties: { site: "pcmzlftudjman", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.0979, 45.92068] },
      properties: { site: "planinadonja", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.06226, 45.732448] },
      properties: { site: "pleso", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.132717, 45.843102] },
      properties: { site: "popovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.138028, 45.854152] },
      properties: { site: "popovecsjever", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.082518, 45.826403] },
      properties: { site: "retkovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.106071, 45.828355] },
      properties: { site: "sesveteht", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.116148, 45.821904] },
      properties: { site: "sesvetejelkove", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.116575, 45.830376] },
      properties: { site: "sesveteselcina", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.102948, 45.814942] },
      properties: { site: "sesvetesopnica", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.132282, 45.824228] },
      properties: { site: "sesvetskasela", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.013222, 45.734855] },
      properties: { site: "velmlakazap", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.033148, 45.733327] },
      properties: { site: "velikamlaka", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.030832, 45.900268] },
      properties: { site: "vidovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.105145, 45.891349] },
      properties: { site: "vugrovec", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.061642, 45.779756] },
      properties: { site: "zitnjakmost", cluster: 15 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.826304, 45.688871] },
      properties: { site: "aspergerix", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.655726, 45.755575] },
      properties: { site: "braslovje", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.864661, 45.745904] },
      properties: { site: "dstupnikbozic", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.876747, 45.733142] },
      properties: { site: "demerje", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.714067, 45.663696] },
      properties: { site: "desinecodmor", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.759042, 45.675625] },
      properties: { site: "donjazdencina", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.533039, 45.664524] },
      properties: { site: "donjipribic", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.480176, 45.683484] },
      properties: { site: "gprekrizje", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.539652, 45.768718] },
      properties: { site: "golubici", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.593311, 45.714886] },
      properties: { site: "goricasvjana", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.690352, 45.691817] },
      properties: { site: "gornjidesinec", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.838239, 45.755405] },
      properties: { site: "gornjistupnik", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.691888, 45.752734] },
      properties: { site: "gornjiterihaji", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.644018, 45.82147] },
      properties: { site: "grdanjci", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.818621, 45.713113] },
      properties: { site: "horvati", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.67903, 45.645437] },
      properties: { site: "jaskaac", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.65331, 45.67313] },
      properties: { site: "jaskaht", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.644117, 45.661746] },
      properties: { site: "jaskajug", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.804201, 45.766088] },
      properties: { site: "kerestinec", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.743179, 45.691305] },
      properties: { site: "klincasela", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.38596, 45.724406] },
      properties: { site: "kordici", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.506912, 45.810537] },
      properties: { site: "novoselo", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.781549, 45.712878] },
      properties: { site: "pavucnjak", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.64766, 45.656264] },
      properties: { site: "pckrkajaska", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.880335, 45.748825] },
      properties: { site: "pcmercatone", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.575335, 45.668026] },
      properties: { site: "petrovina", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.635482, 45.727436] },
      properties: { site: "prilipje", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.797874, 45.737204] },
      properties: { site: "rakovpotok", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.787514, 45.730572] },
      properties: { site: "rakovpotoktm", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.569478, 45.836462] },
      properties: { site: "stojdraga", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.47738, 45.727666] },
      properties: { site: "zelezno", cluster: 16 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.817463, 45.639013] },
      properties: { site: "bratina", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.207339, 45.724478] },
      properties: { site: "bukevje", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.113715, 45.637225] },
      properties: { site: "busevec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.023702, 45.719825] },
      properties: { site: "donjalomnica", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.947483, 45.657371] },
      properties: { site: "dragonozec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.871856, 45.656696] },
      properties: { site: "hobolici", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.372067, 45.690316] },
      properties: { site: "ivanicgauto", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.405028, 45.705806] },
      properties: { site: "ivanicgsilos", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.393603, 45.706513] },
      properties: { site: "ivanicgrad", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.040957, 45.579621] },
      properties: { site: "kravarsko", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.522087, 45.667385] },
      properties: { site: "krizht", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.058893, 45.69232] },
      properties: { site: "kurilovec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.120007, 45.724292] },
      properties: { site: "lazina", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.993841, 45.725965] },
      properties: { site: "odra", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.948593, 45.714589] },
      properties: { site: "odranskiobrez", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.91813, 45.712553] },
      properties: { site: "odranskistrmec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.242272, 45.688344] },
      properties: { site: "orlex", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.878703, 45.598974] },
      properties: { site: "pisarovinacrkv", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.989074, 45.490675] },
      properties: { site: "pokupsko", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.305109, 45.647226] },
      properties: { site: "prerovec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.16036, 45.70796] },
      properties: { site: "ribnica", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.507104, 45.723534] },
      properties: { site: "sumecani", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.272957, 45.648867] },
      properties: { site: "velesevec", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.049777, 45.636112] },
      properties: { site: "velikabuna", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.054973, 45.716679] },
      properties: { site: "vgelkontakt", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.070075, 45.711067] },
      properties: { site: "vgkolarova", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.073852, 45.717807] },
      properties: { site: "vgzvonimirova", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.101399, 45.684198] },
      properties: { site: "vukovina", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.924768, 45.72408] },
      properties: { site: "zadvorsko", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.981377, 45.544597] },
      properties: { site: "zgopatija", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.456377, 45.623863] },
      properties: { site: "zuticaina", cluster: 17 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.237072, 46.029999] },
      properties: { site: "bedenica", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.30141, 45.834329] },
      properties: { site: "brckovljani", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.193902, 45.830196] },
      properties: { site: "cerje", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.522005, 45.907471] },
      properties: { site: "cugovec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.233762, 45.912651] },
      properties: { site: "donjazelina", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.536125, 45.836729] },
      properties: { site: "dubravavrbovec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.254337, 45.807458] },
      properties: { site: "dugoselo", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.22303, 45.80023] },
      properties: { site: "dugoselozapad", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.636682, 45.881257] },
      properties: { site: "farkasevec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.202145, 45.897278] },
      properties: { site: "goricica", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.477101, 45.913855] },
      properties: { site: "gradec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.57041, 45.913168] },
      properties: { site: "haganj", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.300803, 45.749737] },
      properties: { site: "jezevo", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.40559, 45.737913] },
      properties: { site: "klostarivantm", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.271271, 46.003809] },
      properties: { site: "kominx", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.24705, 45.889553] },
      properties: { site: "krizevcec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.369066, 45.875693] },
      properties: { site: "lukavrbovec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.348178, 45.777459] },
      properties: { site: "lupoglav", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.23539, 45.82302] },
      properties: { site: "martinbreg", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.173173, 45.92954] },
      properties: { site: "moravce", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.207933, 45.945418] },
      properties: { site: "nespes", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.29082, 45.952285] },
      properties: { site: "novomjesto", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.388538, 45.973578] },
      properties: { site: "preseka", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.316782, 46.014046] },
      properties: { site: "radoisce", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.315745, 45.931701] },
      properties: { site: "rakovec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.233828, 45.760883] },
      properties: { site: "rugvica", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.175137, 45.816813] },
      properties: { site: "seskraljevec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.279164, 45.905997] },
      properties: { site: "svetahelena", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.421134, 45.885791] },
      properties: { site: "vrbovec", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.24121, 45.96171] },
      properties: { site: "zelinax", cluster: 18 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.424967, 44.782604] },
      properties: { site: "cbanici", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.421233, 44.917352] },
      properties: { site: "ccule", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.434783, 44.969364] },
      properties: { site: "cdragarski", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.452797, 44.670912] },
      properties: { site: "cgrmozaj", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.409053, 44.958966] },
      properties: { site: "cht", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.322524, 45.144857] },
      properties: { site: "civanje", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.338709, 44.814861] },
      properties: { site: "cmartinscica", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.411954, 44.712584] },
      properties: { site: "cosor", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.286281, 45.132794] },
      properties: { site: "cporozina", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.492979, 44.637735] },
      properties: { site: "cpuntakriza", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.406949, 44.86151] },
      properties: { site: "cvrana", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.392145, 44.960119] },
      properties: { site: "creskovacine", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.123641, 45.020209] },
      properties: { site: "goli", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.120732, 44.966435] },
      properties: { site: "koromacno", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.121382, 45.08412] },
      properties: { site: "labin", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.417426, 44.57328] },
      properties: { site: "losinjkastelir", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.516245, 44.494949] },
      properties: { site: "losinjpogled", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.48443, 44.521287] },
      properties: { site: "losinjumpiljak", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.448879, 44.537213] },
      properties: { site: "mlosinjapark", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.458676, 44.52295] },
      properties: { site: "mlosinjaurora", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.455219, 44.532078] },
      properties: { site: "mlosinjbell", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.471959, 44.532822] },
      properties: { site: "mlosinjczu", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.778892, 44.37783] },
      properties: { site: "olib", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.457772, 44.53083] },
      properties: { site: "pcmlosinjalh", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.593052, 44.342113] },
      properties: { site: "premuda", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.171376, 45.079158] },
      properties: { site: "rabacalbona", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.161464, 45.075126] },
      properties: { site: "rabackastor", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.167702, 45.076736] },
      properties: { site: "rabacmaro", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.140054, 45.105338] },
      properties: { site: "ripenda", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.701791, 44.367926] },
      properties: { site: "silba", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.147687, 45.147467] },
      properties: { site: "stepcici", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.131723, 45.126847] },
      properties: { site: "strmac", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.301927, 44.514413] },
      properties: { site: "susak", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.248709, 44.642636] },
      properties: { site: "unije", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.498066, 44.524264] },
      properties: { site: "vlosinjpunta", cluster: 19 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.848088, 43.465006] },
      properties: { site: "acblato", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.378126, 43.190696] },
      properties: { site: "acvrgorac", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.980131, 43.600072] },
      properties: { site: "arzano", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.420563, 43.161279] },
      properties: { site: "barbirioiv", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.679005, 43.593825] },
      properties: { site: "bisko", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.813228, 43.573608] },
      properties: { site: "budimir", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.799415, 43.60858] },
      properties: { site: "cacvina", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.732825, 43.599754] },
      properties: { site: "caporice", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.929944, 43.508668] },
      properties: { site: "cistaprovo", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.601912, 43.646066] },
      properties: { site: "dicmo", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.909918, 43.554811] },
      properties: { site: "dobranje", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.240245, 43.245611] },
      properties: { site: "dragljaneoiv", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.244926, 43.207083] },
      properties: { site: "dugenjive", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.622068, 43.577166] },
      properties: { site: "dugopolje", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.000966, 43.422081] },
      properties: { site: "grabovac", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.216987, 43.446723] },
      properties: { site: "imotski", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.529555, 43.582924] },
      properties: { site: "kocinjebrdo", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.326488, 43.204839] },
      properties: { site: "kokorici", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.591318, 43.612514] },
      properties: { site: "krizice", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.315543, 43.29333] },
      properties: { site: "mijaca", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.222971, 43.384489] },
      properties: { site: "mracaj", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.557959, 43.112876] },
      properties: { site: "novasela", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.774005, 43.525932] },
      properties: { site: "novaselast", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.415218, 43.222431] },
      properties: { site: "orah", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.567206, 43.590001] },
      properties: { site: "pcdugopoljldc", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.190172, 43.373996] },
      properties: { site: "podbabljeoiv", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.630746, 43.650753] },
      properties: { site: "podi", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.163226, 43.230009] },
      properties: { site: "rudelji", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.824796, 43.479081] },
      properties: { site: "strazina", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.054671, 43.532498] },
      properties: { site: "studenci", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.474184, 43.161166] },
      properties: { site: "subir", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.053816, 43.341993] },
      properties: { site: "svetijure", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.724384, 43.618558] },
      properties: { site: "trilj", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.483343, 43.135341] },
      properties: { site: "tunelmprolog", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.019503, 43.385362] },
      properties: { site: "tunelsvilija", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.759428, 43.571245] },
      properties: { site: "ugljane", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.277284, 43.465052] },
      properties: { site: "vinjanigornji", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.371594, 43.204361] },
      properties: { site: "vrgorac", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.403757, 43.189223] },
      properties: { site: "vrgorachrt", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.860427, 43.611923] },
      properties: { site: "vukici", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.039448, 43.397889] },
      properties: { site: "zagvozd", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.145599, 43.344167] },
      properties: { site: "zupasrednja", cluster: 20 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.294593, 45.344143] },
      properties: { site: "andjeli", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.298181, 45.340862] },
      properties: { site: "andjelihep", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.394674, 45.371757] },
      properties: { site: "furicevo", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.264655, 45.404434] },
      properties: { site: "gaspari", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.289242, 45.31274] },
      properties: { site: "iciciaci", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.310022, 45.395583] },
      properties: { site: "jurdani", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.311044, 45.38075] },
      properties: { site: "jusici", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.347488, 45.373963] },
      properties: { site: "kastavcrkva", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.271808, 45.295794] },
      properties: { site: "lovran", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.277048, 45.290797] },
      properties: { site: "lovranpark", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.41634, 45.39163] },
      properties: { site: "martinovoselo", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.328377, 45.36624] },
      properties: { site: "matuljix", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.267599, 45.268096] },
      properties: { site: "medveja", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.304323, 45.365511] },
      properties: { site: "mihotici", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.253843, 45.23733] },
      properties: { site: "moscdraga", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.311818, 45.340081] },
      properties: { site: "opatijaamb", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.300831, 45.329756] },
      properties: { site: "opatijaastoria", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.305831, 45.333998] },
      properties: { site: "opatijamilenij", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.31388, 45.344719] },
      properties: { site: "pcopatijasd", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.326666, 45.355548] },
      properties: { site: "preluknavis", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.372782, 45.341385] },
      properties: { site: "ricostabella", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.389066, 45.35786] },
      properties: { site: "rigrbci", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.380409, 45.339366] },
      properties: { site: "rikantrida", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.367082, 45.352566] },
      properties: { site: "rikrlezina", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.403267, 45.34126] },
      properties: { site: "rikrnjevo", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.390597, 45.340015] },
      properties: { site: "riliburnijska", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.36702, 45.346591] },
      properties: { site: "rimarceljevad", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.347211, 45.360275] },
      properties: { site: "riorbani", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.3964, 45.353526] },
      properties: { site: "ripehlin", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.361658, 45.361661] },
      properties: { site: "riresetari", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.366903, 45.356003] },
      properties: { site: "risrdoci", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.35, 45.355269] },
      properties: { site: "rivratajadran", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.385133, 45.346204] },
      properties: { site: "rizamet", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.384921, 45.403524] },
      properties: { site: "rozca", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.212651, 45.313148] },
      properties: { site: "uckatunel", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.271224, 45.327502] },
      properties: { site: "veprinac", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.385573, 45.377566] },
      properties: { site: "viskovo", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.318864, 45.347277] },
      properties: { site: "volosko", cluster: 21 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.442071, 45.326842] },
      properties: { site: "mcriri", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.468826, 45.31816] },
      properties: { site: "pcriwtc", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.438954, 45.329878] },
      properties: { site: "pcrizagrad", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.40805, 45.337776] },
      properties: { site: "pcriztc", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.436612, 45.329326] },
      properties: { site: "riciottina", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.425786, 45.355467] },
      properties: { site: "riddrenova", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.486663, 45.323271] },
      properties: { site: "ridraga", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.436023, 45.347573] },
      properties: { site: "ridrenovakuk", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.418171, 45.337441] },
      properties: { site: "riduella", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.455859, 45.341747] },
      properties: { site: "rikatarina", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.427852, 45.332738] },
      properties: { site: "rikbcrijeka", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.470234, 45.325878] },
      properties: { site: "rikbcsusak", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.440987, 45.334621] },
      properties: { site: "rikozala", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.430666, 45.330692] },
      properties: { site: "rikresimirova", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.46456, 45.322936] },
      properties: { site: "rikrimeja", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.420439, 45.34655] },
      properties: { site: "rimerkur", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.450806, 45.325886] },
      properties: { site: "rineboder", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.432207, 45.333606] },
      properties: { site: "rinikolecara", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.436939, 45.331101] },
      properties: { site: "riomladinska", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.426697, 45.339715] },
      properties: { site: "riosjecka", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.473026, 45.315066] },
      properties: { site: "ripecine", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.412317, 45.342216] },
      properties: { site: "ripodmurvice", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.444228, 45.343779] },
      properties: { site: "ripulacjgl", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.432941, 45.336759] },
      properties: { site: "rirastocine", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.441894, 45.326643] },
      properties: { site: "riri", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.413835, 45.35214] },
      properties: { site: "riskurinjskad", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.440884, 45.329563] },
      properties: { site: "risupilova", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.457333, 45.325044] },
      properties: { site: "risvalbina", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.467326, 45.328609] },
      properties: { site: "ritrsatcampus", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.459943, 45.330968] },
      properties: { site: "ritrsatsd", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.46581, 45.335135] },
      properties: { site: "ritrsatvod", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.468148, 45.318418] },
      properties: { site: "ritunelpecine", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.458715, 45.333941] },
      properties: { site: "rituneltrsat", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.442731, 45.324569] },
      properties: { site: "riverdieva", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.475149, 45.319926] },
      properties: { site: "rivezica", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.422216, 45.337497] },
      properties: { site: "rivukovarska", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.446065, 45.328086] },
      properties: { site: "rizrtfasizma", cluster: 22 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.483882, 45.35138] },
      properties: { site: "cavle", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.4975, 45.354266] },
      properties: { site: "cernik", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.690997, 45.172924] },
      properties: { site: "crikvinter", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.703843, 45.175999] },
      properties: { site: "crikvsjever", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.683786, 45.181642] },
      properties: { site: "crikvenicather", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.482803, 45.370425] },
      properties: { site: "cudnic", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.675337, 45.188341] },
      properties: { site: "dramaljomorika", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.598698, 45.28344] },
      properties: { site: "hreljin", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.621123, 45.227139] },
      properties: { site: "jadranovo", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.570921, 45.220744] },
      properties: { site: "kaerodrom", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.613907, 45.124528] },
      properties: { site: "kdobrinj", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.579273, 45.154957] },
      properties: { site: "kgorinji", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.543546, 45.158411] },
      properties: { site: "knjivicekijac", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.554991, 45.211109] },
      properties: { site: "komisaljht", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.538494, 45.217091] },
      properties: { site: "komisaljjanaf", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.561659, 45.21639] },
      properties: { site: "komisaljnk", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.662739, 45.144929] },
      properties: { site: "ksilo", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.567068, 45.245305] },
      properties: { site: "ksvetimarko", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.507071, 45.298309] },
      properties: { site: "kostrena", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.520279, 45.286387] },
      properties: { site: "kostrenahep", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.530635, 45.295069] },
      properties: { site: "kostrenahz", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.494666, 45.306848] },
      properties: { site: "kostrenasd", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.568878, 45.273883] },
      properties: { site: "kraljevicarss", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.559775, 45.239518] },
      properties: { site: "krckimost", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.605313, 45.111612] },
      properties: { site: "krkkras", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.54892, 45.168862] },
      properties: { site: "krknjivice", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.504861, 45.338496] },
      properties: { site: "kukuljanovoiz", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.571104, 45.299997] },
      properties: { site: "praputnjak", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.42582, 45.368471] },
      properties: { site: "rigdrenova", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.464351, 45.350516] },
      properties: { site: "risvilno", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.716451, 45.160715] },
      properties: { site: "selcevarazdin", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.63138, 45.249994] },
      properties: { site: "simici", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.530693, 45.328284] },
      properties: { site: "skrljevo", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.601968, 45.253126] },
      properties: { site: "smrika", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.546805, 45.293011] },
      properties: { site: "soici", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.555004, 45.279815] },
      properties: { site: "srscica", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.449721, 45.38277] },
      properties: { site: "termotechnik", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.594989, 45.27972] },
      properties: { site: "tunelburlica", cluster: 23 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.89648, 44.70576] },
      properties: { site: "jablanac", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.068727, 44.529428] },
      properties: { site: "karlobag", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.964499, 44.492473] },
      properties: { site: "kolan", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.929963, 44.478831] },
      properties: { site: "lisicnjak", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.892585, 44.855405] },
      properties: { site: "lukovo", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.914994, 44.538048] },
      properties: { site: "mcpagzrce", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.798828, 45.128471] },
      properties: { site: "nvinodolski", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.787907, 45.128892] },
      properties: { site: "nvinodolskict", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.897929, 44.531995] },
      properties: { site: "pgajac", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.748657, 44.687533] },
      properties: { site: "plun", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.882644, 44.556172] },
      properties: { site: "pnovalja", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.870829, 44.565557] },
      properties: { site: "pnovaljagajc", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.882198, 44.546453] },
      properties: { site: "pnovaljakamp", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.89749, 44.546108] },
      properties: { site: "pnovaljaoiv", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.8817, 44.568629] },
      properties: { site: "psegovice", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.887002, 44.581351] },
      properties: { site: "pstaranovalja", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.937723, 44.570193] },
      properties: { site: "pagkomorovac", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.79246, 44.644514] },
      properties: { site: "pagstanisce", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.980281, 44.52475] },
      properties: { site: "pagzubovici", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.900847, 44.840699] },
      properties: { site: "panos", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.83206, 45.119471] },
      properties: { site: "povile", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.967583, 44.603477] },
      properties: { site: "prizna", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.725946, 44.827593] },
      properties: { site: "rloparzorzin", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.760988, 44.756948] },
      properties: { site: "rrab", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.724653, 44.761992] },
      properties: { site: "rsuhapunta", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.725427, 44.803941] },
      properties: { site: "rsupdraga", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.804754, 44.737952] },
      properties: { site: "rabbarbat", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.78993, 44.773066] },
      properties: { site: "rabkamenjak", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.754554, 44.773417] },
      properties: { site: "rabmarkovine", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.721878, 44.768987] },
      properties: { site: "rabsurline", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.901385, 44.991655] },
      properties: { site: "senj", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.904902, 44.988895] },
      properties: { site: "senjneda", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.97369, 44.464215] },
      properties: { site: "simunikamp", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.903212, 44.72525] },
      properties: { site: "stinica", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.917291, 44.980526] },
      properties: { site: "trbusnjak", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.765171, 45.133374] },
      properties: { site: "zagori", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.909996, 44.902209] },
      properties: { site: "zrnovnicazubak", cluster: 24 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.180254, 44.35661] },
      properties: { site: "dinjiska", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.749343, 44.968004] },
      properties: { site: "kbaska", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.52652, 45.117685] },
      properties: { site: "kmalincrkva", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.529992, 45.131386] },
      properties: { site: "kmalinhalud", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.522323, 45.11953] },
      properties: { site: "kmalinmalin", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.628835, 45.019333] },
      properties: { site: "kpunat", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.6875, 44.959438] },
      properties: { site: "kstarabaska", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.671491, 45.033043] },
      properties: { site: "ktreskavac", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.498229, 45.028725] },
      properties: { site: "kvalbiska", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.664689, 45.072223] },
      properties: { site: "kvrbnikjug", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.547497, 45.112217] },
      properties: { site: "kzgombici", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.509717, 45.076074] },
      properties: { site: "kzidine", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.591228, 44.156454] },
      properties: { site: "karin", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.722459, 44.977814] },
      properties: { site: "krkbatomalj", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.611697, 45.045131] },
      properties: { site: "krkkornic", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.582594, 45.025374] },
      properties: { site: "krkkrkdrazica", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.572476, 45.02585] },
      properties: { site: "krkkrkht", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.462386, 45.076888] },
      properties: { site: "krklinardici", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.481074, 45.051003] },
      properties: { site: "krkpinezici", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.675969, 45.076305] },
      properties: { site: "krkvrbnik", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.532195, 45.045122] },
      properties: { site: "krkvrh", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.074083, 44.448405] },
      properties: { site: "krsina", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.309818, 44.265203] },
      properties: { site: "ljubac", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.638087, 44.248032] },
      properties: { site: "marune", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.531298, 44.238887] },
      properties: { site: "maslenica", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.545924, 44.179784] },
      properties: { site: "novigradhrt", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.667748, 44.198153] },
      properties: { site: "obrovac", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.053377, 44.448489] },
      properties: { site: "ppag", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.052542, 44.442315] },
      properties: { site: "ppagcentar", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.475746, 44.210619] },
      properties: { site: "posedarje", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.111392, 44.347222] },
      properties: { site: "povljana", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.337863, 44.274105] },
      properties: { site: "razanac", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.46446, 44.236119] },
      properties: { site: "slivnica", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.453302, 44.250222] },
      properties: { site: "slivnicahrt", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.164927, 44.388494] },
      properties: { site: "staravas", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.448005, 44.286389] },
      properties: { site: "starigradalan", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.59234, 44.257307] },
      properties: { site: "tunelcelinkai", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.191305, 44.325775] },
      properties: { site: "vlasici", cluster: 25 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.318813, 44.168423] },
      properties: { site: "brisevo", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.191308, 44.177116] },
      properties: { site: "kozino", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.246745, 44.032883] },
      properties: { site: "kukljica", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.153228, 44.096493] },
      properties: { site: "lukoran", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.181671, 44.239667] },
      properties: { site: "nin", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.271231, 44.11638] },
      properties: { site: "pczdsupernova", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.388372, 44.192653] },
      properties: { site: "policnikalici", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.290361, 44.200658] },
      properties: { site: "poljica", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.196428, 44.069992] },
      properties: { site: "preko", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.124444, 44.257214] },
      properties: { site: "privlaka", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.152443, 44.193439] },
      properties: { site: "puntaskala", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.037103, 44.155482] },
      properties: { site: "rivanj", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.418752, 44.140774] },
      properties: { site: "suhovare", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.094615, 44.126601] },
      properties: { site: "ugljan", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.08084, 44.303326] },
      properties: { site: "vir", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.053666, 44.301066] },
      properties: { site: "virbandira", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.10318, 44.299636] },
      properties: { site: "vircentar", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.120385, 44.292572] },
      properties: { site: "viristok", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.110419, 44.297496] },
      properties: { site: "virrss", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.163639, 44.233529] },
      properties: { site: "zatonzd", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.254538, 44.104394] },
      properties: { site: "zdarm", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.265684, 44.119111] },
      properties: { site: "zdbilibrig", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.240914, 44.138914] },
      properties: { site: "zdbokanjac", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.211059, 44.132799] },
      properties: { site: "zdborik", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.225066, 44.112781] },
      properties: { site: "zdhotelzagreb", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.252247, 44.11474] },
      properties: { site: "zdinterspar", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.235195, 44.105722] },
      properties: { site: "zdkolovare", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.223238, 44.118284] },
      properties: { site: "zdliburnskaob", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.233895, 44.124419] },
      properties: { site: "zdmelada", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.246552, 44.112215] },
      properties: { site: "zdnkzadar", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.240452, 44.120526] },
      properties: { site: "zdotp", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.235246, 44.109179] },
      properties: { site: "zdtkc", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.232951, 44.116303] },
      properties: { site: "zdvelebitska", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.256265, 44.128088] },
      properties: { site: "zdvidikovac", cluster: 26 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.671519, 43.888954] },
      properties: { site: "banjevci", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.369504, 43.966121] },
      properties: { site: "barotul", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.616125, 44.044252] },
      properties: { site: "benkovacsajam", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.292789, 44.071903] },
      properties: { site: "bibinje", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.44994, 43.952213] },
      properties: { site: "biograd", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.452594, 43.934291] },
      properties: { site: "biogradcentar", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.445845, 43.941131] },
      properties: { site: "biogradhotel", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.443647, 43.937027] },
      properties: { site: "biogradht", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.846429, 44.229128] },
      properties: { site: "brgulje", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.37654, 44.045655] },
      properties: { site: "debeljak", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.291622, 44.093471] },
      properties: { site: "dracevac", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.54255, 43.881514] },
      properties: { site: "drage", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.934242, 44.113332] },
      properties: { site: "dragove", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.703409, 43.812518] },
      properties: { site: "dubravatisno", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.668461, 43.79838] },
      properties: { site: "gracina", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.135058, 43.904924] },
      properties: { site: "grbascak", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.750547, 44.267484] },
      properties: { site: "istgora", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.463536, 43.927101] },
      properties: { site: "krument", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.871955, 44.216388] },
      properties: { site: "molat", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.592781, 43.82186] },
      properties: { site: "murter", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.49933, 43.91695] },
      properties: { site: "pakostane", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.346156, 43.757554] },
      properties: { site: "panitula", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.515963, 44.021329] },
      properties: { site: "polacazd", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.586749, 43.811737] },
      properties: { site: "raduc", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.066748, 44.023398] },
      properties: { site: "rava", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.165905, 43.939562] },
      properties: { site: "sali", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.439228, 44.090497] },
      properties: { site: "skabrnja", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.528918, 44.118603] },
      properties: { site: "smilcic", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.876476, 44.137567] },
      properties: { site: "soline", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.321669, 44.051944] },
      properties: { site: "sukosan", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.422875, 43.963829] },
      properties: { site: "svfilipjakov", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.637307, 43.797271] },
      properties: { site: "tisno", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.398288, 43.932245] },
      properties: { site: "tkonugrinici", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.582862, 44.007884] },
      properties: { site: "umac", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.715671, 43.94244] },
      properties: { site: "vuksic", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.274057, 44.09212] },
      properties: { site: "zdsojara", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.265454, 44.009102] },
      properties: { site: "zdrelac", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.378806, 44.105366] },
      properties: { site: "zemunik", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.353603, 44.097572] },
      properties: { site: "zemunikaero", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.316279, 43.882035] },
      properties: { site: "zut", cluster: 27 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.78739, 43.886316] },
      properties: { site: "acpirovac", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.919239, 43.805861] },
      properties: { site: "acskradin", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.907765, 43.769634] },
      properties: { site: "bilice", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.933047, 43.668617] },
      properties: { site: "brodarica", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.774149, 43.838468] },
      properties: { site: "gacelezi", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.965713, 43.637256] },
      properties: { site: "grebastica", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.850173, 43.721723] },
      properties: { site: "jadrijasvj", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.91617, 43.736883] },
      properties: { site: "kamenar", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.712538, 43.690803] },
      properties: { site: "kaprijerss", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.996186, 43.743278] },
      properties: { site: "krtolin", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.78527, 43.680559] },
      properties: { site: "obonjan", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.895547, 43.723338] },
      properties: { site: "pcsimandalina", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.99386, 43.704054] },
      properties: { site: "podisi", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.863835, 43.854142] },
      properties: { site: "prokljan", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.849693, 43.806976] },
      properties: { site: "raslina", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.917514, 43.706998] },
      properties: { site: "razine", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.907876, 43.720352] },
      properties: { site: "sibioci", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.874503, 43.731359] },
      properties: { site: "simartinska", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.896773, 43.74891] },
      properties: { site: "simeterize", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.893878, 43.740436] },
      properties: { site: "sisvivan", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.896715, 43.732537] },
      properties: { site: "sitkc", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.927685, 43.820734] },
      properties: { site: "skradin", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.960669, 43.802334] },
      properties: { site: "skradinskibuk", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.889787, 43.69728] },
      properties: { site: "solarisandrija", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.884436, 43.695829] },
      properties: { site: "solarisjure", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.806484, 43.752114] },
      properties: { site: "srima", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.716685, 43.890094] },
      properties: { site: "stankovci", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.921043, 43.72841] },
      properties: { site: "tuneldumbocica", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.774639, 43.760211] },
      properties: { site: "vodiceht", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.788854, 43.753264] },
      properties: { site: "vodiceimper", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.788721, 43.75871] },
      properties: { site: "vodicemup", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.771131, 43.753034] },
      properties: { site: "vodicepunta", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.949038, 43.656047] },
      properties: { site: "zaboric", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.821959, 43.785874] },
      properties: { site: "zatonsi", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.643872, 43.654306] },
      properties: { site: "zirje", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.84121, 43.687909] },
      properties: { site: "zlarin", cluster: 28 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.068554, 43.681876] },
      properties: { site: "acvrpolje", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.07093, 43.634904] },
      properties: { site: "boraja", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.140263, 43.443113] },
      properties: { site: "drvenikveli", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.393612, 43.554503] },
      properties: { site: "kastelgom", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.293185, 43.541184] },
      properties: { site: "kastelstafilic", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.355548, 43.55888] },
      properties: { site: "kastelstarmag", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.341738, 43.550463] },
      properties: { site: "kastelstari", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.414424, 43.548495] },
      properties: { site: "kastelsucurac", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.927713, 43.571952] },
      properties: { site: "kremik", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.214958, 43.578156] },
      properties: { site: "labinstica", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.01971, 43.578611] },
      properties: { site: "loznice", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.108331, 43.512776] },
      properties: { site: "marina", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.217163, 43.396825] },
      properties: { site: "maslinica", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.207641, 43.513128] },
      properties: { site: "medena", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.218328, 43.518065] },
      properties: { site: "pchotelola", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.122429, 43.68504] },
      properties: { site: "perkovichrt", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.288964, 43.542816] },
      properties: { site: "plano", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.177468, 43.637796] },
      properties: { site: "primdolacoiv", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.919204, 43.590366] },
      properties: { site: "primostenzora", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.978613, 43.506104] },
      properties: { site: "razanj", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.970987, 43.521787] },
      properties: { site: "rogoznicahrt", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.190898, 43.510136] },
      properties: { site: "segetvranjica", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.039563, 43.497643] },
      properties: { site: "sevid", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.333235, 43.499901] },
      properties: { site: "slatineciovo", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.301064, 43.538718] },
      properties: { site: "stresnik", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.309465, 43.394022] },
      properties: { site: "suzanj", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.054301, 43.525961] },
      properties: { site: "svinca", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.246988, 43.512093] },
      properties: { site: "trogir", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.250907, 43.517551] },
      properties: { site: "trogirht", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.226687, 43.523575] },
      properties: { site: "trogirmagistra", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.264591, 43.523072] },
      properties: { site: "trogiropel", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.251384, 43.514727] },
      properties: { site: "trogirtshop", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.274664, 43.620406] },
      properties: { site: "trolokve", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.194507, 43.656998] },
      properties: { site: "tuneldubrava", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.352762, 43.356601] },
      properties: { site: "velikastraza", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.10668, 43.504384] },
      properties: { site: "vinisce", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.013751, 43.674806] },
      properties: { site: "vrpoljesi", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.269, 43.49778] },
      properties: { site: "zedno", cluster: 29 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.441277, 43.508004] },
      properties: { site: "mcstpazar", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.431664, 43.519443] },
      properties: { site: "mcstpoljud", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.438655, 43.510071] },
      properties: { site: "mcsttkcobala", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.446782, 43.51996] },
      properties: { site: "pcstjoker", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.484199, 43.519039] },
      properties: { site: "pcstmall", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.455402, 43.512235] },
      properties: { site: "pcsttkc", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.428036, 43.50078] },
      properties: { site: "staci", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.437604, 43.51319] },
      properties: { site: "stbihacka", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.447348, 43.517756] },
      properties: { site: "stbol", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.448256, 43.505575] },
      properties: { site: "stdepadans", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.450414, 43.512578] },
      properties: { site: "stdomomladine", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.472519, 43.528983] },
      properties: { site: "stdujmovaca", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.467452, 43.512387] },
      properties: { site: "stekonomija", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.481372, 43.511677] },
      properties: { site: "steldalmacija", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.45211, 43.509019] },
      properties: { site: "stgripe", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.492778, 43.503346] },
      properties: { site: "sthotelzagreb", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.42421, 43.501638] },
      properties: { site: "stjadrankotek", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.43958, 43.506837] },
      properties: { site: "stkapetanija", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.459197, 43.502916] },
      properties: { site: "stkbcfirule", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.46349, 43.519369] },
      properties: { site: "stkocunar", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.45977, 43.510785] },
      properties: { site: "stlokve", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.434044, 43.522119] },
      properties: { site: "stlora", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.434819, 43.524053] },
      properties: { site: "stloradvorana", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.423889, 43.505837] },
      properties: { site: "stmarjantunel", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.407075, 43.504453] },
      properties: { site: "stmedils", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.441569, 43.515552] },
      properties: { site: "stmup", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.489905, 43.510684] },
      properties: { site: "stodeska", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.470256, 43.519894] },
      properties: { site: "stravnenjive", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.466269, 43.50747] },
      properties: { site: "stsmrdecac", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.430194, 43.516226] },
      properties: { site: "stspinut", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.449944, 43.523889] },
      properties: { site: "ststinice", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.443273, 43.50094] },
      properties: { site: "stsvjetionik", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.469186, 43.515056] },
      properties: { site: "stvrhsucidra", cluster: 30 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.648453, 43.264915] },
      properties: { site: "bolgospcentar", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.655971, 43.261907] },
      properties: { site: "bolht", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.562307, 43.341379] },
      properties: { site: "donjihumac", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.724589, 43.301525] },
      properties: { site: "gornjihumac", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.540697, 43.490651] },
      properties: { site: "grljevac", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.538165, 43.492207] },
      properties: { site: "hotellavkrov", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.516513, 43.512944] },
      properties: { site: "kamen", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.448043, 43.323398] },
      properties: { site: "milna", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.58197, 43.466353] },
      properties: { site: "mutogras", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.692152, 43.444269] },
      properties: { site: "omis", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.538148, 43.492212] },
      properties: { site: "pchotellav", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.502395, 43.51368] },
      properties: { site: "pcstcityco", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.448633, 43.539397] },
      properties: { site: "pcstemmezeta", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.552025, 43.493684] },
      properties: { site: "podstrana", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.63592, 43.372007] },
      properties: { site: "postire", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.737575, 43.345401] },
      properties: { site: "pucisce", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.75097, 43.356106] },
      properties: { site: "puciscejadran", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.489385, 43.536191] },
      properties: { site: "solin", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.495472, 43.536201] },
      properties: { site: "solincola", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.612135, 43.377331] },
      properties: { site: "splitska", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.505682, 43.529415] },
      properties: { site: "stdracevac", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.495369, 43.529083] },
      properties: { site: "stmeterize", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.439671, 43.539754] },
      properties: { site: "stsvjuraj", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.511917, 43.533356] },
      properties: { site: "sttunelmravin", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.511435, 43.50275] },
      properties: { site: "stobrec", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.861026, 43.282832] },
      properties: { site: "sumartin", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.551081, 43.384351] },
      properties: { site: "supetar", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.558475, 43.373809] },
      properties: { site: "supetarht", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.475828, 43.384169] },
      properties: { site: "sutivan", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.534353, 43.552057] },
      properties: { site: "tunelkliskosa", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.52524, 43.560163] },
      properties: { site: "utvrdaklis", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.620023, 43.279705] },
      properties: { site: "vidovagora", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.653744, 43.454804] },
      properties: { site: "zahod", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.715416, 43.456066] },
      properties: { site: "zakucac", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.848565, 43.316412] },
      properties: { site: "zecevo", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.552992, 43.521409] },
      properties: { site: "zrnovnica", cluster: 31 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.398808, 43.080167] },
      properties: { site: "bacina", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.950472, 43.354154] },
      properties: { site: "baskavoda", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.483702, 43.00085] },
      properties: { site: "blace", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.929501, 43.367778] },
      properties: { site: "brelasoline", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.490969, 43.104301] },
      properties: { site: "eraci", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.340106, 43.108136] },
      properties: { site: "gradac", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.139574, 43.195455] },
      properties: { site: "igrane", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.342879, 42.964969] },
      properties: { site: "kuna", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.035959, 43.019282] },
      properties: { site: "loviste", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.007383, 43.303841] },
      properties: { site: "mabiokovka", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.032048, 43.285465] },
      properties: { site: "makonzum", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.015058, 43.299268] },
      properties: { site: "mameteor", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.01932, 43.287707] },
      properties: { site: "maosejava", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.017212, 43.295459] },
      properties: { site: "mariva", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.022201, 43.293201] },
      properties: { site: "mavatrogasci", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.001658, 43.306668] },
      properties: { site: "mcmaromana", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.647489, 43.052993] },
      properties: { site: "metkovic", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.602451, 43.023313] },
      properties: { site: "metkovicjz", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.640644, 43.067122] },
      properties: { site: "metkovicking", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.654219, 43.055924] },
      properties: { site: "metkovicsilos", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.232218, 42.978174] },
      properties: { site: "mokalo", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.177134, 42.974005] },
      properties: { site: "orebic", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.948884, 43.356945] },
      properties: { site: "pchotelslavia", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.436655, 43.057223] },
      properties: { site: "plocebrdo", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.433738, 43.048967] },
      properties: { site: "plocetkc", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.096207, 43.239341] },
      properties: { site: "podgorastupica", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.566071, 43.010012] },
      properties: { site: "podgradina", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.498156, 43.038783] },
      properties: { site: "rogotin", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.361381, 42.963851] },
      properties: { site: "rota", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.172278, 43.131674] },
      properties: { site: "sucuraj", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.872994, 43.412293] },
      properties: { site: "tilovica", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.269241, 43.009077] },
      properties: { site: "trpanj", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.053606, 43.271109] },
      properties: { site: "tucepi", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.073475, 42.984978] },
      properties: { site: "viganj", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.27794, 43.139925] },
      properties: { site: "zaostrog", cluster: 32 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.012929, 42.979738] },
      properties: { site: "bisevo", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.785191, 42.932795] },
      properties: { site: "blato", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.976636, 43.141604] },
      properties: { site: "bogomolje", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.21995, 43.031098] },
      properties: { site: "brguljac", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.852028, 42.898271] },
      properties: { site: "brna", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.92543, 42.931565] },
      properties: { site: "cara", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.942918, 43.13192] },
      properties: { site: "gdinjrss", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.114411, 43.031168] },
      properties: { site: "humvis", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.43389, 43.172409] },
      properties: { site: "hvaramfora", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.445668, 43.166004] },
      properties: { site: "hvarbodul", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.422207, 43.181944] },
      properties: { site: "hvaroiv", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.423372, 43.180201] },
      properties: { site: "hvarpodstine", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.438737, 43.171421] },
      properties: { site: "hvarpoglavarst", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.545372, 43.156039] },
      properties: { site: "hvartunel", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.701757, 43.162475] },
      properties: { site: "jelsa", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.690305, 43.161925] },
      properties: { site: "jelsaht", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.670727, 43.16819] },
      properties: { site: "jelsatele2", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.88339, 42.948234] },
      properties: { site: "kapja", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.085958, 43.04807] },
      properties: { site: "komiza", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.145602, 42.950673] },
      properties: { site: "korculahotel", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.136971, 42.948782] },
      properties: { site: "korculaht", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.130714, 42.959206] },
      properties: { site: "korculaoiv", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.174695, 42.918672] },
      properties: { site: "lumbarda", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.449402, 43.177731] },
      properties: { site: "napoleon", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.39042, 43.159164] },
      properties: { site: "palmizana", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.042609, 42.945278] },
      properties: { site: "pupnat", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.58511, 43.188278] },
      properties: { site: "starigradarka", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.60053, 43.176262] },
      properties: { site: "starigradhvar", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.716236, 42.961244] },
      properties: { site: "velaluka", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.692112, 42.947281] },
      properties: { site: "velalukahum", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.532235, 43.169584] },
      properties: { site: "velograbje", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.186412, 43.059573] },
      properties: { site: "vis", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.673597, 43.179185] },
      properties: { site: "vrboska", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.686743, 43.125412] },
      properties: { site: "zavala", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.109666, 42.95046] },
      properties: { site: "zrnovo", cluster: 33 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.543117, 42.733779] },
      properties: { site: "babinopolje", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.836965, 42.849294] },
      properties: { site: "cepikuce", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.088839, 42.652051] },
      properties: { site: "dugrawe", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.091598, 42.654335] },
      properties: { site: "duhep", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.10583, 42.679064] },
      properties: { site: "dumokosica", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.091534, 42.65106] },
      properties: { site: "dutrgovina", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.086597, 42.659232] },
      properties: { site: "dutup", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.645683, 42.872334] },
      properties: { site: "duba", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.536873, 42.94496] },
      properties: { site: "duboka", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.370557, 42.783153] },
      properties: { site: "govedjari", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.019444, 42.722344] },
      properties: { site: "gromaca", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.860408, 42.751418] },
      properties: { site: "humlastovo", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.424497, 42.927748] },
      properties: { site: "janjina", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.005675, 42.679635] },
      properties: { site: "kolocep", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.139894, 42.670385] },
      properties: { site: "komolachrt", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.944999, 42.693058] },
      properties: { site: "lopud", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.016398, 42.695771] },
      properties: { site: "orasac", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.07541, 42.708061] },
      properties: { site: "osojnik", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.342793, 42.788099] },
      properties: { site: "pomenamljet", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.616337, 42.849505] },
      properties: { site: "ponikvehrt", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.677573, 42.818761] },
      properties: { site: "prapratno", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.817561, 42.767014] },
      properties: { site: "prezba", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.466704, 42.757401] },
      properties: { site: "ropa", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.740136, 42.702063] },
      properties: { site: "rtgruj", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.856155, 42.740005] },
      properties: { site: "sipan", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.889434, 42.788337] },
      properties: { site: "slano", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.866738, 42.783579] },
      properties: { site: "slanohrt", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.698718, 42.837374] },
      properties: { site: "ston", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.09888, 42.670557] },
      properties: { site: "sustjepan", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.399744, 42.919331] },
      properties: { site: "trstenik", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.478192, 42.894548] },
      properties: { site: "uljenje", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.724442, 42.882439] },
      properties: { site: "velechrt", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.728172, 42.833506] },
      properties: { site: "zamaslina", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.041642, 42.69467] },
      properties: { site: "zatondu", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.458237, 42.886265] },
      properties: { site: "zuljana", cluster: 34 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.214226, 42.578463] },
      properties: { site: "cavtatcro", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.162287, 42.634516] },
      properties: { site: "cibaca", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.264399, 42.559839] },
      properties: { site: "cilipi", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.432773, 42.490784] },
      properties: { site: "debelibrijeg", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.061279, 42.661235] },
      properties: { site: "dubabinkuk", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.132245, 42.633227] },
      properties: { site: "dubelvedere", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.076118, 42.648298] },
      properties: { site: "dubolnica", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.118754, 42.64113] },
      properties: { site: "duexcelsior", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.090894, 42.645289] },
      properties: { site: "duhotlibertas", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.120579, 42.628865] },
      properties: { site: "dulokrum", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.061274, 42.651208] },
      properties: { site: "dupalace", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.072346, 42.649957] },
      properties: { site: "dupetka", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.109649, 42.650965] },
      properties: { site: "dusrdj", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.102194, 42.645712] },
      properties: { site: "dutkc", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.075314, 42.656241] },
      properties: { site: "duuvsumratin", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.158416, 42.645713] },
      properties: { site: "gornjibrgat", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.367272, 42.518772] },
      properties: { site: "gruda", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.385486, 42.499151] },
      properties: { site: "ilijinobrdo", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.295254, 42.532319] },
      properties: { site: "komaji", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.191283, 42.621991] },
      properties: { site: "kupari", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.107913, 42.642551] },
      properties: { site: "mcduminceta", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.11096, 42.641297] },
      properties: { site: "mcdustradun", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.206795, 42.622367] },
      properties: { site: "mchotelmlini", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.071102, 42.654167] },
      properties: { site: "pcdudvorilap", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.105253, 42.642758] },
      properties: { site: "pcduhilton", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.195723, 42.623721] },
      properties: { site: "pcsheratonsre", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.262779, 42.560282] },
      properties: { site: "pczralukadu", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.417814, 42.492816] },
      properties: { site: "plociceoiv", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.228759, 42.593365] },
      properties: { site: "prahivac", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.531119, 42.392825] },
      properties: { site: "prevlaka", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.316727, 42.599184] },
      properties: { site: "stravca", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.478752, 42.44238] },
      properties: { site: "vitaljina", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.302497, 42.577101] },
      properties: { site: "vojskido", cluster: 35 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.064513, 44.225219] },
      properties: { site: "begovaczrmanja", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.612161, 43.822203] },
      properties: { site: "bitelic", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.444257, 43.595058] },
      properties: { site: "bobani", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.184804, 43.720983] },
      properties: { site: "bogocin", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.989895, 44.513392] },
      properties: { site: "boricevac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.019544, 44.259355] },
      properties: { site: "brdovodice", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.785096, 44.260003] },
      properties: { site: "celavac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.350767, 43.765306] },
      properties: { site: "crivac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.099754, 44.418624] },
      properties: { site: "dsuvaja", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.10586, 44.470009] },
      properties: { site: "doljani", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.961175, 44.54898] },
      properties: { site: "donjilapac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.158086, 43.853518] },
      properties: { site: "drnisjug", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.1575, 43.858609] },
      properties: { site: "drnismup", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.941802, 44.107511] },
      properties: { site: "ervenik", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.473064, 43.640182] },
      properties: { site: "gizdavac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.966558, 44.579885] },
      properties: { site: "gologuz", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.83958, 44.28757] },
      properties: { site: "gracac", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.372426, 43.967279] },
      properties: { site: "kijevo", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.960231, 43.980466] },
      properties: { site: "kistanje", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.196832, 44.036482] },
      properties: { site: "knin", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.200336, 44.022188] },
      properties: { site: "kninpozar", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.948203, 44.266783] },
      properties: { site: "kontic", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.095527, 44.285084] },
      properties: { site: "kurozeb", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.355155, 43.649419] },
      properties: { site: "lecevicakrava", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.590733, 43.714708] },
      properties: { site: "lucane", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.479143, 43.677755] },
      properties: { site: "muc", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.276641, 43.808878] },
      properties: { site: "otavice", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.123619, 44.076001] },
      properties: { site: "padjene", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.311562, 43.99614] },
      properties: { site: "polaca", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.169855, 43.924748] },
      properties: { site: "promina", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.954195, 43.912632] },
      properties: { site: "roskislap", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.746053, 43.672492] },
      properties: { site: "ruda", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.934313, 43.895263] },
      properties: { site: "rupe", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.638059, 43.702247] },
      properties: { site: "sinj", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.644719, 43.700828] },
      properties: { site: "sinjbuljanova", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.124035, 44.112467] },
      properties: { site: "sudari", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.654663, 43.718615] },
      properties: { site: "susnjevaca", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.209155, 43.898866] },
      properties: { site: "tepljuh", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.493286, 43.596461] },
      properties: { site: "tunelkonjsko", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.181633, 43.740836] },
      properties: { site: "unesic", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.450586, 43.915] },
      properties: { site: "vrlika", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.188529, 44.054867] },
      properties: { site: "zelenbabe", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.51984, 43.731974] },
      properties: { site: "zelovo", cluster: 36 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.539349, 44.830458] },
      properties: { site: "babinpotok", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.540411, 44.434923] },
      properties: { site: "bagunica", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.665547, 44.333351] },
      properties: { site: "baleni", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.187706, 44.520579] },
      properties: { site: "baskeostarije", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.444218, 44.519218] },
      properties: { site: "bilaj", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.739122, 44.688413] },
      properties: { site: "bjelopolje", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.202484, 44.87919] },
      properties: { site: "brezik", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.643434, 44.689849] },
      properties: { site: "bunic", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.372805, 44.546601] },
      properties: { site: "gospic", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.379298, 44.550287] },
      properties: { site: "gospicbudacka", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.344972, 44.780474] },
      properties: { site: "gric", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.242995, 44.866043] },
      properties: { site: "humac", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.16809, 44.938138] },
      properties: { site: "jurkovici", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.478879, 44.62839] },
      properties: { site: "karaula", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.145209, 44.914024] },
      properties: { site: "kompolje", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.703665, 44.7399] },
      properties: { site: "korenica", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.088054, 44.826105] },
      properties: { site: "krasno", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.669631, 44.614928] },
      properties: { site: "krbava", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.117542, 44.830992] },
      properties: { site: "kuterevo", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.757303, 44.78414] },
      properties: { site: "lickapljesivic", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.684145, 44.375506] },
      properties: { site: "lickocerje", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.431133, 44.658028] },
      properties: { site: "lipovaglava", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.557432, 44.662556] },
      properties: { site: "ljubovo", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.936534, 44.680636] },
      properties: { site: "nebljusi", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.885099, 44.408989] },
      properties: { site: "opcuv", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.326351, 44.530435] },
      properties: { site: "ostra", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.235101, 44.869624] },
      properties: { site: "otocac", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.190631, 44.637158] },
      properties: { site: "pazariste", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.382659, 44.649859] },
      properties: { site: "perusic", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.197524, 44.769423] },
      properties: { site: "rudinka", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.375718, 44.790609] },
      properties: { site: "sinac", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.444167, 44.776017] },
      properties: { site: "stipanovgric", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.179853, 44.867286] },
      properties: { site: "svica", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.385231, 44.720011] },
      properties: { site: "tomasevici", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.273179, 44.818629] },
      properties: { site: "tunelplasina", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.659896, 44.274531] },
      properties: { site: "tunelsvrok", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.702829, 44.465456] },
      properties: { site: "tusice", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.765395, 44.531923] },
      properties: { site: "udbina", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.992553, 44.827382] },
      properties: { site: "velpljesivica", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.678329, 44.834098] },
      properties: { site: "velikijavornik", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.428124, 44.848002] },
      properties: { site: "vrhovine", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.635505, 44.433145] },
      properties: { site: "zirbrkici", cluster: 37 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.020028, 45.255423] },
      properties: { site: "bjelolasica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.148774, 45.241325] },
      properties: { site: "bjelsko", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.076385, 45.482775] },
      properties: { site: "blazevci", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.44404, 45.513995] },
      properties: { site: "brajakovobrdo", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.145743, 45.014041] },
      properties: { site: "brinje", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.98355, 45.451144] },
      properties: { site: "brodmor", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.217952, 45.204947] },
      properties: { site: "desmerice", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.096369, 45.135645] },
      properties: { site: "dreznica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.447263, 45.460441] },
      properties: { site: "frketicselo", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.40826, 45.371728] },
      properties: { site: "gzvecaj", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.373289, 45.344177] },
      properties: { site: "generalskistol", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.348052, 45.359303] },
      properties: { site: "gorinci", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.181053, 45.29761] },
      properties: { site: "hreljinka", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.366696, 45.311353] },
      properties: { site: "jakovici", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.398908, 45.446701] },
      properties: { site: "jarcepolje", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.160051, 45.381941] },
      properties: { site: "jelovac", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.191803, 45.045947] },
      properties: { site: "jezerane", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.144152, 45.257114] },
      properties: { site: "klek", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.25356, 45.1374] },
      properties: { site: "kocelj", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.95555, 45.048046] },
      properties: { site: "kriviput", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.054626, 45.379242] },
      properties: { site: "liscevbrig", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.273263, 45.281803] },
      properties: { site: "lubidi", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.125602, 45.428633] },
      properties: { site: "lukovdol", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.028616, 45.305697] },
      properties: { site: "mirkovica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.40951, 45.515978] },
      properties: { site: "netretic", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.108585, 45.022029] },
      properties: { site: "nikinvrh", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.225599, 45.264738] },
      properties: { site: "ogulin", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.332545, 45.435504] },
      properties: { site: "racakbrdo", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.260967, 45.263403] },
      properties: { site: "rasnica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.165954, 45.417917] },
      properties: { site: "severin", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.102781, 45.381818] },
      properties: { site: "stubica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.394464, 45.460214] },
      properties: { site: "toncici", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.344278, 45.257188] },
      properties: { site: "tounj", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.094813, 44.981599] },
      properties: { site: "tunelbrinje", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.227559, 45.096041] },
      properties: { site: "tunelmkapela", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.155881, 45.379418] },
      properties: { site: "tunelvglozac", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.301875, 45.364681] },
      properties: { site: "umol", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.263615, 45.416014] },
      properties: { site: "vdruzac", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.462251, 45.416964] },
      properties: { site: "venacmreznicki", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.302699, 45.208506] },
      properties: { site: "vinicica", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.984523, 44.980172] },
      properties: { site: "vratnikn", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.013138, 44.969076] },
      properties: { site: "vratnikrss", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.077934, 45.374252] },
      properties: { site: "vrbovsko", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.028794, 45.425325] },
      properties: { site: "vucinici", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.069124, 44.971539] },
      properties: { site: "zutalokva", cluster: 38 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.751036, 45.175184] },
      properties: { site: "bribirri", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.854746, 45.460125] },
      properties: { site: "brodnakupi", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.704565, 45.418426] },
      properties: { site: "crnilug", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.796833, 45.392405] },
      properties: { site: "delnice", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.731589, 45.309835] },
      properties: { site: "fuzine", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.637737, 45.35861] },
      properties: { site: "gornjejelenje", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.255472, 45.489959] },
      properties: { site: "gradinari", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.718333, 45.202213] },
      properties: { site: "grizane", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.571239, 45.456573] },
      properties: { site: "guslica", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.61277, 45.328608] },
      properties: { site: "hrasten", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.370824, 45.434168] },
      properties: { site: "klana", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.592398, 45.629319] },
      properties: { site: "kozjivrh", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.688618, 45.453568] },
      properties: { site: "kucnivrh", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.866687, 45.411755] },
      properties: { site: "kupjackivrh", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.805363, 45.475224] },
      properties: { site: "kuzelj", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.856414, 45.141834] },
      properties: { site: "ledenice", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.72048, 45.278808] },
      properties: { site: "lic", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.892283, 45.306273] },
      properties: { site: "marjanica", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.171079, 45.451082] },
      properties: { site: "mune", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.5911, 45.333329] },
      properties: { site: "ostrovicat2", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.630865, 45.593376] },
      properties: { site: "parg", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.218989, 45.490607] },
      properties: { site: "pasjak", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.820637, 45.381007] },
      properties: { site: "petehovac", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.564566, 45.429678] },
      properties: { site: "platak", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.686015, 45.538164] },
      properties: { site: "plescelozmetal", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.695826, 45.336939] },
      properties: { site: "rogoznovip", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.914097, 45.429347] },
      properties: { site: "skradvselce", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.747041, 45.348339] },
      properties: { site: "sopackivrh", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.667471, 45.534405] },
      properties: { site: "svetagora", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.677831, 45.220051] },
      properties: { site: "tribalj", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.639747, 45.577333] },
      properties: { site: "trsce", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.66677, 45.320112] },
      properties: { site: "tuhobiccp", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.962606, 45.374517] },
      properties: { site: "tuneljavkosa", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.745454, 45.340759] },
      properties: { site: "tunelsleme", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.643506, 45.323948] },
      properties: { site: "tuneltuhobic", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.968123, 45.372098] },
      properties: { site: "ugljes", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.805265, 45.215262] },
      properties: { site: "utihovo", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.680553, 45.375763] },
      properties: { site: "zelinmrzlovod", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [14.657593, 45.295627] },
      properties: { site: "zlobin", cluster: 39 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.614984, 45.067988] },
      properties: { site: "brocanac", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.544627, 45.120811] },
      properties: { site: "catrnja", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.720034, 44.886246] },
      properties: { site: "celopek", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.741116, 45.167379] },
      properties: { site: "cetingrad", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.639518, 45.301509] },
      properties: { site: "debelakosa", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.586173, 45.599961] },
      properties: { site: "draganici", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.618081, 45.573427] },
      properties: { site: "draganicit2", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.68021, 44.946354] },
      properties: { site: "dreznik", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.49706, 45.452361] },
      properties: { site: "dugaresa", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.531393, 45.527496] },
      properties: { site: "jelsaka", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.537422, 45.477824] },
      properties: { site: "kabolnica", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.529141, 45.499009] },
      properties: { site: "kapivovara", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.55557, 45.48274] },
      properties: { site: "karakovac", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.549373, 45.504492] },
      properties: { site: "kasilos", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.554049, 45.494616] },
      properties: { site: "katkc", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.54696, 45.490538] },
      properties: { site: "katoplana", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.742858, 45.481943] },
      properties: { site: "kablar", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.429103, 44.977616] },
      properties: { site: "lickajesenica", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.440832, 45.667922] },
      properties: { site: "lovicprekris", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.531537, 45.556308] },
      properties: { site: "mahicno", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.533675, 45.460258] },
      properties: { site: "malasvarca", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.775427, 45.191816] },
      properties: { site: "maljevac", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.580214, 45.407516] },
      properties: { site: "martinscak", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.564268, 45.524935] },
      properties: { site: "orlovac", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.47849, 45.612701] },
      properties: { site: "ozalj", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.385329, 45.084151] },
      properties: { site: "plaski", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.625427, 44.874016] },
      properties: { site: "plitvice", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.618847, 44.883591] },
      properties: { site: "plitvicejezero", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.711542, 45.247027] },
      properties: { site: "prisjeka", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.310374, 45.711787] },
      properties: { site: "radatovici", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.492204, 44.977289] },
      properties: { site: "saborsko", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.345817, 45.608953] },
      properties: { site: "selazakanjska", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.594248, 45.112095] },
      properties: { site: "slunj", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.887708, 45.516658] },
      properties: { site: "sredicko", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.662624, 45.155083] },
      properties: { site: "tatarvaros", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.55382, 45.210261] },
      properties: { site: "vlisac", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.613368, 44.933657] },
      properties: { site: "vlisina", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.522547, 45.446101] },
      properties: { site: "vinica", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.698525, 45.331174] },
      properties: { site: "vojnic", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.640274, 44.995829] },
      properties: { site: "zvirnjak", cluster: 40 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.445647, 46.379605] },
      properties: { site: "ckcrkva", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.425714, 46.379442] },
      properties: { site: "ckjz", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.436425, 46.387819] },
      properties: { site: "ckkersovani", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.458679, 46.385684] },
      properties: { site: "ckpipo", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.450338, 46.397198] },
      properties: { site: "cktegra", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.434657, 46.391296] },
      properties: { site: "cktkc", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.417527, 46.389099] },
      properties: { site: "ckzapad", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.342545, 46.443699] },
      properties: { site: "dragoslavec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.487546, 46.371978] },
      properties: { site: "ivanovec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.381605, 46.500283] },
      properties: { site: "koncovcak", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.416429, 46.335148] },
      properties: { site: "kursanec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.35495, 46.224184] },
      properties: { site: "luzan", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.324053, 46.387963] },
      properties: { site: "macinec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.363505, 46.453816] },
      properties: { site: "mohokos", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.420255, 46.508546] },
      properties: { site: "murskosredx", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.3808, 46.37689] },
      properties: { site: "nedelisce", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.477539, 46.431686] },
      properties: { site: "novoselorok", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.361466, 46.316625] },
      properties: { site: "pcvzdvorana", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.368887, 46.266944] },
      properties: { site: "pcvzlumini", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.546369, 46.465504] },
      properties: { site: "podturen", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.407235, 46.415102] },
      properties: { site: "senkovec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.271437, 46.340534] },
      properties: { site: "sracinec", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.285373, 46.495757] },
      properties: { site: "strigova", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.337519, 46.495626] },
      properties: { site: "svmartin", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.417442, 46.299461] },
      properties: { site: "trnovecind", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.361908, 46.2539] },
      properties: { site: "turcin", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.258573, 46.284939] },
      properties: { site: "vidovecvz", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.327687, 46.304103] },
      properties: { site: "vzbolnica", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.338029, 46.307608] },
      properties: { site: "vzfoi", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.354048, 46.315949] },
      properties: { site: "vzhep", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.35597, 46.301269] },
      properties: { site: "vzistok", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.340595, 46.293614] },
      properties: { site: "vzjug", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.311541, 46.320529] },
      properties: { site: "vzoptujska", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.338163, 46.30354] },
      properties: { site: "vzrr", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.327952, 46.297361] },
      properties: { site: "vzrss", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.336039, 46.305364] },
      properties: { site: "vztkc", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.334957, 46.313699] },
      properties: { site: "vzumirovljenic", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.320841, 46.310921] },
      properties: { site: "vzzapad", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.411053, 46.447066] },
      properties: { site: "zasedbreg", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.4088, 46.282896] },
      properties: { site: "zbelava", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.30773, 46.482277] },
      properties: { site: "zeleznagora", cluster: 41 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.023976, 45.99475] },
      properties: { site: "banscica", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.996516, 46.040575] },
      properties: { site: "bedekovcina", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.982093, 46.232256] },
      properties: { site: "bednja", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.299501, 46.033236] },
      properties: { site: "bisag", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.128055, 46.382554] },
      properties: { site: "brezje", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.27962, 46.110372] },
      properties: { site: "breznickihum", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.198614, 46.125323] },
      properties: { site: "budinscina", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.204903, 46.259147] },
      properties: { site: "cerjetuzno", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.074864, 46.378308] },
      properties: { site: "dubravakrizji", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.056729, 46.384991] },
      properties: { site: "dubravakrizov", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.981755, 46.171158] },
      properties: { site: "golubovec", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.124939, 46.224504] },
      properties: { site: "ivanec", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.124672, 46.233639] },
      properties: { site: "ivanecsjever", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.126838, 46.182441] },
      properties: { site: "ivanscica", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.181743, 46.039006] },
      properties: { site: "jertovechep", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.455005, 46.131197] },
      properties: { site: "kalnik", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.951916, 45.98572] },
      properties: { site: "kamenjak", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.064641, 46.260334] },
      properties: { site: "klenovnik", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.360715, 46.181054] },
      properties: { site: "kljuc", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.177907, 46.053621] },
      properties: { site: "konjscina", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.194867, 46.320127] },
      properties: { site: "ladanje", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.095524, 45.985169] },
      properties: { site: "laz", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.049575, 46.211852] },
      properties: { site: "lepoglava", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.060613, 46.142326] },
      properties: { site: "lobor", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.042807, 46.093985] },
      properties: { site: "mace", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.118434, 46.004976] },
      properties: { site: "marijabistrica", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.334785, 46.164571] },
      properties: { site: "novimarof", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.994299, 46.193839] },
      properties: { site: "ocura", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.224896, 46.347098] },
      properties: { site: "petrijanec", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.309288, 46.198867] },
      properties: { site: "podevcevo", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.254439, 46.161883] },
      properties: { site: "podrute", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.922947, 46.172035] },
      properties: { site: "radoboj", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.247418, 46.225796] },
      properties: { site: "radovan", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.980403, 46.274881] },
      properties: { site: "ravnagora", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.335105, 46.121613] },
      properties: { site: "sajan", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.987467, 46.115549] },
      properties: { site: "strogaca", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.929925, 45.977452] },
      properties: { site: "stubicketopl", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.945141, 46.257805] },
      properties: { site: "trakoscan", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.995348, 46.291172] },
      properties: { site: "visnjica", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.320217, 46.094767] },
      properties: { site: "visoko", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.100171, 46.319271] },
      properties: { site: "voca", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.079777, 46.092445] },
      properties: { site: "zlatar", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.083986, 46.046571] },
      properties: { site: "zlatarbistrica", cluster: 42 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.783529, 46.145393] },
      properties: { site: "bezanec", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.83829, 46.185789] },
      properties: { site: "brezovica", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.736484, 46.058845] },
      properties: { site: "cesarskobrdo", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.669038, 46.15107] },
      properties: { site: "desinic", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.726806, 46.217045] },
      properties: { site: "humbrenta", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.699986, 46.217798] },
      properties: { site: "humnasutli", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.681359, 46.226125] },
      properties: { site: "humnasutliom", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.738797, 46.048141] },
      properties: { site: "klanjec", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.846759, 46.027074] },
      properties: { site: "klanjeckojez", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.626571, 46.166607] },
      properties: { site: "kostrunovbrije", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.720625, 46.001182] },
      properties: { site: "kraljevecnsut", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.871662, 46.163009] },
      properties: { site: "krapina", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.838037, 46.090823] },
      properties: { site: "krapinsketopl", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.741099, 46.201388] },
      properties: { site: "lupinjak", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.855316, 46.253529] },
      properties: { site: "maceljprivat", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.613603, 46.128853] },
      properties: { site: "miljana", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.915354, 45.996177] },
      properties: { site: "oroslavje", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.74882, 46.163171] },
      properties: { site: "pregrada", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.672492, 46.213401] },
      properties: { site: "prislin", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.773772, 45.991458] },
      properties: { site: "radakovo", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.797088, 46.193264] },
      properties: { site: "ravnice", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.921, 46.109762] },
      properties: { site: "semnica", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.827441, 46.09826] },
      properties: { site: "smudakovbrijeg", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.909694, 45.9659] },
      properties: { site: "strmecstubicki", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.882131, 46.041184] },
      properties: { site: "tisanicjarek", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.855595, 46.165695] },
      properties: { site: "tkalci", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.783928, 46.066014] },
      properties: { site: "tuheljsketopl", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.846016, 46.183617] },
      properties: { site: "tunelbrezovica", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.8455, 46.211567] },
      properties: { site: "tuneldjurmanec", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.864607, 46.138374] },
      properties: { site: "tunellevacica", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.853461, 46.164155] },
      properties: { site: "tunelsvtrikr", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.855462, 46.149627] },
      properties: { site: "tunelvidovci", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.847238, 45.995885] },
      properties: { site: "vtrgovisce", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.696212, 46.165438] },
      properties: { site: "vinagora", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.881728, 46.003721] },
      properties: { site: "zabokind", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.910655, 46.029137] },
      properties: { site: "zaboktkc", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.905351, 46.024707] },
      properties: { site: "zabokzivt", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.905654, 46.067695] },
      properties: { site: "zacretje", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.631814, 46.094149] },
      properties: { site: "zagorskasela", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.684603, 46.182658] },
      properties: { site: "zolekovbreg", cluster: 43 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.574063, 46.152444] },
      properties: { site: "apatovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.520418, 46.406094] },
      properties: { site: "belica", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.497645, 45.993144] },
      properties: { site: "bojnikovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.634243, 46.007376] },
      properties: { site: "cvrstec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.797798, 46.319281] },
      properties: { site: "ddubrava", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.654141, 46.372332] },
      properties: { site: "dkraljevec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.864175, 46.249919] },
      properties: { site: "djelekovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.587252, 46.436818] },
      properties: { site: "domasinecx", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.663017, 46.349161] },
      properties: { site: "draskovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.475205, 46.183411] },
      properties: { site: "drenovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.682847, 46.294689] },
      properties: { site: "dubovica", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.687357, 46.417173] },
      properties: { site: "gorican", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.494787, 46.310594] },
      properties: { site: "hecakovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.632644, 46.394153] },
      properties: { site: "hodosanx", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.410553, 46.206649] },
      properties: { site: "hrastovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.471181, 46.23787] },
      properties: { site: "jalzabet", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.62335, 46.041948] },
      properties: { site: "klostarvojak", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.7337, 46.176575] },
      properties: { site: "kostanjevec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.811189, 46.353943] },
      properties: { site: "kotoriba", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.545673, 46.022538] },
      properties: { site: "krizevci", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.544062, 45.980936] },
      properties: { site: "krizevcihssc", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.547409, 46.006094] },
      properties: { site: "krizevcijug", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.535394, 46.015623] },
      properties: { site: "krizevciktc", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.554766, 46.039564] },
      properties: { site: "krizevcisi", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.779835, 46.199421] },
      properties: { site: "kunovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.834467, 46.282682] },
      properties: { site: "legrad", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.690064, 46.234795] },
      properties: { site: "lizindvor", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.615767, 46.240432] },
      properties: { site: "ludbreg", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.606149, 46.252993] },
      properties: { site: "ludbreglukaps", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.544594, 46.281608] },
      properties: { site: "madarasevec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.530341, 46.375875] },
      properties: { site: "malasubotica", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.788863, 46.174987] },
      properties: { site: "mocile", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.541949, 46.027483] },
      properties: { site: "pckrizevciknz", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.604554, 46.334657] },
      properties: { site: "prelog", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.768325, 46.130679] },
      properties: { site: "reka", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.552978, 46.231631] },
      properties: { site: "slanje", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.707943, 46.106468] },
      properties: { site: "sokolovac", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.744563, 46.332532] },
      properties: { site: "svetamarija", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.609856, 46.279888] },
      properties: { site: "svetidjurdj", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.401548, 46.202135] },
      properties: { site: "varazdinsketop", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.407919, 46.226278] },
      properties: { site: "vrtlinovec", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.606868, 45.948092] },
      properties: { site: "zabno", cluster: 44 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.843003, 45.904501] },
      properties: { site: "bjsilos", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.84046, 45.898927] },
      properties: { site: "bjtkc", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.85135, 45.904753] },
      properties: { site: "bjumirovljenic", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.06243, 46.044046] },
      properties: { site: "djurdjevac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.909165, 46.207319] },
      properties: { site: "drnje", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.184851, 46.075619] },
      properties: { site: "ferdinandovac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.848438, 45.929211] },
      properties: { site: "gplavnice", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.058689, 46.197577] },
      properties: { site: "gola", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.982851, 46.217364] },
      properties: { site: "gotalovo", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.961851, 46.019204] },
      properties: { site: "hampovica", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.966543, 46.151623] },
      properties: { site: "hlebine", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.806526, 46.087126] },
      properties: { site: "jagnjedovec", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.100138, 46.011102] },
      properties: { site: "kalinovac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.852498, 46.014579] },
      properties: { site: "kapela", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.835477, 46.187059] },
      properties: { site: "kcbelupo", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.832184, 46.14217] },
      properties: { site: "kcji", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.820418, 46.168847] },
      properties: { site: "kcsilos", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.835369, 46.166727] },
      properties: { site: "kcstadion", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.828749, 46.163126] },
      properties: { site: "kctkc", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.162463, 45.989055] },
      properties: { site: "klostarpodr", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.901821, 46.135372] },
      properties: { site: "koprivnickibr", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.123614, 45.933511] },
      properties: { site: "kozarevac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.123507, 46.048397] },
      properties: { site: "lbknauf", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.200435, 45.883431] },
      properties: { site: "lipica", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.03337, 46.114003] },
      properties: { site: "molve", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.81203, 45.833562] },
      properties: { site: "narta", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.947949, 46.075597] },
      properties: { site: "novigradpodr", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.835898, 46.185316] },
      properties: { site: "pckcbelupo", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.229056, 45.9421] },
      properties: { site: "pitomaca", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.210076, 46.001208] },
      properties: { site: "podravskesesve", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.780059, 45.938054] },
      properties: { site: "predavac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.901584, 45.989721] },
      properties: { site: "rakitnica", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.719854, 45.951214] },
      properties: { site: "rovisce", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.027704, 45.920949] },
      properties: { site: "sandrovac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.964991, 45.839795] },
      properties: { site: "severinbj", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.289866, 45.925168] },
      properties: { site: "stgradac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.758959, 46.016986] },
      properties: { site: "topolovac", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.917635, 45.93462] },
      properties: { site: "vtrojstvo", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.990931, 46.067198] },
      properties: { site: "virje", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.142195, 46.170524] },
      properties: { site: "zdala", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.874167, 45.889174] },
      properties: { site: "zdralovi", cluster: 45 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.036752, 45.374215] },
      properties: { site: "bair", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.912976, 45.446195] },
      properties: { site: "banovajaruga", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.610998, 45.747712] },
      properties: { site: "cazma", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.24891, 45.596777] },
      properties: { site: "davinogradi", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.223283, 45.593104] },
      properties: { site: "daruvar", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.082546, 45.56493] },
      properties: { site: "dezanovac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.879628, 45.599552] },
      properties: { site: "disnik", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.831711, 45.782193] },
      properties: { site: "djurdjic", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.834015, 45.650855] },
      properties: { site: "ggaresnica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.036132, 45.478042] },
      properties: { site: "gaj", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.941967, 45.574725] },
      properties: { site: "garesnica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.716067, 45.521476] },
      properties: { site: "gracenica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.161538, 45.699606] },
      properties: { site: "grubisnopolje", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.013509, 45.653678] },
      properties: { site: "hercegovac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.697895, 45.623573] },
      properties: { site: "kamenica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.181358, 45.639363] },
      properties: { site: "koncanica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.778567, 45.483527] },
      properties: { site: "kutina", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.780185, 45.451674] },
      properties: { site: "kutinaac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.779924, 45.477063] },
      properties: { site: "kutinavatrogas", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.780527, 45.518095] },
      properties: { site: "kutinskaslatin", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.892548, 45.39959] },
      properties: { site: "lipovljani", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.015631, 45.787282] },
      properties: { site: "malapisanica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.754006, 45.614311] },
      properties: { site: "moslavackagora", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.715324, 45.718892] },
      properties: { site: "nselo", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.937549, 45.331255] },
      properties: { site: "novskaac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.983884, 45.333428] },
      properties: { site: "novskasilos", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.181695, 45.492332] },
      properties: { site: "omanovac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.83274, 45.432602] },
      properties: { site: "pakra", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.038391, 45.715918] },
      properties: { site: "pavlovac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.31451, 45.584262] },
      properties: { site: "petrovvrh", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.066877, 45.80168] },
      properties: { site: "pisanica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.944918, 45.794303] },
      properties: { site: "raca", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.755757, 45.482224] },
      properties: { site: "repusnica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.255595, 45.527573] },
      properties: { site: "sirac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.297541, 45.541223] },
      properties: { site: "siracsilos", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.903814, 45.358162] },
      properties: { site: "starasubocka", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.717497, 45.804746] },
      properties: { site: "stefanje", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.847808, 45.535796] },
      properties: { site: "stupovaca", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.938228, 45.387377] },
      properties: { site: "subocka", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.952964, 45.686971] },
      properties: { site: "trnovitica", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.049515, 45.751684] },
      properties: { site: "vgrdjevac", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.107297, 45.67368] },
      properties: { site: "vzdenci", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.599792, 45.605564] },
      properties: { site: "vidrenjak", cluster: 46 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.338733, 45.343021] },
      properties: { site: "babinobrdo", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.509143, 45.49467] },
      properties: { site: "brezovicask", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.44442, 45.476872] },
      properties: { site: "budasevo", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.37566, 45.068098] },
      properties: { site: "dvor", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.098386, 45.342763] },
      properties: { site: "glina", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.225313, 45.415375] },
      properties: { site: "gora", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.325285, 45.161996] },
      properties: { site: "goricka", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.577441, 45.424611] },
      properties: { site: "gusce", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.863545, 45.356229] },
      properties: { site: "gvozd", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.569067, 45.340103] },
      properties: { site: "hrastovac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.799198, 45.189657] },
      properties: { site: "hrvatskadubica", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.909743, 45.268832] },
      properties: { site: "jasenovac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.397541, 45.409589] },
      properties: { site: "komarevo", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.54795, 45.225883] },
      properties: { site: "kostajnica", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.826146, 45.286767] },
      properties: { site: "krapje", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.209466, 45.584706] },
      properties: { site: "lekenik", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.162857, 45.512745] },
      properties: { site: "letovanic", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.528532, 45.25773] },
      properties: { site: "majur", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.804588, 45.316436] },
      properties: { site: "malipetrovac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.376491, 45.588104] },
      properties: { site: "martinskaves", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.352217, 45.434872] },
      properties: { site: "moscenica", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.61325, 45.525001] },
      properties: { site: "osekovo", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.596669, 45.562856] },
      properties: { site: "pcpharmas", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.143357, 45.594971] },
      properties: { site: "pescenicaac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.169751, 45.60129] },
      properties: { site: "pescenicacent", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.282867, 45.441657] },
      properties: { site: "petrinjarss", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.300306, 45.445131] },
      properties: { site: "petrinjasilos", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.629125, 45.556909] },
      properties: { site: "popovacasilos", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.236265, 45.143522] },
      properties: { site: "rujevac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.575552, 45.252834] },
      properties: { site: "selistekostajn", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.38575, 45.457623] },
      properties: { site: "skcaprag", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.387881, 45.476188] },
      properties: { site: "skgaldovo", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.384435, 45.451943] },
      properties: { site: "skpisak", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.365039, 45.493705] },
      properties: { site: "sksilos", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.375277, 45.486995] },
      properties: { site: "sktkc", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.365487, 45.4715] },
      properties: { site: "skviktorovac", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.392242, 45.451245] },
      properties: { site: "skzeljezara", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.364872, 45.479939] },
      properties: { site: "skzibel", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.329337, 45.50595] },
      properties: { site: "stupno", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [15.972193, 45.294748] },
      properties: { site: "topusko", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.144826, 45.193619] },
      properties: { site: "utjesinovici", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.480465, 45.194248] },
      properties: { site: "volinja", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.250797, 45.512723] },
      properties: { site: "zazina", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [16.724867, 45.244411] },
      properties: { site: "zivaja", cluster: 47 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.815126, 45.160824] },
      properties: { site: "bstupnik", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.467232, 45.338371] },
      properties: { site: "banicevac", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.185572, 45.351379] },
      properties: { site: "bijelastijena", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.593954, 45.331017] },
      properties: { site: "brestovac", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.777914, 45.22493] },
      properties: { site: "bucjehrt", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.400024, 45.465744] },
      properties: { site: "bucjepz", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.514339, 45.112759] },
      properties: { site: "davor", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.67778, 45.334808] },
      properties: { site: "fzpztshop", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.280596, 45.223248] },
      properties: { site: "gorice", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.8461, 45.219738] },
      properties: { site: "grizici", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.473125, 45.277119] },
      properties: { site: "gunjavci", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.708202, 45.16021] },
      properties: { site: "luzani", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.195524, 45.455437] },
      properties: { site: "mkrndija", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.545784, 45.416935] },
      properties: { site: "milivojevci", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.395288, 45.251133] },
      properties: { site: "ngradiska", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.38065, 45.260548] },
      properties: { site: "ngradiskacentar", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.642868, 45.194977] },
      properties: { site: "nkapela", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.200562, 45.259079] },
      properties: { site: "okucani", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.205612, 45.23912] },
      properties: { site: "okucaniht", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.753719, 45.166958] },
      properties: { site: "oriovac", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.194105, 45.435379] },
      properties: { site: "pakrac", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.788424, 45.179211] },
      properties: { site: "pavlascak", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.802879, 45.286381] },
      properties: { site: "pleternica", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.426908, 45.360359] },
      properties: { site: "podvrsko", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.332415, 45.385826] },
      properties: { site: "psunj", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.673004, 45.329742] },
      properties: { site: "pzkalvarija", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.679104, 45.325134] },
      properties: { site: "pzrva", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.690702, 45.337578] },
      properties: { site: "pzsilos", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.67771, 45.334526] },
      properties: { site: "pztkc", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.097755, 45.292736] },
      properties: { site: "rajic", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.423363, 45.261177] },
      properties: { site: "resetari", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.513323, 45.232349] },
      properties: { site: "spetrovos", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.322945, 45.304913] },
      properties: { site: "sagovina", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.738981, 45.100746] },
      properties: { site: "slavonskikobas", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.64929, 45.24279] },
      properties: { site: "srednjilipovac", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.238802, 45.149567] },
      properties: { site: "stgradiska", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.37545, 45.361782] },
      properties: { site: "strmachotel", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.668716, 45.401535] },
      properties: { site: "trenkovo", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.659241, 45.467896] },
      properties: { site: "velika", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.663752, 45.440445] },
      properties: { site: "velikank", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.376598, 45.272781] },
      properties: { site: "vinceto", cluster: 48 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.17613, 45.637867] },
      properties: { site: "benicanci", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.575933, 45.759357] },
      properties: { site: "cabuna", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.867922, 45.600365] },
      properties: { site: "cacinci", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.693073, 45.618862] },
      properties: { site: "ceralije", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.939121, 45.693317] },
      properties: { site: "crnac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.169762, 45.752129] },
      properties: { site: "dmiholjac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.427326, 45.668961] },
      properties: { site: "djulovac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.048412, 45.541264] },
      properties: { site: "djurdjenovac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.978159, 45.516476] },
      properties: { site: "fericanci", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.386721, 45.830669] },
      properties: { site: "fzvttshop", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.441031, 45.906677] },
      properties: { site: "gbazje", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.506336, 45.855377] },
      properties: { site: "gradinavt", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.846321, 45.483269] },
      properties: { site: "kapovac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.108009, 45.566803] },
      properties: { site: "klokocevci", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.886665, 45.425167] },
      properties: { site: "kutjevo", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.307297, 45.753399] },
      properties: { site: "loncarica", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.970081, 45.429417] },
      properties: { site: "loncarskivis", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.805407, 45.613529] },
      properties: { site: "mikleus", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.760107, 45.661037] },
      properties: { site: "nbukovica", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.095034, 45.491299] },
      properties: { site: "nasice", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.087612, 45.488728] },
      properties: { site: "nasicevodotoranj", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.038937, 45.451698] },
      properties: { site: "nasicecement", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.980816, 45.785233] },
      properties: { site: "pmoslavina", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.487446, 45.738438] },
      properties: { site: "pepelana", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.260761, 45.774925] },
      properties: { site: "peratovica", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.258242, 45.797199] },
      properties: { site: "peratovicamorh", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.396809, 45.800152] },
      properties: { site: "rezovac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.820297, 45.744267] },
      properties: { site: "sasevo", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.704346, 45.710712] },
      properties: { site: "slatina", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.688717, 45.690708] },
      properties: { site: "slatinahep", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.747599, 45.801109] },
      properties: { site: "sopje", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.302895, 45.862419] },
      properties: { site: "spisicbuk", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.462524, 45.937134] },
      properties: { site: "terepolje", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.666828, 45.8134] },
      properties: { site: "vaska", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.066071, 45.735828] },
      properties: { site: "viljevo", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.584948, 45.856117] },
      properties: { site: "vladimirovac", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.551546, 45.627083] },
      properties: { site: "vocin", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.38699, 45.834648] },
      properties: { site: "vtcentar", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.405054, 45.82312] },
      properties: { site: "vtsilos", cluster: 49 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.295996, 45.185936] },
      properties: { site: "andrijevci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.539793, 45.110939] },
      properties: { site: "babinagreda", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.831713, 45.098961] },
      properties: { site: "bebrina", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.811731, 45.050282] },
      properties: { site: "bosnjaci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.754885, 45.050316] },
      properties: { site: "bosnjacirss", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.910028, 44.919373] },
      properties: { site: "drenovci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.003071, 45.163231] },
      properties: { site: "fzsbpivovara", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.013531, 45.15337] },
      properties: { site: "fzsbtshop", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.490768, 45.15535] },
      properties: { site: "gundinci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.822153, 44.883377] },
      properties: { site: "gunja", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.991257, 45.19672] },
      properties: { site: "kosarevac", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.072857, 45.055981] },
      properties: { site: "lipovac", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.997972, 45.044884] },
      properties: { site: "lubanj", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.835875, 44.956528] },
      properties: { site: "pospodgajci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.955809, 44.864159] },
      properties: { site: "racinovci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.775539, 44.925381] },
      properties: { site: "rajevoselo", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.690485, 45.109058] },
      properties: { site: "rastovica", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.998028, 45.159702] },
      properties: { site: "sbcolosseum", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.010815, 45.166035] },
      properties: { site: "sbdjuro", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.033815, 45.157917] },
      properties: { site: "sbhebrang", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.016079, 45.175377] },
      properties: { site: "sbht", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.023893, 45.153114] },
      properties: { site: "sbji", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.057611, 45.147438] },
      properties: { site: "sbkamp", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.026703, 45.163155] },
      properties: { site: "sbmalipariz", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.059547, 45.171944] },
      properties: { site: "sbsi", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.985451, 45.178612] },
      properties: { site: "sbsz", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.011822, 45.157143] },
      properties: { site: "sbtkc", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.976204, 45.169003] },
      properties: { site: "sbvaros", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.160641, 45.185303] },
      properties: { site: "selna", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.908651, 45.180714] },
      properties: { site: "sibinj", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.486013, 45.065945] },
      properties: { site: "slavsamac", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.97212, 44.950062] },
      properties: { site: "soljani", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.902004, 45.043926] },
      properties: { site: "spacva", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.292219, 45.146305] },
      properties: { site: "sredanci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.634256, 45.098957] },
      properties: { site: "stitar", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.064596, 44.916386] },
      properties: { site: "strosinci", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.396242, 45.158733] },
      properties: { site: "vkopanica", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.414579, 45.132915] },
      properties: { site: "vkopanicaac", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.927486, 44.985634] },
      properties: { site: "vrbanja", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [17.89192, 45.073521] },
      properties: { site: "zbjeg", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.691828, 45.071785] },
      properties: { site: "zupanja", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.693432, 45.078922] },
      properties: { site: "zupanjasilos", cluster: 50 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.469608, 45.754307] },
      properties: { site: "bpetrovoselo", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.692137, 45.795616] },
      properties: { site: "banovobrdo", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.844324, 45.85022] },
      properties: { site: "batina", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.599545, 45.769726] },
      properties: { site: "belimanastir", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.598913, 45.764931] },
      properties: { site: "belimanastirsilos", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.412716, 45.685844] },
      properties: { site: "belisce", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.743448, 45.603859] },
      properties: { site: "bilje", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.458502, 45.592438] },
      properties: { site: "bizovac", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.195568, 45.531918] },
      properties: { site: "breznicanasicka", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.667664, 45.686211] },
      properties: { site: "ceminac", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.564032, 45.522942] },
      properties: { site: "cepin", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.562704, 45.50235] },
      properties: { site: "cepinjug", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.68988, 45.637135] },
      properties: { site: "darda", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.681202, 45.62059] },
      properties: { site: "dardaind", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.416279, 45.308632] },
      properties: { site: "djdvd", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.40819, 45.289013] },
      properties: { site: "djjug", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.418772, 45.319115] },
      properties: { site: "djsilos", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.400188, 45.308887] },
      properties: { site: "djzapad", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.241854, 45.740726] },
      properties: { site: "djurdj", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.695595, 45.886234] },
      properties: { site: "dubosevica", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.410191, 45.310551] },
      properties: { site: "fzdjtshop", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.324318, 45.699173] },
      properties: { site: "gat", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.598761, 45.702217] },
      properties: { site: "jagodnjak", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.419121, 45.412483] },
      properties: { site: "josipovacpunitovacki", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.741188, 45.750526] },
      properties: { site: "knezevivinogradi", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.286743, 45.545792] },
      properties: { site: "koska", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.170727, 45.290886] },
      properties: { site: "levvaros", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.341066, 45.254059] },
      properties: { site: "nperkovci", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.588741, 45.577427] },
      properties: { site: "osjosipovac", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.543882, 45.613232] },
      properties: { site: "petrijevciistok", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.222713, 45.45715] },
      properties: { site: "podgorac", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.39893, 45.488064] },
      properties: { site: "poganovci", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.308931, 45.4067] },
      properties: { site: "potnjani", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.370066, 45.353992] },
      properties: { site: "satnicadjakovacka", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.353155, 45.304592] },
      properties: { site: "selcidjakovacki", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.796909, 45.702282] },
      properties: { site: "sokolovacos", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.420765, 45.222549] },
      properties: { site: "strizivojna", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.777332, 45.779625] },
      properties: { site: "suza", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.38065, 45.564285] },
      properties: { site: "topoline", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.257248, 45.268993] },
      properties: { site: "trnavaos", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.404615, 45.208897] },
      properties: { site: "vrpoljesb", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.506178, 45.438438] },
      properties: { site: "vuka", cluster: 51 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.975739, 45.523277] },
      properties: { site: "aljmas", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.672371, 45.489349] },
      properties: { site: "antunovac", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.870125, 45.518436] },
      properties: { site: "bijelobrdo", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.67754, 45.511528] },
      properties: { site: "brijest", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.981947, 45.488659] },
      properties: { site: "dalj", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.056583, 45.523491] },
      properties: { site: "erdut", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.73834, 45.548801] },
      properties: { site: "fzatoinzenjering", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.68552, 45.559341] },
      properties: { site: "fzosstepincevatshop", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.6782, 45.560032] },
      properties: { site: "fzostrgslobodetshop", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.6373, 45.555099] },
      properties: { site: "fzportanovatshop", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.709152, 45.552727] },
      properties: { site: "oscesmickog", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.702869, 45.55845] },
      properties: { site: "oscetverolist", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.702971, 45.558453] },
      properties: { site: "oscetverolist", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.722404, 45.555172] },
      properties: { site: "oscvjetkova", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.672579, 45.543812] },
      properties: { site: "osdragonjska", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.679762, 45.562186] },
      properties: { site: "oshotelosijek", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.679863, 45.562187] },
      properties: { site: "oshotelosijek", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.717213, 45.544643] },
      properties: { site: "osjugii", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.657803, 45.548183] },
      properties: { site: "oslbmandica", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.64163, 45.536949] },
      properties: { site: "oslivana", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.652941, 45.555737] },
      properties: { site: "ospetrovegore", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.68319, 45.555659] },
      properties: { site: "osradiceva", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.683292, 45.55566] },
      properties: { site: "osradiceva", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.65369, 45.560993] },
      properties: { site: "osretfala", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.633146, 45.563225] },
      properties: { site: "osretfalazapad", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.671119, 45.555572] },
      properties: { site: "ossvraza", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.671221, 45.555573] },
      properties: { site: "ossvraza", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.694025, 45.54921] },
      properties: { site: "ossjenjak", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.694731, 45.544159] },
      properties: { site: "osstadion", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.678797, 45.560759] },
      properties: { site: "ossume", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.6789, 45.56076] },
      properties: { site: "ossume", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.685953, 45.559511] },
      properties: { site: "ostkc", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.686054, 45.559513] },
      properties: { site: "ostkc", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.694726, 45.554602] },
      properties: { site: "ostrpimirova", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.694826, 45.554604] },
      properties: { site: "ostrpimirova", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.695965, 45.560987] },
      properties: { site: "ostvrdja", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.696066, 45.560986] },
      properties: { site: "ostvrdja", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.676716, 45.55106] },
      properties: { site: "osvinkovacka", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.619905, 45.564503] },
      properties: { site: "osvisnjevac", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.73801, 45.544064] },
      properties: { site: "oszeleno", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.669919, 45.561342] },
      properties: { site: "oszobundzije", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.670021, 45.561344] },
      properties: { site: "oszobundzije", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.67612, 45.557426] },
      properties: { site: "oszupanijska", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.693579, 45.544544] },
      properties: { site: "pcosdvorana", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.638788, 45.562523] },
      properties: { site: "pcosfliba", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.7754, 45.530071] },
      properties: { site: "pcoskandit", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.637424, 45.555088] },
      properties: { site: "pcosportanova", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.686354, 45.559383] },
      properties: { site: "pcostkc", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.849716, 45.522114] },
      properties: { site: "sarvas", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.759945, 45.499699] },
      properties: { site: "tenja", cluster: 52 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.263123, 45.196114] },
      properties: { site: "bapska", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.785009, 45.216644] },
      properties: { site: "bazjas", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.740936, 45.303886] },
      properties: { site: "borinci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.95632, 45.377644] },
      properties: { site: "borovonzapad", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.965342, 45.377014] },
      properties: { site: "borovonaselje", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.6873, 45.187885] },
      properties: { site: "cerna", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.661131, 45.44603] },
      properties: { site: "ernestinovo", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.805799, 45.289841] },
      properties: { site: "fzvinkovcitshop", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.002939, 45.350529] },
      properties: { site: "fzvutshop", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.384119, 45.217358] },
      properties: { site: "ilok", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.361052, 45.224731] },
      properties: { site: "ilokzapad", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.686148, 45.282177] },
      properties: { site: "ivankovo", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.906372, 45.250961] },
      properties: { site: "jankovci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.807783, 45.467209] },
      properties: { site: "klisa", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.958458, 45.150974] },
      properties: { site: "komletinci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.697483, 45.414505] },
      properties: { site: "laslovo", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.155327, 45.218208] },
      properties: { site: "lovas", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.565207, 45.289314] },
      properties: { site: "mikanovci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.851246, 45.269932] },
      properties: { site: "mirkovci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.036989, 45.140392] },
      properties: { site: "nijemci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.866554, 45.332535] },
      properties: { site: "nustar", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.8508, 45.331539] },
      properties: { site: "nustarcentar", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.176182, 45.258259] },
      properties: { site: "opatovac", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.885632, 45.145672] },
      properties: { site: "otok", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.965757, 45.366928] },
      properties: { site: "pcvukaufland", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.837772, 45.194534] },
      properties: { site: "privlakavu", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.742687, 45.229832] },
      properties: { site: "rokovci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.280279, 45.233707] },
      properties: { site: "sarengrad", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.546093, 45.359283] },
      properties: { site: "semeljci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.094919, 45.295986] },
      properties: { site: "sotin", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.157234, 45.182602] },
      properties: { site: "tovarnik", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.900286, 45.419067] },
      properties: { site: "trpinja", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.805784, 45.29007] },
      properties: { site: "vkht", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.797577, 45.278301] },
      properties: { site: "vkjug", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.794809, 45.298122] },
      properties: { site: "vklapovci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.820412, 45.275543] },
      properties: { site: "vksilos", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.798283, 45.284283] },
      properties: { site: "vkstadion", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.773079, 45.289421] },
      properties: { site: "vkzapad", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.002602, 45.352493] },
      properties: { site: "vucentar", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.018253, 45.34013] },
      properties: { site: "vumitnica", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [19.003336, 45.345345] },
      properties: { site: "vuvatrogasci", cluster: 53 },
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [18.989393, 45.349602] },
      properties: { site: "vuzapad", cluster: 53 },
    },
  ],
};

var bbox = turf.bbox(points);
var bboxPolygon = turf.bboxPolygon(bbox);

var voronoiPolygons = turf.voronoi(points, bboxPolygon);
// Posto je voronoi izgubio featurese stare, treba dodjeliti clustere nazad u polygone kako bi se mogli kasnije obojati
for (i = 0; i < voronoiPolygons["features"].length; i++) {
  voronoiPolygons["features"][i].properties = {
    id: points["features"][i]["properties"]["cluster"],
  };
}

map.on("load", function () {
  // Dodaje layer voronoi polygona.
  map.addLayer({
    id: "voronoiLayer",
    type: "fill",
    source: {
      type: "geojson",
      data: voronoiPolygons,
    },
    layout: {},
    paint: {
      // Bojanje cluster-a po unique boji, uzima ID iz voronoiPolygons koji je dodan prije
      "fill-color": [
        "case",
        ["==", ["get", "id"], 1],
        "#a9002a",
        ["==", ["get", "id"], 2],
        "#60df76",
        ["==", ["get", "id"], 3],
        "#b50ea0",
        ["==", ["get", "id"], 4],
        "#259e0d",
        ["==", ["get", "id"], 5],
        "#d35fe4",
        ["==", ["get", "id"], 6],
        "#7ebb0f",
        ["==", ["get", "id"], 7],
        "#3742c0",
        ["==", ["get", "id"], 8],
        "#b9ce1c",
        ["==", ["get", "id"], 9],
        "#8a72fe",
        ["==", ["get", "id"], 10],
        "#1c7300",
        ["==", ["get", "id"], 11],
        "#f761df",
        ["==", ["get", "id"], 12],
        "#205f15",
        ["==", ["get", "id"], 13],
        "#c685ff",
        ["==", ["get", "id"], 14],
        "#828400",
        ["==", ["get", "id"], 15],
        "#0178f2",
        ["==", ["get", "id"], 16],
        "#f8761e",
        ["==", ["get", "id"], 17],
        "#02a7fd",
        ["==", ["get", "id"], 18],
        "#c69000",
        ["==", ["get", "id"], 19],
        "#72349e",
        ["==", ["get", "id"], 20],
        "#b7d165",
        ["==", ["get", "id"], 21],
        "#294ea3",
        ["==", ["get", "id"], 22],
        "#ff9d4f",
        ["==", ["get", "id"], 23],
        "#007dce",
        ["==", ["get", "id"], 24],
        "#e93139",
        ["==", ["get", "id"], 25],
        "#7bda97",
        ["==", ["get", "id"], 26],
        "#e00072",
        ["==", ["get", "id"], 27],
        "#019b85",
        ["==", ["get", "id"], 28],
        "#ff94fd",
        ["==", ["get", "id"], 29],
        "#617100",
        ["==", ["get", "id"], 30],
        "#d0a4ff",
        ["==", ["get", "id"], 31],
        "#b16900",
        ["==", ["get", "id"], 32],
        "#9bb2ff",
        ["==", ["get", "id"], 33],
        "#aa4c00",
        ["==", ["get", "id"], 34],
        "#0072a3",
        ["==", ["get", "id"], 35],
        "#ff8465",
        ["==", ["get", "id"], 36],
        "#019ca1",
        ["==", ["get", "id"], 37],
        "#ff6bad",
        ["==", ["get", "id"], 38],
        "#abd28b",
        ["==", ["get", "id"], 39],
        "#6e3e8b",
        ["==", ["get", "id"], 40],
        "#e7c16b",
        ["==", ["get", "id"], 41],
        "#5d497e",
        ["==", ["get", "id"], 42],
        "#dbc489",
        ["==", ["get", "id"], 43],
        "#9e1753",
        ["==", ["get", "id"], 44],
        "#8ca26d",
        ["==", ["get", "id"], 45],
        "#ff8edd",
        ["==", ["get", "id"], 46],
        "#5e5700",
        ["==", ["get", "id"], 47],
        "#e9b6e4",
        ["==", ["get", "id"], 48],
        "#4b087e",
        ["==", ["get", "id"], 49],
        "#ff7da2",
        ["==", ["get", "id"], 50],
        "#a68959",
        ["==", ["get", "id"], 51],
        "#936995",
        ["==", ["get", "id"], 52],
        "#ffa477",
        ["==", ["get", "id"], 53],
        "#853d37",
        "#873d19",
      ],
      "fill-opacity": 0.7,
    },
  });

  map.addLayer({
    id: "bboxPolygon",
    type: "line",
    source: {
      type: "geojson",
      data: bboxPolygon,
    },
    layout: {},
    paint: {
      // Bojanje cluster-a po unique boji, uzima ID iz voronoiPolygons koji je dodan prije
      "line-opacity": 1,
    },
  });

  // Layer koji dodaje tocke svakog site-a
  map.addLayer({
    id: "sitesLayer",
    type: "circle",
    source: {
      type: "geojson",
      data: points,
    },
    layout: {},
    paint: {
      "circle-radius": 2,
      "circle-color": "#000000",
      "circle-opacity": 0.6,
    },
  });

  // Dodaje outline na voronoiPolygon jer se izgubi outline kada se smanji opacity
  map.addLayer({
    id: "voronoiOutlineLayer",
    type: "line",
    source: {
      type: "geojson",
      data: voronoiPolygons,
    },
    paint: {
      "line-color": [
        "case",
        ["==", ["get", "id"], 1],
        "#a9002a",
        ["==", ["get", "id"], 2],
        "#60df76",
        ["==", ["get", "id"], 3],
        "#b50ea0",
        ["==", ["get", "id"], 4],
        "#259e0d",
        ["==", ["get", "id"], 5],
        "#d35fe4",
        ["==", ["get", "id"], 6],
        "#7ebb0f",
        ["==", ["get", "id"], 7],
        "#3742c0",
        ["==", ["get", "id"], 8],
        "#b9ce1c",
        ["==", ["get", "id"], 9],
        "#8a72fe",
        ["==", ["get", "id"], 10],
        "#1c7300",
        ["==", ["get", "id"], 11],
        "#f761df",
        ["==", ["get", "id"], 12],
        "#205f15",
        ["==", ["get", "id"], 13],
        "#c685ff",
        ["==", ["get", "id"], 14],
        "#828400",
        ["==", ["get", "id"], 15],
        "#0178f2",
        ["==", ["get", "id"], 16],
        "#f8761e",
        ["==", ["get", "id"], 17],
        "#02a7fd",
        ["==", ["get", "id"], 18],
        "#c69000",
        ["==", ["get", "id"], 19],
        "#72349e",
        ["==", ["get", "id"], 20],
        "#b7d165",
        ["==", ["get", "id"], 21],
        "#294ea3",
        ["==", ["get", "id"], 22],
        "#ff9d4f",
        ["==", ["get", "id"], 23],
        "#007dce",
        ["==", ["get", "id"], 24],
        "#e93139",
        ["==", ["get", "id"], 25],
        "#7bda97",
        ["==", ["get", "id"], 26],
        "#e00072",
        ["==", ["get", "id"], 27],
        "#019b85",
        ["==", ["get", "id"], 28],
        "#ff94fd",
        ["==", ["get", "id"], 29],
        "#617100",
        ["==", ["get", "id"], 30],
        "#d0a4ff",
        ["==", ["get", "id"], 31],
        "#b16900",
        ["==", ["get", "id"], 32],
        "#9bb2ff",
        ["==", ["get", "id"], 33],
        "#aa4c00",
        ["==", ["get", "id"], 34],
        "#0072a3",
        ["==", ["get", "id"], 35],
        "#ff8465",
        ["==", ["get", "id"], 36],
        "#019ca1",
        ["==", ["get", "id"], 37],
        "#ff6bad",
        ["==", ["get", "id"], 38],
        "#abd28b",
        ["==", ["get", "id"], 39],
        "#6e3e8b",
        ["==", ["get", "id"], 40],
        "#e7c16b",
        ["==", ["get", "id"], 41],
        "#5d497e",
        ["==", ["get", "id"], 42],
        "#dbc489",
        ["==", ["get", "id"], 43],
        "#9e1753",
        ["==", ["get", "id"], 44],
        "#8ca26d",
        ["==", ["get", "id"], 45],
        "#ff8edd",
        ["==", ["get", "id"], 46],
        "#5e5700",
        ["==", ["get", "id"], 47],
        "#e9b6e4",
        ["==", ["get", "id"], 48],
        "#4b087e",
        ["==", ["get", "id"], 49],
        "#ff7da2",
        ["==", ["get", "id"], 50],
        "#a68959",
        ["==", ["get", "id"], 51],
        "#936995",
        ["==", ["get", "id"], 52],
        "#ffa477",
        ["==", ["get", "id"], 53],
        "#853d37",
        "#873d19",
      ],
      "line-width": 1,
    },
  });

  // Dodaje layer oko hrvatske.
  map.addLayer({
    id: "reverseCroatia",
    type: "fill",
    source: {
      type: "geojson",
      data: "./data/reverseCroatia.geojson",
    },
    layout: {
      visibility: "none",
    },
    paint: {
      "fill-opacity": 0.5,
      "fill-color": "#363636",
    },
  });

  // When a click event occurs on a feature in the states layer, open a popup at the
  // location of the click, with description HTML from its properties.
  map.on("click", "voronoiLayer", function (e) {
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(e.features[0].properties.id)
      .addTo(map);
  });

  // Change the cursor to a pointer when the mouse is over the states layer.
  map.on("mouseenter", "voronoiLayer", function () {
    map.getCanvas().style.cursor = "pointer";
  });

  // Change it back to a pointer when it leaves.
  map.on("mouseleave", "voronoiLayer", function () {
    map.getCanvas().style.cursor = "";
  });

  var toggleableLayerIds = ["voronoiLayer", "reverseCroatia"];

  for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement("a");
    link.href = "#";
    link.className = "active";
    link.textContent = id;

    link.onclick = function (e) {
      var clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      var visibility = map.getLayoutProperty(clickedLayer, "visibility");

      if (visibility === "visible") {
        map.setLayoutProperty(clickedLayer, "visibility", "none");
        this.className = "";
      } else {
        this.className = "active";
        map.setLayoutProperty(clickedLayer, "visibility", "visible");
      }
    };

    var layers = document.getElementById("menu");
    layers.appendChild(link);
  }
});
