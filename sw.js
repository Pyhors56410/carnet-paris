// Service worker du carnet de Paris : tout est gardé sur l'appareil pour fonctionner sans réseau (métro).
const CACHE = "carnet-ad04cac012";
const COQUILLE = ["./", "index.html", "manifest.webmanifest", "fonts/fonts.css", "fonts/92zatBhPNqw73oTd4jQmfxI.woff2", "fonts/92zatBhPNqw73ord4jQmfxIC7w.woff2", "fonts/aFTB7PxzY382XsXX63LUYJSPUqb0qojSAq1rZLktbNxSXgOXEFZ8.woff2", "fonts/aFTB7PxzY382XsXX63LUYJSPUqb0qojSAq1rZLktbNxcXgOXEFZ8mYc.woff2", "fonts/aFTQ7PxzY382XsXX63LUYJSESKjWXFBPgas.woff2", "fonts/aFTQ7PxzY382XsXX63LUYJSKSKjWXFBP.woff2", "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512-maskable.png", "icons/icon-512.png"];
const MEDIAS = ["carte/paris.jpg", "img/accueil-galeries-lafayette.jpg", "img/accueil-patinage.jpg", "img/accueil-tour-eiffel.jpg", "img/ang_0.jpg", "img/b1_0.jpg", "img/b1_1.jpg", "img/b1_2.jpg", "img/b1_3.jpg", "img/b2_0.jpg", "img/b2_1.jpg", "img/b2_2.jpg", "img/b2_3.jpg", "img/b3_0.jpg", "img/b3_1.jpg", "img/b3_2.jpg", "img/b3_3.jpg", "img/b4_0.jpg", "img/b5_0.jpg", "img/b5_1.jpg", "img/bhv_0.jpg", "img/bhv_1.jpg", "img/bhv_2.jpg", "img/bhv_3.jpg", "img/bm1_0.jpg", "img/c1_0.jpg", "img/deb_0.jpg", "img/deb_1.jpg", "img/deb_2.jpg", "img/deb_3.jpg", "img/deh_0.jpg", "img/dey_0.jpg", "img/f1_0.jpg", "img/fee_0.jpg", "img/fee_1.jpg", "img/fond-seine-noel.jpg", "img/gde_0.jpg", "img/jdp_0.jpg", "img/l10_0.jpg", "img/l11_0.jpg", "img/l11_1.jpg", "img/l11_2.jpg", "img/l11_3.jpg", "img/l12_0.jpg", "img/l12_1.jpg", "img/l12_2.jpg", "img/l12_3.jpg", "img/l12_perso.jpg", "img/l13_0.jpg", "img/l13_perso2.jpg", "img/l13b_c2.jpg", "img/l13b_c5.jpg", "img/l13b_perso.jpg", "img/l14_c1.jpg", "img/l14_c3.jpg", "img/l15_0.jpg", "img/l15_1.jpg", "img/l15_2.jpg", "img/l16_0.jpg", "img/l16_1.jpg", "img/l16_2.jpg", "img/l16_3.jpg", "img/l17_0.jpg", "img/l17_1.jpg", "img/l17_2.jpg", "img/l17_3.jpg", "img/l18_0.jpg", "img/l18_1.jpg", "img/l19_c1.jpg", "img/l19_c2.jpg", "img/l19_c4.jpg", "img/l20_0.jpg", "img/l20_perso.jpg", "img/l21_c1.jpg", "img/l21_c2.jpg", "img/l26_0.jpg", "img/l26_perso.jpg", "img/l28a_0.jpg", "img/l28a_1.jpg", "img/l28a_2.jpg", "img/l28a_3.jpg", "img/l28b_0.jpg", "img/l28b_1.jpg", "img/l28b_2.jpg", "img/l28b_3.jpg", "img/l28c_0.jpg", "img/l28c_1.jpg", "img/l28c_2.jpg", "img/l28c_3.jpg", "img/l28d_0.jpg", "img/l28d_1.jpg", "img/l28d_2.jpg", "img/l28d_3.jpg", "img/l28e_0.jpg", "img/l28e_1.jpg", "img/l28e_2.jpg", "img/l28e_3.jpg", "img/l28f_0.jpg", "img/l28f_1.jpg", "img/l28f_2.jpg", "img/l28f_3.jpg", "img/l28f_perso.jpg", "img/l28h_0.jpg", "img/l28h_1.jpg", "img/l28h_2.jpg", "img/l28i_0.jpg", "img/l28i_1.jpg", "img/l28i_2.jpg", "img/l28j_0.jpg", "img/l28j_1.jpg", "img/l28j_2.jpg", "img/l2_0.jpg", "img/l2_1.jpg", "img/l2_2.jpg", "img/l2_perso.jpg", "img/l3_0.jpg", "img/l3_1.jpg", "img/l4_0.jpg", "img/l5_0.jpg", "img/l6_0.jpg", "img/l8_0.jpg", "img/l8_1.jpg", "img/l8_2.jpg", "img/l8_3.jpg", "img/l9_0.jpg", "img/l9_1.jpg", "img/l9_2.jpg", "img/l9_3.jpg", "img/ls1_0.jpg", "img/ls2_0.jpg", "img/ls2_1.jpg", "img/ls2_2.jpg", "img/ls2_3.jpg", "img/ls3_0.jpg", "img/ls3_1.jpg", "img/ls3_2.jpg", "img/ls3_3.jpg", "img/ls4_0.jpg", "img/ls4_1.jpg", "img/ls4_2.jpg", "img/ls4_3.jpg", "img/ls5_0.jpg", "img/ls5_1.jpg", "img/ls5_2.jpg", "img/ls5_3.jpg", "img/ls6_0.jpg", "img/ls6_1.jpg", "img/ls6_2.jpg", "img/ls6_3.jpg", "img/ls7_0.jpg", "img/ls7_1.jpg", "img/lv1_0.jpg", "img/lv1_1.jpg", "img/lv1_2.jpg", "img/lv1_3.jpg", "img/m10_0.jpg", "img/m11_0.jpg", "img/m11_1.jpg", "img/m11_2.jpg", "img/m12_0.jpg", "img/m12_1.jpg", "img/m12_2.jpg", "img/m12_3.jpg", "img/m13_0.jpg", "img/m13_1.jpg", "img/m13_2.jpg", "img/m13_3.jpg", "img/m14_0.jpg", "img/m14_1.jpg", "img/m14_2.jpg", "img/m1_0.jpg", "img/m2_c2.jpg", "img/m2_c3.jpg", "img/m3_0.jpg", "img/m3_1.jpg", "img/m3_2.jpg", "img/m3_3.jpg", "img/m5_0.jpg", "img/m5_1.jpg", "img/m5_2.jpg", "img/m5_3.jpg", "img/m7_0.jpg", "img/m7_1.jpg", "img/m7_2.jpg", "img/m7_3.jpg", "img/m8_0.jpg", "img/m8_1.jpg", "img/m8_2.jpg", "img/m8_3.jpg", "img/m9_0.jpg", "img/mere_0.jpg", "img/mere_1.jpg", "img/mere_2.jpg", "img/ndm_perso.jpg", "img/o1_0.jpg", "img/o1_1.jpg", "img/p1_0.jpg", "img/p1_perso.jpg", "img/p2_0.jpg", "img/p2_1.jpg", "img/p2_2.jpg", "img/p2_3.jpg", "img/p2_perso.jpg", "img/p4_0.jpg", "img/prin_0.jpg", "img/prin_1.jpg", "img/prin_2.jpg", "img/prin_3.jpg", "img/sama_0.jpg", "img/sama_1.jpg", "img/sama_2.jpg", "img/sama_3.jpg", "img/se1_0.jpg", "img/se1_1.jpg", "img/se1_2.jpg", "img/se1_3.jpg", "img/se2_0.jpg", "img/se2_1.jpg", "img/se2_2.jpg", "img/se2_3.jpg", "img/se5_0.jpg", "img/se5_1.jpg", "img/se5_2.jpg", "img/se5_3.jpg", "img/se6_0.jpg", "img/se6_1.jpg", "img/se6_2.jpg", "img/se6_3.jpg", "img/se7_0.jpg", "img/se7_1.jpg", "img/shak_0.jpg", "img/shak_1.jpg", "img/shak_2.jpg", "img/u1_0.jpg", "img/v1_0.jpg", "img/v1_1.jpg", "img/v1_2.jpg", "img/v1_3.jpg", "img/viv_0.jpg", "img/viv_1.jpg", "img/viv_2.jpg", "img/viv_3.jpg", "plans/ang.jpg", "plans/b1.jpg", "plans/b2.jpg", "plans/b3.jpg", "plans/b4.jpg", "plans/b5.jpg", "plans/bhv.jpg", "plans/bm1.jpg", "plans/c1.jpg", "plans/ca1.jpg", "plans/deb.jpg", "plans/deh.jpg", "plans/dey.jpg", "plans/f1.jpg", "plans/fee.jpg", "plans/gep.jpg", "plans/jdp.jpg", "plans/l10.jpg", "plans/l11.jpg", "plans/l12.jpg", "plans/l13.jpg", "plans/l13b.jpg", "plans/l15.jpg", "plans/l16.jpg", "plans/l17.jpg", "plans/l18.jpg", "plans/l19.jpg", "plans/l2.jpg", "plans/l20.jpg", "plans/l21.jpg", "plans/l23.jpg", "plans/l24.jpg", "plans/l26.jpg", "plans/l28a.jpg", "plans/l28b.jpg", "plans/l28c.jpg", "plans/l28d.jpg", "plans/l28e.jpg", "plans/l28f.jpg", "plans/l28h.jpg", "plans/l28i.jpg", "plans/l28j.jpg", "plans/l3.jpg", "plans/l4.jpg", "plans/l5.jpg", "plans/l6.jpg", "plans/l7.jpg", "plans/l8.jpg", "plans/l9.jpg", "plans/lv1.jpg", "plans/m1.jpg", "plans/m10.jpg", "plans/m11.jpg", "plans/m12.jpg", "plans/m14.jpg", "plans/m2.jpg", "plans/m3.jpg", "plans/m5.jpg", "plans/m6.jpg", "plans/m7.jpg", "plans/m8.jpg", "plans/m9.jpg", "plans/mere.jpg", "plans/ndm.jpg", "plans/nina.jpg", "plans/o1.jpg", "plans/p1.jpg", "plans/p2.jpg", "plans/p4.jpg", "plans/prin.jpg", "plans/sama.jpg", "plans/se1.jpg", "plans/se2.jpg", "plans/se3.jpg", "plans/se6.jpg", "plans/se7.jpg", "plans/shak.jpg", "plans/u1.jpg", "plans/v1.jpg", "plans/viv.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(COQUILLE)).then(() => self.skipWaiting()));
});

