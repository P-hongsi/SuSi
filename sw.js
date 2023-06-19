// Change this to your repository name
var GHPATH = '/SuSi';

// Choose a different app prefix name
var APP_PREFIX = '수시';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/Bsu/Career_bsu.html`,
  `${GHPATH}/Bsu/Common_bsu.html`,
  `${GHPATH}/Bsu/Compare_bsu.html`,
  `${GHPATH}/Bsu/Select_bsu.html`,
  `${GHPATH}/Bsu/careerT.html`,
  `${GHPATH}/Bsu/commonT.html`,
  `${GHPATH}/Bsu/compareT.html`,
  `${GHPATH}/Bsu/selectT.html`,
  `${GHPATH}/Bku/Career_bsu.html`,
  `${GHPATH}/Bku/Common_bsu.html`,
  `${GHPATH}/Bku/Compare_bsu.html`,
  `${GHPATH}/Bku/careerT.html`,
  `${GHPATH}/Bku/commonT.html`,
  `${GHPATH}/Bku/compareT.html`,
  `${GHPATH}/etc/icon-192.png`,
  `${GHPATH}/etc/icon-98.png`,
  `${GHPATH}/etc/icon-78.png`,
  `${GHPATH}/etc/icon-512.png`,
  `${GHPATH}/etc/icon-196.png`,
  `${GHPATH}/etc/icon-144.png`,
  `${GHPATH}/etc/catqr.png`,
  `${GHPATH}/etc/indexrb.webp`,
  `${GHPATH}/etc/info.html`,
  `${GHPATH}/etc/logob.png`,
  `${GHPATH}/etc/logol.png`,
  `${GHPATH}/etc/logow.png`,
  `${GHPATH}/etc/noresponse.html`,
  `${GHPATH}/etc/ThxU.html`,
  `${GHPATH}/etc/model_compressed.glb`,
  `${GHPATH}/js/3d.js`,
  `${GHPATH}/js/import.js`,
  `${GHPATH}/js/create.js`,
  `${GHPATH}/js/gesture.js`,
  `${GHPATH}/js/goto.js`,
  `${GHPATH}/js/navbar.js`,
  `${GHPATH}/js/3d.js`,
  `${GHPATH}/js/sworker.js`
]

