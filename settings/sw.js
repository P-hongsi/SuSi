// Change this to your repository name
var GHPATH = '/SuSi';

// Choose a different app prefix name
var APP_PREFIX = '수시';

// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'V_0.2';

// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/Bsu/Career_bsu.html`,
  `${GHPATH}/Bsu/Common_bsu.html`,
  `${GHPATH}/Bsu/Compare_bsu.html`,
  `${GHPATH}/etc/icon-192.png`,
  `${GHPATH}/etc/icon-512.png`,
  `${GHPATH}/etc/index.jpg`,
  `${GHPATH}/etc/indexrb.png`,
  `${GHPATH}/etc/logob.png`,
  `${GHPATH}/etc/logol.png`,
  `${GHPATH}/etc/logow.png`,
  `${GHPATH}/etc/noresponse.html`,
  `${GHPATH}/settings/manifest.webmanifest`,
  `${GHPATH}/etc/ThxU.html`
]

