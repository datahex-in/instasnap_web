'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f966b5dbcdd80edfcfb4a505c8f9fbd3",
"version.json": "f94c22b7d87be6e4a377502049357fb7",
"index.html": "c420cef82f7198e0a66eb9e23e8c63df",
"/": "c420cef82f7198e0a66eb9e23e8c63df",
"main.dart.js": "ccf3f019db3746d3629473d27b301681",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "3b3be406b3256083fea30a1c45296c7d",
"icons/Icon-192.png": "ce9c1de182383a835b442a6162bc4822",
"icons/Icon-maskable-192.png": "ce9c1de182383a835b442a6162bc4822",
"icons/Icon-maskable-512.png": "79610d418dd7f8db1ec9a7c0533b0534",
"icons/Icon-512.png": "79610d418dd7f8db1ec9a7c0533b0534",
"manifest.json": "815a418c63fbb4b7a2bebab86e94bae8",
"assets/AssetManifest.json": "becbdf26c2d457144d63327055ca4d63",
"assets/NOTICES": "1ed7dc16a1b35b2bb7b69894147af285",
"assets/FontManifest.json": "4ca1891ddbcb5041b2b99839afd176ff",
"assets/AssetManifest.bin.json": "85040c6333d0837568d8a9e05d17eb66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "21cc3fa0936070a7d2b1f5553e476427",
"assets/fonts/MaterialIcons-Regular.otf": "5e06828ce8fca3b4696f8b499794874d",
"assets/assets/images/selfie_model.svg": "6e644033558ec92b47ae6f22b4c87e85",
"assets/assets/images/male.png": "25d8f8019ecc0e826f8e4fbbdab346aa",
"assets/assets/images/face_id.png": "a12c5b47de27de123f38553e040cf91a",
"assets/assets/images/no_image.svg": "bd86cc3f8464be52a72c59f3261dc540",
"assets/assets/images/female.png": "5df12d2f2a12427230e35f09bd09660c",
"assets/assets/images/avatar.png": "b583dcfa2917182bf3ed6172016b5478",
"assets/assets/images/logo_banner.svg": "00052598def2225c3453a296e2c5903d",
"assets/assets/images/noPhoto.png": "f917269ad8c8ef8671091c6ede7c70b5",
"assets/assets/images/postedImage.png": "5334fd656acaf8c61da0ee49f6a544ef",
"assets/assets/animation.json": "91aaed40b861f34fa957fde99b05c8c7",
"assets/assets/icons/spark_icon.svg": "1d0e88f54b68a37ebe6ec5a070edaf71",
"assets/assets/icons/AiIcon.svg": "1d0e88f54b68a37ebe6ec5a070edaf71",
"assets/assets/icons/error-warning-fill.svg": "d9289d255e293f1b2eb8722ba0c55b40",
"assets/assets/icons/no_data_image.svg": "5b5b543ff858cff4368b420e89420203",
"assets/assets/icons/support_icon.svg": "3ecbe87fcd832f29efd2216c2a8fcef0",
"assets/assets/icons/male.svg": "8b37affcfac183b59a1285ae7d9f1c7b",
"assets/assets/icons/appLogo.svg": "7454b9b4c9fd2ccda69efeedd209b98f",
"assets/assets/icons/download-cloud-2-line.svg": "447c9277744f64361a732a20e090a0ee",
"assets/assets/icons/genderIcon.svg": "ac145726d216eb1d8c006917b17b1688",
"assets/assets/icons/companyIcon.svg": "4e0a209fb0084b6da2295086121b99e2",
"assets/assets/icons/like_icon.svg": "574c91a342a54ec573644edd4e28b08d",
"assets/assets/icons/bottom_nav_icons/selectedHome.svg": "596d98d7c326792c95e07311bab87f63",
"assets/assets/icons/bottom_nav_icons/home.svg": "7a69695bdedf68d207f38417214d618c",
"assets/assets/icons/bottom_nav_icons/post.svg": "9c05c1e5455a963f50a834119754af25",
"assets/assets/icons/bottom_nav_icons/selectedPost.svg": "91874d511d0ec81e6ff0012f8f6f2275",
"assets/assets/icons/bottom_nav_icons/navNotification.svg": "af39a7c79950b57e499c447264b0656f",
"assets/assets/icons/bottom_nav_icons/highlights.svg": "c08e32e91988036cd6283c848b33f95c",
"assets/assets/icons/bottom_nav_icons/selectedHighlights.svg": "cfabe751202f7c475e4877c377371767",
"assets/assets/icons/bottom_nav_icons/selectedNotification.svg": "e542278187bad570cc5d6a7589c4d8ee",
"assets/assets/icons/celebrate_icon.svg": "e9c9182e2ee202cc35f2605820b0d53e",
"assets/assets/icons/mail.svg": "f86d7527c71f02ba9250321277822037",
"assets/assets/icons/arrow-down-s-line.svg": "f7214ff709f19906e75487355ae52fc7",
"assets/assets/icons/downloadButton.svg": "d63d1959b599add9c29f20faad75d348",
"assets/assets/icons/insta-snap-logo.svg": "8981b039c534557d971c65105ef134b7",
"assets/assets/icons/insightful_icon.svg": "b3901e53d3baa265263d26b8ec1c2299",
"assets/assets/icons/phoneIcon.svg": "94e2598431d685a394da91d60085db67",
"assets/assets/icons/designationIcon.svg": "b7d0e21dea2eef506b74091bc5d77de4",
"assets/assets/icons/share-line.svg": "b6a33863b415c50ab7b1f8e0de1c0222",
"assets/assets/icons/viewedIcon.svg": "788815a491407440a6a978024476fb54",
"assets/assets/icons/smile_emoji.svg": "7bddd537903be65ffe2f293a3b28478e",
"assets/assets/icons/heart_icon.svg": "0d93ca30b938ab7ecf6aa3b2f17727c5",
"assets/assets/icons/India.svg": "b6497916998d6a00af8be485d0e65212",
"assets/assets/icons/logo_1.svg": "a097828249f08267250a7182bef41452",
"assets/assets/icons/selfie_frame.svg": "fb680fde01b236460f8fd3fd538eeca6",
"assets/assets/icons/dotList.svg": "c7d370b0f0ffb2113d10e7a1e6cd2c31",
"assets/assets/icons/likeButton.svg": "a32d7853b74dc86488e3c7282563204d",
"assets/assets/icons/PoweredByEventhex.svg": "e77ce3ac1a59ea360f6e1ac21cd916b3",
"assets/assets/icons/conclaveLogo.svg": "00052598def2225c3453a296e2c5903d",
"assets/assets/icons/otpIcon.svg": "e3b2b6a36292e925ca55c2c963fab32f",
"assets/assets/icons/Frame.png": "ae6e17e57b203ccc05b78da2cf2e271d",
"assets/assets/icons/information-fill.svg": "b1f094560cd51a444d25e950c7d656fc",
"assets/assets/icons/arrow-left-s-line.svg": "246390afc1d19d4c5f1d755ac832ee88",
"assets/assets/icons/globe.svg": "ca39567ea3cd55cff0641cd85965de87",
"assets/assets/icons/logo.svg": "a097828249f08267250a7182bef41452",
"assets/assets/icons/shareButton.svg": "30be3ee559606073ef02296ff4763440",
"assets/assets/icons/userIcon.svg": "b1bece4def431499e353604b9d100219",
"assets/assets/icons/female.svg": "26f2830470f4f6358b4c0e062c082f0b",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/Caveat-VariableFont_wght.ttf": "9bd9bde59dc816ef93cd18069b65a40e",
"assets/assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
