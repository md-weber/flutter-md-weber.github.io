'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "883bfabdead4461c25a9134bbec0f7ae",
"/main.dart.js": "b25201deed3e7c0093695bd3c8d736c0",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "2c41b57c08cf2add8c8c2bf9d9348d55",
"/.git/config": "06c408ed4bbb1ddb3e8df647d4a95556",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
"/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"/.git/objects/9e/40448af4e0c9eaeddaed1a11c68a09879ea15b": "d82f0427fa911e492e056e01332dfad0",
"/.git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
"/.git/objects/3c/97b7ee1e9b7cd753d28e038395a7e78d401bc8": "e31439ebe428e011d6742a18835439a1",
"/.git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
"/.git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
"/.git/objects/94/7afdaec0a1d4384e87d32f99bef87b7fe571d7": "63ae4243eb8421934ec4d411df23ce27",
"/.git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
"/.git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
"/.git/objects/d1/6cd4589204680a8d09f9b1ae22d09b756eec11": "8ec437d4a6299a4930e09732d63e1d72",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
"/.git/objects/fd/a7193fd2fc7b6a85c045b571eef03b19cb896e": "e48ca01c2e7a880f77710c703ea360f1",
"/.git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
"/.git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
"/.git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
"/.git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
"/.git/objects/4e/fb796fbf26919a11cd46708f04e41af681954a": "fbe3110100b521ec769a6e98b5f12f1d",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/11/3df3f3293e8e39cefbe6486977de727f75b747": "2d617a7cb05be07f1084216e67401259",
"/.git/objects/7c/1ea7a54750a0b053fcc1963afb3b88bbb89136": "37c5dc23eb44e9d18a309c22a30883ab",
"/.git/objects/17/93ed6c9e18a4328fb4d7afec5d9a8bb351b285": "39cab3b26efae5b89fa8acebd7bfe799",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/8a/b2e8d037bf6146aabb3f0b4ac13516649bcb3f": "2d2d4422d8f4089f8a7fe357d267edf3",
"/.git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
"/.git/objects/43/ebc22fbd43d9619a6de6b1c0ced88167f302dc": "413cdcc3be6d550282315dcb4cd4c197",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
"/.git/objects/5e/d15b2bb9127c5b8a7b937c0b489c8e5ec1b0c8": "740b5c6d37bff2e9777cd4d9c7e8c761",
"/.git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
"/.git/objects/a7/cbaeacf90547cde48deaf11cbea190cdb255ee": "1a7945081c77eb242d062a00472db8f2",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/b0/f0c658650d5735c7c9591fb02f47c03411d02b": "0764e54299c14de6eb95ef30e316e5ff",
"/.git/objects/f8/11519e5fe5bed683c12bbe53cbc65db8234b0c": "1b0ae3bb0be6a83fc536c6260c9249ed",
"/.git/objects/ce/4766b77c1ae44ea9af632cdf0c4f40ad3b8bd5": "f2db7b09fb07f78aed242152a1a7f3ee",
"/.git/objects/1b/73ec61d908e47b31148db5c0b3d27e6902e61c": "d593f1fd959947dc64b0fa1375a7ea47",
"/.git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
"/.git/objects/15/70452c55a9a4cd42f20e024dee0ba60285ce49": "7e879cb7ccff343508e400063eb73e2e",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/1d/4a2f13edf6826659b87d791844f8fd893b86a0": "2bb65bac60ee037e7bf25f4b6bc47963",
"/.git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
"/.git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/fork-settings": "b86329544bd3e1bfed1dadc20d081879",
"/.git/logs/HEAD": "78a0c34a4331043a3b56fa628ba363e1",
"/.git/logs/refs/heads/master": "78a0c34a4331043a3b56fa628ba363e1",
"/.git/logs/refs/remotes/origin/master": "a470beedb417d2b275b207640c239b48",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "8c1072f5fc3a6d8c34711e37d511bc07",
"/.git/refs/remotes/origin/master": "8c1072f5fc3a6d8c34711e37d511bc07",
"/.git/index": "91e2004f3eb3665e9ac133241a2fbe58",
"/.git/COMMIT_EDITMSG": "da00f1d020012af4b92ef665a70701d3",
"/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"/assets/LICENSE": "205dd54cc103fe1bccbfae093253c7b7",
"/assets/AssetManifest.json": "3a81fec7d849e801cd190243cc24d965",
"/assets/FontManifest.json": "94a2494f1e7ff74a7d0b6cf4f3d4e39d",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"/assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"/assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"/assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"/assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"/assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"/assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"/assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"/assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"/assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"/assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"/assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"/assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"/assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