// Reprend les images déjà enregistrées dans l'ancienne version, télécharge le reste par petits lots.
async function remplir() {
  const c = await caches.open(CACHE);
  const anciens = (await caches.keys()).filter(k => k.startsWith("carnet-") && k !== CACHE);
  const manquants = [];
  for (const m of MEDIAS) {
    if (await c.match(m)) continue;
    let r = null;
    for (const a of anciens) { r = await (await caches.open(a)).match(m); if (r) break; }
    if (r) await c.put(m, r); else manquants.push(m);
  }
  for (let i = 0; i < manquants.length; i += 6) {
    await Promise.all(manquants.slice(i, i + 6).map(m => fetch(m).then(r => r.ok && c.put(m, r)).catch(() => {})));
  }
  for (const a of anciens) await caches.delete(a);
}

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim().then(() => { remplir(); }));
});

self.addEventListener("message", e => {
  if (e.data === "total") { e.source.postMessage({ total: MEDIAS.length }); remplir(); }
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    // Page : le réseau d'abord (pour recevoir les mises à jour), la copie gardée si pas de réseau en 3 s.
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      try {
        const r = await Promise.race([fetch(req), new Promise((_, ko) => setTimeout(ko, 3000))]);
        if (r.ok) c.put("index.html", r.clone());
        return r;
      } catch (err) {
        return (await c.match("index.html")) || (await caches.match("index.html")) || Response.error();
      }
    })());
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(rep => {
    if (rep.ok) { const copie = rep.clone(); caches.open(CACHE).then(c => c.put(req, copie)); }
    return rep;
  })));
});
