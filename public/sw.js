if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const o=e=>i(e,c),d={module:{uri:c},exports:r,require:o};a[c]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(s(...e),r)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/LoaderLoop.json",revision:"ad4dd18773711476ea4228672a5bbf27"},{url:"/Loop_unCut.gif",revision:"4791ebce55f888af0ffe649d784f8834"},{url:"/_next/static/chunks/0e5ce63c-b91b6a08f6dd2cf0.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/1336-344f941a7d1deab2.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/2065-1e3445fdb6b71fef.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/231-d9cd7b2eeacdb7f9.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/2403-c0a92cffee887466.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/2652-fe7c9580d6d31c1c.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/2931-1128359bf74d4c45.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/3710-99447eade65aceab.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/4868-29e92005a4811c6f.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/5203-a8eb68a9407a797d.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/52ab8b6c-364041db3ac82b3d.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/5379-91f57b03968f1567.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/53c13509-4a20236f69cdcd02.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/59650de3-9b373284ff39f6fa.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/6586-c99d83f05043712b.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/7152-ce70b1954e783eb3.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/7213-f5bfc3aba1e00c5e.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/7548-79a266a493d4260e.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/8173-fbc6839ddf38f5ad.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/8194-8e0e519048210c56.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/8390-23912a022dbdfa2e.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/9494-2ab123e695e28cf1.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/9510-699c9aa1421583bd.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(auth)/layout-3b6b235cfe1ed8a4.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(auth)/login/page-44b13a0558545ff1.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(auth)/register/page-fe955cd5827025ce.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(auth)/reset-password/page-55a7284452136b18.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(home)/layout-b1a8e353cc9df65c.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(home)/page-ca6b12202d72c9fa.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/%5B...not-found%5D/page-39f13bc2bf3e3003.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(clipboard)/layout-9473f1383bb6b868.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(clipboard)/orders/(transition)/checkout/page-3187a3c5767a2e54.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(clipboard)/orders/(transition)/template-83bb09384372d3fc.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(clipboard)/orders/(transition)/track-order/page-8313afbc68a58a2e.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(clipboard)/orders/page-67c315c346156f90.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(menu)/layout-9dd820422327abfe.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/(menu)/notifications/page-f849546530e4cc44.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/restaurants/%5Bid%5D/page-b81cfe80c8d6f600.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/restaurants/page-dc2e04f47e45017f.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/template-180cdd62511effed.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/vendors/%5Bid%5D/%5Bcat%5D/%5Bfood%5D/page-06b24b62a79b538e.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/vendors/%5Bid%5D/%5Bcat%5D/page-863196b11afbd887.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/vendors/%5Bid%5D/page-0e3d0af7ffb1f1b1.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/(transition)/vendors/page-c7138999bbc014b1.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/explore/page-0c235ba1d33f43c4.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/layout-fe77266a29113852.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/(main)/template-7b2252de5432172d.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/_not-found/page-a19912c40b026035.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/layout-9a44782abac50d78.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/loading-952e83f4eea07f2c.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/app/not-found-58510fbd815aad15.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/e34aaff9-2ab87649d6f1e94c.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/f97e080b-ffa55f1e63921deb.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/fca4dd8b-380bb6d41951664f.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/fd9d1056-0a10b06cc30d107c.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/main-a34009c0060d0079.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/main-app-1c5fdb25b8f90b77.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/pages/_app-00b74eae5e8dab51.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/pages/_error-c72a1f77a3c0be1b.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-31f786bb37569c0a.js",revision:"xvoZ3QZvrP764N7_QAZZ0"},{url:"/_next/static/css/107e485f50e212ad.css",revision:"107e485f50e212ad"},{url:"/_next/static/css/39d406ff147b2143.css",revision:"39d406ff147b2143"},{url:"/_next/static/css/e4838ffd1717c22b.css",revision:"e4838ffd1717c22b"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/3266057196872a90-s.woff2",revision:"ba9fe483c019f49486af079ed3e99128"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/56d4c7a1c09c3371-s.woff2",revision:"43b1d1276722d640d51608db4600bb69"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/7e6a2e30184bb114-s.p.woff2",revision:"bca21fe1983e7d9137ef6e68e05f3aee"},{url:"/_next/static/media/8e9b04890d24f874-s.woff2",revision:"fd20308e05d4052c86c50c8175bbfad3"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/deal-rice.bbb38cf8.png",revision:"7be5892afc58017865fadbea2774e0cf"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/e529e2aeb51db5d1-s.woff2",revision:"102f62baed3a4857367f9df75be3558d"},{url:"/_next/static/media/ee6c08fec32e762d-s.p.woff2",revision:"670b4bba5a4be79afba9ee8d0760bc5f"},{url:"/_next/static/media/google-icon.7e9384be.svg",revision:"ca264ac77530f139d334ab7188048320"},{url:"/_next/static/media/logo-white.7a274242.png",revision:"11d5716381eaa91d9a61fdc6b4140dd2"},{url:"/_next/static/media/logo.69b6b3bf.png",revision:"e26f72bd8a5c33fa48ee09c256427c4b"},{url:"/_next/static/media/no-data.2a7daa5b.png",revision:"24a5e8dd737cda8c722f65a677d71de4"},{url:"/_next/static/xvoZ3QZvrP764N7_QAZZ0/_buildManifest.js",revision:"b222cbf4d8e1f47e27a8925222733e53"},{url:"/_next/static/xvoZ3QZvrP764N7_QAZZ0/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/about.png",revision:"405a76d3308b40b693bc5d162448500e"},{url:"/about/map.png",revision:"c5cb327a6d861390ead83bc247d46d4b"},{url:"/about/model.png",revision:"05d07a8172ee38af1cc5e49e9102810e"},{url:"/about/person-fit.png",revision:"d8eb1f7881087550af21e5e626a7989c"},{url:"/about/person.JPG",revision:"367763ee677c21291f01988233e8b0e1"},{url:"/about/person.png",revision:"3496dd8044833a0a2cece34ff80ea819"},{url:"/ads.png",revision:"6dc87e2468c41c14144cd4dafa6f0622"},{url:"/auth/auth-left-image.png",revision:"08fec03030d316b4b986f802efbc64f3"},{url:"/avatar.png",revision:"71a399ccda4b34d77623e1ac6fc9a7f8"},{url:"/bigPizza.png",revision:"a9582d485a9d499c221736a8065ca934"},{url:"/blog/1.png",revision:"4697868898da8306432bc03725d345fa"},{url:"/cart-check.svg",revision:"bd273002679cf2c5915c6c0a02a924d5"},{url:"/cart/1.png",revision:"0f451393c5695d7d224900a032444ed7"},{url:"/categories/1.png",revision:"58e1f15a528d38cd5b1e0e88f13f39b0"},{url:"/categories/10.png",revision:"6ba60a39888d09165564dfa518656f26"},{url:"/categories/2.png",revision:"92cc4e92be90f2ec381ba044ebc17a52"},{url:"/categories/3.png",revision:"7229495c9ba7e8d9f3287b024981a25d"},{url:"/categories/4.png",revision:"ebb6eaeead1822ba072790dcbe1a41f6"},{url:"/categories/5.png",revision:"26f3dbc27a967718a77e29b7866aedc3"},{url:"/categories/6.png",revision:"b89fad2ff5267af659a3cdafa60979c7"},{url:"/categories/7.png",revision:"6e458f105e5750d698cb1dace9aad6b8"},{url:"/categories/8.png",revision:"07bf1f51667948bca3d0e24fccaaf902"},{url:"/categories/9.png",revision:"4aba2857a24a02592ec7bbf34c4472d1"},{url:"/chickenRepubilc.png",revision:"b74b3308e67a83716040a2e1e698f92b"},{url:"/consolas/CONSOLA.TTF",revision:"fb505e28b6d130f08fe8f070e0d6b1b8"},{url:"/consolas/CONSOLAB.TTF",revision:"a029870eeb5b0f5978e4efa1008d239b"},{url:"/consolas/Consolas.ttf",revision:"44799a64a98468667480348bcab0de9a"},{url:"/consolas/consolai.ttf",revision:"5edcabeaacc62c4d8c7a8a2c281db68c"},{url:"/consolas/consolaz.ttf",revision:"2e0e3d14b8348938e002be83bff12228"},{url:"/copy.svg",revision:"15155950b7a3538047fb1f787a825d46"},{url:"/deals/1.png",revision:"8044ae17e0c6949649839b8717a454f8"},{url:"/deals/deal-rice.png",revision:"7be5892afc58017865fadbea2774e0cf"},{url:"/deals/deal-soup.png",revision:"824932f1ea919dbc0cf7a45fa12c4d70"},{url:"/empty-state.png",revision:"18afbeb90490bac07b3970aa7c8c4d8b"},{url:"/empty/empty-basket.png",revision:"2b2b42f6e7433cf60f9be69c6233ddb3"},{url:"/empty/empty-favourites.png",revision:"5123bcac1d0063a25e7165bd92abc127"},{url:"/empty/empty-notifications.png",revision:"58b85a8cd4fd9d5db135f33823146d90"},{url:"/empty/empty-orders.png",revision:"357f48d247ffcf00ae1cab59af937e52"},{url:"/empty/no-data.png",revision:"24a5e8dd737cda8c722f65a677d71de4"},{url:"/eye.svg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/face2.png",revision:"74f31ca5eb6debfa7948988fdf6dff95"},{url:"/food.png",revision:"aeb6b682b02bf89dfb5608fa7901e66f"},{url:"/food/1.png",revision:"ecd6053f0e9a7825d05af8d25c409260"},{url:"/food2.png",revision:"9c5a90a8beff30b0a07dc731bd68c9fc"},{url:"/gift.svg",revision:"aa34cfc0e7df534c08e4dad7d7982eb8"},{url:"/google-icon.svg",revision:"ca264ac77530f139d334ab7188048320"},{url:"/handpicked/1.png",revision:"0ffa635af1c318c9a73a6e2dace9f872"},{url:"/handpicked/10.png",revision:"f307865df6fd762b91429f4826c91071"},{url:"/handpicked/11.png",revision:"bd861fccc8d4553e4b3d27caafd891ec"},{url:"/handpicked/12.png",revision:"118711820647b7bfc975b04bcca4647e"},{url:"/handpicked/13.png",revision:"b666a7fefdabb173ba74a05816885ea4"},{url:"/handpicked/2.png",revision:"b666a7fefdabb173ba74a05816885ea4"},{url:"/handpicked/3.png",revision:"118711820647b7bfc975b04bcca4647e"},{url:"/handpicked/4.png",revision:"5e6a5f60e67662e57b2e1ffaba51cf47"},{url:"/handpicked/5.png",revision:"128a41cbd1f39aa2b1a250e1c51c0ca3"},{url:"/handpicked/6.png",revision:"f307865df6fd762b91429f4826c91071"},{url:"/handpicked/7.png",revision:"74d462e4bcf4ea75f01f29d32551f591"},{url:"/handpicked/8.png",revision:"bd861fccc8d4553e4b3d27caafd891ec"},{url:"/handpicked/9.png",revision:"1265fc76139aba73d171ccc4acdd5609"},{url:"/heart.svg",revision:"fd97a71c2f8f0856c90010c0fc942ba1"},{url:"/home/Vector.svg",revision:"9e957211e7917a3c65f795c25d6d7213"},{url:"/home/advert.png",revision:"78cc205cffe98a23f266a58e44051fb6"},{url:"/home/auto-small.png",revision:"0b4cedfcf3f304692bac69e09a19ea31"},{url:"/home/auto.png",revision:"c9f2d984506581c9ecab8961b626ee0c"},{url:"/home/best.png",revision:"22efc7c961c254c098a37925e01540f3"},{url:"/home/bulk.png",revision:"d1525f08eee0f56d8707c955de286225"},{url:"/home/bulk.svg",revision:"e85eced6d9eb8aeade9d819951084bc4"},{url:"/home/cashback.svg",revision:"367b8b7aad2fb2ae79e0a1db2e1b07d3"},{url:"/home/chick.png",revision:"9469564a368dc4692fe990cf68a6ac5c"},{url:"/home/clock.png",revision:"435b320a00ebf2b52929a5964a683486"},{url:"/home/deal.png",revision:"731ac73b300b2d61dc07134af3f0eeea"},{url:"/home/deal2.png",revision:"92453674b1f7148e63e5fd64ccbbc536"},{url:"/home/domi.png",revision:"6d41858ac2f09b2d997382d39076d2e1"},{url:"/home/fast-delivery.svg",revision:"a80fd1e32fb212ea14244cbc729b2252"},{url:"/home/future.png",revision:"f8558b3cbf3c3fdcdf76d3dd4e1ffb86"},{url:"/home/hardy.png",revision:"eda194d3e04b35c3ecefab0d021de601"},{url:"/home/hot-deal.png",revision:"1a535c40d9c93ff686a2b9dcd4f810f1"},{url:"/home/hot.png",revision:"c5fb34d3040904ec67fccbc8d050e906"},{url:"/home/inventory.png",revision:"6757495254c3df16c0cafd5b2ee99708"},{url:"/home/kili.png",revision:"de96b28739b77728436353f306966e6f"},{url:"/home/list.png",revision:"25584ddeedc06cd59a7dfec14a231341"},{url:"/home/location.png",revision:"73e58d921f2145f33e5cff367acce748"},{url:"/home/magglass.png",revision:"c25b1a80f11dd5f8e928d89713a8b4b7"},{url:"/home/market.png",revision:"0a0a22c3b0953435afe256145789daf2"},{url:"/home/megaphone.png",revision:"93d196f9e6ea558e5e57edcbb4529e9c"},{url:"/home/mobile/Vector.png",revision:"ecb1874bca35beab6af56f147c512098"},{url:"/home/mobile/advert.png",revision:"18b416739b3c7678a8f4ef225238a4eb"},{url:"/home/mobile/bulk.png",revision:"a8c08acf7a34e582f87862fe1b198bb7"},{url:"/home/mobile/deal.png",revision:"a44d05ca16f679526b9dd60c49f0ddae"},{url:"/home/mobile/magglass.png",revision:"c25b1a80f11dd5f8e928d89713a8b4b7"},{url:"/home/mobile/share.png",revision:"1b2644f10cf811a2343f10522e6623fe"},{url:"/home/mobile/time.png",revision:"6271c8c703ca9e2f07c74f30fcce0547"},{url:"/home/mobile/tracker.png",revision:"f2647a6ed132c96d8292a5ef9756a2d4"},{url:"/home/mobile/wishlist.svg",revision:"104dd46a44e1cd4de42539a4d17a9a8c"},{url:"/home/new_glass.png",revision:"296057a6c07c7e3d8dff82dc493d96c5"},{url:"/home/order.png",revision:"32cf0d6033a4422267fb8a997806c4f8"},{url:"/home/phone.png",revision:"671e3044f1a2b40dda15ea1f54ae4ff4"},{url:"/home/pizza.png",revision:"4f5e682535243ba0f2a39912b873e8eb"},{url:"/home/recent.png",revision:"dc881368452fc829874581389204e5de"},{url:"/home/selection.png",revision:"3124663732e7323dc4beb4295ede38e2"},{url:"/home/share.png",revision:"b9b3365a6ced38df31330c01a80d98f7"},{url:"/home/time2.png",revision:"ba79555ddd15ba894e4df1b39da77055"},{url:"/home/yummy.svg",revision:"c6ddcc06a241512ddd61c65b92a9f60d"},{url:"/icon-192.png",revision:"f4e1e7f47e9f7b0b2c34d223dbf423db"},{url:"/icon-256.png",revision:"ff7a002de3e8b5042ddfae1dc9d8408e"},{url:"/icon-384.png",revision:"ca33b80a552a7d97dfdb5de42a923fad"},{url:"/icon-512.png",revision:"02ae4fbd9e87f56f637d253f077906d9"},{url:"/icons/calendar.svg",revision:"18cf94ae9fe7d8be6ed36d29470d920a"},{url:"/icons/check-circle.svg",revision:"525130d4af260b77035c8d5b629348b3"},{url:"/icons/location.svg",revision:"2b59814b09188334fbe97984c25c08df"},{url:"/icons/nig.png",revision:"d3266b0fa76386de7f746fa2a41b6cc6"},{url:"/icons/sale-tag.png",revision:"ebdeac6cb5c5e658f02a51d475177ee4"},{url:"/icons/sale-tag.svg",revision:"0c1af5b4fdbab62735d30fec262127a3"},{url:"/icons/sign-out.svg",revision:"7d8324de00daab7bbe83ddf7b513ecb1"},{url:"/icons/tether.png",revision:"fd2641edabdfdfdbbeca41711982722f"},{url:"/icons/ticket.svg",revision:"2cbb5b58ce5ec2000850af431f18b567"},{url:"/icons/trash.svg",revision:"5587bece2c100bde229868ff24c1efc1"},{url:"/info.svg",revision:"e7b22bebb60f3203df61e77b9ddc08db"},{url:"/loader.svg",revision:"ba89e9ae63d7711401ce4ea07e4401f8"},{url:"/logo-small-white.png",revision:"0f4fcaf89c47c4e4fde835af1cb235e3"},{url:"/logo-small.png",revision:"64916b2a3a4b1c8b7d56baea81e59d3e"},{url:"/logo-white.png",revision:"11d5716381eaa91d9a61fdc6b4140dd2"},{url:"/logo.png",revision:"e26f72bd8a5c33fa48ee09c256427c4b"},{url:"/logo/logo-green.png",revision:"f8d10c95867c882032a7d6e451a83c4a"},{url:"/loop2.gif",revision:"4791ebce55f888af0ffe649d784f8834"},{url:"/manifest.json",revision:"d8de8392e51c22e34b8fb2f5056e57f2"},{url:"/naira.svg",revision:"e8c7da08dc7d96151004d554c3fef688"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/onboarding/1.png",revision:"7a2f39ea5ae78c0bea804286da193057"},{url:"/onboarding/2.png",revision:"667d0da8ba354eb0becf159e72385f4b"},{url:"/onboarding/3.png",revision:"f3ed18f320404ab4def495dacb1de9b8"},{url:"/orders/1.png",revision:"277a38ade66ea8a5e58dc6c97796ecc5"},{url:"/orders/2.png",revision:"2479ed0b1f6c47dab2594ccc8b3b06fb"},{url:"/orders/bulk.png",revision:"a8c08acf7a34e582f87862fe1b198bb7"},{url:"/orders/future.png",revision:"6271c8c703ca9e2f07c74f30fcce0547"},{url:"/person.png",revision:"6a237a616e44ef7845c97a9513c615c4"},{url:"/pizza.png",revision:"0d2fa595c82dbccd759d8807e6e278de"},{url:"/pot.png",revision:"2b73c71fd17ab01053b170f262619e61"},{url:"/profile.svg",revision:"804edf89bcbe8e0f431a5b3d7c99b6c5"},{url:"/question.svg",revision:"fa01656759fbdd72efd5e54c2d89de7e"},{url:"/reach.svg",revision:"6f4dee09f6ae7f1c64ad8d8d5a8b58b2"},{url:"/refresh.svg",revision:"b518dfaf2f45de0a4572fac89cf8c99a"},{url:"/sale-tag.png",revision:"ebdeac6cb5c5e658f02a51d475177ee4"},{url:"/slide/1.png",revision:"0fc85ff500f1c4afa03c82092b1af174"},{url:"/slide/2.png",revision:"08625f143ce74dbb2d74585247c89e53"},{url:"/slide/3.png",revision:"9010571fe021298a368cb9ab633b4804"},{url:"/slide/4.png",revision:"fc7973488c1bd24de6fff186cb664630"},{url:"/slide/5.png",revision:"56699e60e59b620b7850227b5f734a05"},{url:"/store/1.png",revision:"13e11fe02000e6145a57bf3b9dc3cd7c"},{url:"/store/2.png",revision:"a853dd08fec1245aef44538718bf38b3"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/user.svg",revision:"4e48e24991b34035b4102065392031e7"},{url:"/vendors/Kinimajaro.png",revision:"6319beac86c629053b4726e79282def2"},{url:"/vendors/chickenRepubilc.png",revision:"b74b3308e67a83716040a2e1e698f92b"},{url:"/vendors/dominos.png",revision:"1fa04cf3924b085e9dbbf60aaca774b2"},{url:"/vendors/hardyFoods.png",revision:"74bde833d5bdc7077f1c3f11fdfb97ef"},{url:"/vendors/kilimajiro.png",revision:"6319beac86c629053b4726e79282def2"},{url:"/vendors/marketSquare.png",revision:"847d861aa90b1beeb896fe21c81ffd14"},{url:"/vendors/pizzaJungle.png",revision:"e4d52f4a10d0f05ed2c64aadef104c7e"},{url:"/venlogo.png",revision:"3f15ac524824062df7bca08749509219"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/verified.svg",revision:"1c61e71e21bbfaa79f3ac6d4d45b190e"},{url:"/waitlist.png",revision:"857c8078e42100c112e8f42050049f3f"},{url:"/waitlist1.png",revision:"4e602e4c240ffbf6662b47e7b1518f4e"},{url:"/wallet.svg",revision:"bc6af56f9a8bef1bf004a06b58b9fce6"},{url:"/welcome.png",revision:"5fc60ef4dab5ff598e79cd4230a0f8d7"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
