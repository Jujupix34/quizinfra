self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("quizinfra-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/infraestrutura.html",
        "/estilo-tabuleiro.css",
        "/script-tabuleiro.js",
        "/assets/sounds/acerto.mp3",
        "/assets/sounds/erro.mp3",
        "/assets/sounds/final.mp3"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
