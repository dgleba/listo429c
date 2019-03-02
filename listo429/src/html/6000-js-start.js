<!--  JavaScript Scripts-->

<!-- service worker -->
<script>

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}
</script>


<!-- <script src="worker-include.js"></script> -->

<!-- cuid - unique id generator -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/cuid/1.3.8/browser-cuid.min.js"></script>

<!-- PouchDB - in-browser database -->
<script src="https://cdn.jsdelivr.net/gh/pouchdb/pouchdb@6.3.4/dist/pouchdb.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/pouchdb/pouchdb@6.3.4/dist/pouchdb.find.min.js"></script>

<!-- Vue.js - framework that handles DOM/Model interaction -->
<script src="https://unpkg.com/vue@2.4.2/dist/vue.js"></script>

<!-- vue-material - Material Design for Vue.js -->
<script src="https://unpkg.com/vue-material@0.7.4/dist/vue-material.js"></script>

<script src="https://cdn.jsdelivr.net/npm/dayjs@1.7.8/dayjs.min.js"></script>

<!-- our code -->
<script src="dist/shoppinglist26.js"></script>
