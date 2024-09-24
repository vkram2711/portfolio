'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5fc10240b73452c6a64964c44206397c",
"index.html": "de0493c8382a32734efb4c1658959565",
"/": "de0493c8382a32734efb4c1658959565",
"main.dart.js": "e8e05669a015aec88055033097df9245",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/favicon-16x16.png": "b34cecfd113bbf479dc56f8c32e046c5",
"icons/favicon.ico": "b8a4129653f0f663e2d690537d3bf587",
"icons/apple-icon.png": "a6a006cba0efa61ba203fd7bb3809ab3",
"icons/apple-icon-144x144.png": "f41def693f3974d9c128c5a6a92b09f4",
"icons/android-icon-192x192.png": "8fe713d6b0f7877a3221827b09195902",
"icons/apple-icon-precomposed.png": "9eeda01db2657b58a4f5004e433f926e",
"icons/apple-icon-114x114.png": "538652b772c0c4dc51d9abc6cbcf1096",
"icons/ms-icon-310x310.png": "9d6ca19e443d45e4b08ec1263ce72b29",
"icons/ms-icon-144x144.png": "3d0ccab5793cf8d9beaa33be2296ad2b",
"icons/apple-icon-57x57.png": "792eadde4a3a21a2474d4b7be8c5b173",
"icons/apple-icon-152x152.png": "d0c79043e61a01b9d23665d43d7ecca7",
"icons/ms-icon-150x150.png": "6fe17fc230f7f969e1dcb1a50b4f80f9",
"icons/android-icon-72x72.png": "de7d76d75f8bbd6b254b54aaf776aa13",
"icons/android-icon-96x96.png": "b5c3d867179bc988a345527dcf7c3329",
"icons/android-icon-36x36.png": "da3ac06b2577f17479d1028c1c2018f4",
"icons/apple-icon-180x180.png": "4d258eef488453557271685b63984411",
"icons/favicon-96x96.png": "f844915cabe6be20e7f2c1bb5b70d8da",
"icons/android-icon-48x48.png": "e050dc4303aa870d24d6d065add6b9ee",
"icons/apple-icon-76x76.png": "3cb0128fd443e09c501c2990784c1e41",
"icons/apple-icon-60x60.png": "005230cd2b7ba2def5ace69a9e76f274",
"icons/android-icon-144x144.png": "f41def693f3974d9c128c5a6a92b09f4",
"icons/apple-icon-72x72.png": "de7d76d75f8bbd6b254b54aaf776aa13",
"icons/apple-icon-120x120.png": "1e160a16c36f8e242ec5bf7c523c02e6",
"icons/favicon-32x32.png": "2e3ac85d2bdc76687f04ebcda2305291",
"icons/ms-icon-70x70.png": "bfcb730527568e61216ed7309110b34f",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
".git/config": "92fb9cbba05881ac3f73d4d20dad864a",
".git/objects/3b/b035b908e524cab8cab70ad1f144c45be6232d": "70054f7006d78ee6ca9e8ff11c497dc0",
".git/objects/67/0f62ecd3681770bbe252b0b75e905ab029a0d2": "602c05b28899df9c9ca9dcb77a12efb6",
".git/objects/5a/d8e4f4fb6ddbb14554bca80d04e920bdfb4c29": "945106b7a5380f0acf83b6b851d2d4b9",
".git/objects/9d/897c0397347fe3f695dd4475cd35b19550eb46": "da6beef914ddd5752c96089a350556c4",
".git/objects/a4/27b8c047dbc1926fcf02c4b7885ea547fe5cdd": "2ee0087670cb1eab5fb33ae3eac605dd",
".git/objects/c9/2a1b05ab45acffb437edd5cf41743dbfb6c144": "9c674b715c89e8807cd727b72b26d4a7",
".git/objects/ca/590ad8391968e025e386fdd2fe75bf353de110": "2a3d59d8c660dfe34f7f3a363f76e2d8",
".git/objects/ed/4210a44a5ffda2f99aa0d0f7c697590e557db6": "6d4a2051a1ba355773539405f2394ae3",
".git/objects/c1/1e1a1b1169ab00ed7e65629d5096f5200adec3": "8f425f9d3ee98af671a9f2f7d6218dbe",
".git/objects/16/33f77e3b0707f6b61e25698691d72f15c7ea7f": "5e96137e354a6b6b568e14ede0864c35",
".git/objects/74/88010ee2f03ec099a3a08427f8d6ef2d0a8a18": "c92571f3910775f81eb0f1b171a90241",
".git/objects/7e/c34602f364902c81e6022e6d0dbf61aedea2a3": "a0a5c5338df7e69422aa68e3a7734a7d",
".git/objects/10/d783a7f0cec8e1a910033341213fc52b97f2ad": "fe96069674aa4a3de78e01e041a9b719",
".git/objects/19/d6c4bc9b319da594fa7294767df2b7bb8ce8db": "f30215a8a740412b7f5a988113affc1f",
".git/objects/26/4b6d17f0e9b218cac9b802529d69953dec12b6": "f984a769e5360633cf98227554ac6e65",
".git/objects/81/dfe412d661676078173ec086859209a7da5bca": "e3f611cc200609f7bedb6ff1c4075745",
".git/objects/07/63ebde10d134e761ae01cff11168de8499c405": "26024ef03a4aa48712cc41db7f0a7961",
".git/objects/53/a08c35fd26c3d24c1e6c9d78c430cf655a0152": "5e21779069da5cd51cd35b8e18e930c8",
".git/objects/01/3d4a6a53334fae827a32824eaf51a889396514": "1035270d429ce7cb68c5f0febf0fc0f9",
".git/objects/52/f7b266440c9fa0e2cb1f9909e4ebaa79644a54": "0ff2808dcbafd9a1d877c79f75305755",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/c2/d707dab888144a6ef3054b4b3ed85f1ec681d2": "15592d36b502d97e4c21bdbf471c74ea",
".git/objects/f1/28e515ab0bfea2dad6f8114fb6a9ed9bdc83a2": "efbc2cde7523053dd18b641764301673",
".git/objects/2c/77bed8f8ab7d234a9e88be7792962adfe6366d": "bfb631592bc48cb10b80903cdc226878",
".git/objects/48/694091e6550e9ea568cb13ad32fc2abf722a7e": "0c9e93ebaba08ae937cd8124ce221d95",
".git/objects/1e/548fb78d9ff4b014ca82f842e99181c78ab75b": "bbccc2dc5c57ab0aea4835a174a59013",
".git/objects/4a/9e9be1aa25913e0865b0dd6223233fe9eaa414": "203cfb21430a0321c1225200a5b64d8d",
".git/objects/12/5958830bf45767aa57a748d3fa6cfe56788e9d": "16f0773279de0ce013df6e0e25e37fcf",
".git/objects/13/e9ea987c2187d323d24ae27fcf0bdf7bfbf32c": "2c8f8c9a1439a55dc2c5ea8f65db34ff",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a28e942162ab23cb19775f2e49295571",
".git/logs/refs/heads/main": "a28e942162ab23cb19775f2e49295571",
".git/logs/refs/remotes/origin/main": "bf7cf8b014f61dd0eaf1e4747c86a5be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2d1a964ae6039ff1f5960200260359d3",
".git/refs/remotes/origin/main": "2d1a964ae6039ff1f5960200260359d3",
".git/index": "d47933dd760c9a2ca646f789d45f3a06",
".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
"assets/AssetManifest.json": "0d3f14b538cebce93aed683735b70c7b",
"assets/NOTICES": "9c1433f8e9e10bc49d24b5399857e108",
"assets/FontManifest.json": "6988207098bf63697130a94f712e4708",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/face.jpg": "482a852a23174469115ef75d23f64ce7",
"assets/assets/taxi_finder.svg": "c0e1529a6df9176b45bfc4d61cb0af10",
"assets/assets/dev-better.png": "12c7cf8ae1404b5c26b37520bb2c4869",
"assets/assets/bond.png": "ede24ee9e8979fe977b8961727f068de",
"assets/assets/fittrack.png": "91daf69301803e6e5375cd9cb9b2a644",
"assets/assets/fonts/proxima_nova/ProximaNova-Regular.ttf": "1fc524a22c99e8d63393ecfe238e3d35",
"assets/assets/fonts/proxima_nova/ProximaNova-RegularIt.ttf": "3c67e998cb6a35d451221e786773cbe6",
"assets/assets/ai_fresh.png": "973c71777b4a8240894e5ad101f10adf",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
