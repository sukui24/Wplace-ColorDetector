// ==UserScript==
// @name         wplace.live color detector on hover
// @description  wplace.live color detector on hover
// @version      0.2.0
// @match        https://wplace.live/*
// @run-at       document-start
// @grant        none
// @updateURL    https://raw.githubusercontent.com/sukui24/Wplace-ColorDetector/main/assets/WplaceColorDetector.user.js
// @downloadURL  https://raw.githubusercontent.com/sukui24/Wplace-ColorDetector/main/assets/WplaceColorDetector.user.js
// ==/UserScript==

(() => {
  // ---- Palette (full) ----
  const colorpalette = [
    {id: 0, premium: false, name: 'Transparent', rgb: [0, 0, 0]},
    {id: 1, premium: false, name: 'Black', rgb: [0, 0, 0]},
    {id: 2, premium: false, name: 'Dark Gray', rgb: [60, 60, 60]},
    {id: 3, premium: false, name: 'Gray', rgb: [120, 120, 120]},
    {id: 4, premium: false, name: 'Light Gray', rgb: [210, 210, 210]},
    {id: 5, premium: false, name: 'White', rgb: [255, 255, 255]},
    {id: 6, premium: false, name: 'Deep Red', rgb: [96, 0, 24]},
    {id: 7, premium: false, name: 'Red', rgb: [237, 28, 36]},
    {id: 8, premium: false, name: 'Orange', rgb: [255, 127, 39]},
    {id: 9, premium: false, name: 'Gold', rgb: [246, 170, 9]},
    {id: 10, premium: false, name: 'Yellow', rgb: [249, 221, 59]},
    {id: 11, premium: false, name: 'Light Yellow', rgb: [255, 250, 188]},
    {id: 12, premium: false, name: 'Dark Green', rgb: [14, 185, 104]},
    {id: 13, premium: false, name: 'Green', rgb: [19, 230, 123]},
    {id: 14, premium: false, name: 'Light Green', rgb: [135, 255, 94]},
    {id: 15, premium: false, name: 'Dark Teal', rgb: [12, 129, 110]},
    {id: 16, premium: false, name: 'Teal', rgb: [16, 174, 166]},
    {id: 17, premium: false, name: 'Light Teal', rgb: [19, 225, 190]},
    {id: 18, premium: false, name: 'Dark Blue', rgb: [40, 80, 158]},
    {id: 19, premium: false, name: 'Blue', rgb: [64, 147, 228]},
    {id: 20, premium: false, name: 'Cyan', rgb: [96, 247, 242]},
    {id: 21, premium: false, name: 'Indigo', rgb: [107, 80, 246]},
    {id: 22, premium: false, name: 'Light Indigo', rgb: [153, 177, 251]},
    {id: 23, premium: false, name: 'Dark Purple', rgb: [120, 12, 153]},
    {id: 24, premium: false, name: 'Purple', rgb: [170, 56, 185]},
    {id: 25, premium: false, name: 'Light Purple', rgb: [224, 159, 249]},
    {id: 26, premium: false, name: 'Dark Pink', rgb: [203, 0, 122]},
    {id: 27, premium: false, name: 'Pink', rgb: [236, 31, 128]},
    {id: 28, premium: false, name: 'Light Pink', rgb: [243, 141, 169]},
    {id: 29, premium: false, name: 'Dark Brown', rgb: [104, 70, 52]},
    {id: 30, premium: false, name: 'Brown', rgb: [149, 104, 42]},
    {id: 31, premium: false, name: 'Beige', rgb: [248, 178, 119]},
    {id: 32, premium: true, name: 'Medium Gray', rgb: [170, 170, 170]},
    {id: 33, premium: true, name: 'Dark Red', rgb: [165, 14, 30]},
    {id: 34, premium: true, name: 'Light Red', rgb: [250, 128, 114]},
    {id: 35, premium: true, name: 'Dark Orange', rgb: [228, 92, 26]},
    {id: 36, premium: true, name: 'Light Tan', rgb: [214, 181, 148]},
    {id: 37, premium: true, name: 'Dark Goldenrod', rgb: [156, 132, 49]},
    {id: 38, premium: true, name: 'Goldenrod', rgb: [197, 173, 49]},
    {id: 39, premium: true, name: 'Light Goldenrod', rgb: [232, 212, 95]},
    {id: 40, premium: true, name: 'Dark Olive', rgb: [74, 107, 58]},
    {id: 41, premium: true, name: 'Olive', rgb: [90, 148, 74]},
    {id: 42, premium: true, name: 'Light Olive', rgb: [132, 197, 115]},
    {id: 43, premium: true, name: 'Dark Cyan', rgb: [15, 121, 159]},
    {id: 44, premium: true, name: 'Light Cyan', rgb: [187, 250, 242]},
    {id: 45, premium: true, name: 'Light Blue', rgb: [125, 199, 255]},
    {id: 46, premium: true, name: 'Dark Indigo', rgb: [77, 49, 184]},
    {id: 47, premium: true, name: 'Dark Slate Blue', rgb: [74, 66, 132]},
    {id: 48, premium: true, name: 'Slate Blue', rgb: [122, 113, 196]},
    {id: 49, premium: true, name: 'Light Slate Blue', rgb: [181, 174, 241]},
    {id: 50, premium: true, name: 'Light Brown', rgb: [219, 164, 99]},
    {id: 51, premium: true, name: 'Dark Beige', rgb: [209, 128, 81]},
    {id: 52, premium: true, name: 'Light Beige', rgb: [255, 197, 165]},
    {id: 53, premium: true, name: 'Dark Peach', rgb: [155, 82, 73]},
    {id: 54, premium: true, name: 'Peach', rgb: [209, 128, 120]},
    {id: 55, premium: true, name: 'Light Peach', rgb: [250, 182, 164]},
    {id: 56, premium: true, name: 'Dark Tan', rgb: [123, 99, 82]},
    {id: 57, premium: true, name: 'Tan', rgb: [156, 132, 107]},
    {id: 58, premium: true, name: 'Dark Slate', rgb: [51, 57, 65]},
    {id: 59, premium: true, name: 'Slate', rgb: [109, 117, 141]},
    {id: 60, premium: true, name: 'Light Slate', rgb: [179, 185, 209]},
    {id: 61, premium: true, name: 'Dark Stone', rgb: [109, 100, 63]},
    {id: 62, premium: true, name: 'Stone', rgb: [148, 140, 107]},
    {id: 63, premium: true, name: 'Light Stone', rgb: [205, 197, 158]},
  ];

  // ---- Cursor tint model: observed = SLOPE * original + OFFSET ----
  const SLOPE = 0.6; // = (1 - alpha), alpha ≈ 0.4
  const OFFSET = 81; // ≈ alpha * 203 (gray overlay ~ #CBCBCB)
  const invDetint = v => Math.round((v - OFFSET) / SLOPE);
  const applyTint = v => Math.round(SLOPE * v + OFFSET);

  const clamp8 = v => (v < 0 ? 0 : v > 255 ? 255 : v | 0);

  const detintRGB = ([r, g, b]) => [
    clamp8(invDetint(r)),
    clamp8(invDetint(g)),
    clamp8(invDetint(b)),
  ];
  const tintRGB = ([r, g, b]) => [
    clamp8(applyTint(r)),
    clamp8(applyTint(g)),
    clamp8(applyTint(b)),
  ];

  // Precompute a tinted version of the palette for robust matching while hovered
  const PALETTE_FOR_MATCH = colorpalette
    .filter(c => c.name !== 'Transparent') // avoid the duplicate black
    .map(c => ({...c, tinted: tintRGB(c.rgb)}));

  // Matching thresholds
  const MAX_CHANNEL_DELTA_TINTED = 3; // per-channel tolerance after tint (rounding wiggle)
  const MAX_CHANNEL_DELTA_RAW = 3; // if cursor ever fails to tint and we see raw pixels

  const maxDelta = (a, b) =>
    Math.max(
      Math.abs(a[0] - b[0]),
      Math.abs(a[1] - b[1]),
      Math.abs(a[2] - b[2]),
    );

  const matchTinted = rgbObserved => {
    let best = null,
      bestDelta = Infinity;
    for (const c of PALETTE_FOR_MATCH) {
      const d = maxDelta(rgbObserved, c.tinted);
      if (d < bestDelta) {
        bestDelta = d;
        best = c;
      }
      if (d === 0) break;
    }
    return best && bestDelta <= MAX_CHANNEL_DELTA_TINTED ? best : null;
  };

  const matchRaw = rgbObserved => {
    // Fallback if for some reason the overlay isn't applied (rare)
    let best = null,
      bestDelta = Infinity;
    for (const c of PALETTE_FOR_MATCH) {
      const d = maxDelta(rgbObserved, c.rgb);
      if (d < bestDelta) {
        bestDelta = d;
        best = c;
      }
      if (d === 0) break;
    }
    return best && bestDelta <= MAX_CHANNEL_DELTA_RAW ? best : null;
  };

  const toHex = (r, g, b) =>
    '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');

  // 1) Patch getContext early to make the framebuffer readable
  const inject = () => {
    const code = () => {
      const origGetContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function (type, attrs) {
        if (
          type === 'webgl' ||
          type === 'webgl2' ||
          type === 'experimental-webgl'
        ) {
          const patched = Object.assign(
            {preserveDrawingBuffer: true},
            attrs || {},
          );
          const gl = origGetContext.call(this, type, patched);
          if (gl && !this.__wplaceHooked) {
            this.__wplaceHooked = true;
            this.setAttribute('data-wplace-gl', '1');
          }
          return gl;
        }
        return origGetContext.call(this, type, attrs);
      };
      window.__wplace_getContext_patched__ = true;
    };
    const s = document.createElement('script');
    s.textContent = `(${code})();`;
    document.documentElement.appendChild(s);
    s.remove();
  };
  inject();

  // 2) Wait for the map canvas to appear
  const waitForCanvas = () =>
    new Promise(resolve => {
      const byNow = document.querySelector('.maplibregl-canvas');
      if (byNow) return resolve(byNow);
      const mo = new MutationObserver(() => {
        const c = document.querySelector('.maplibregl-canvas');
        if (c) {
          mo.disconnect();
          resolve(c);
        }
      });
      mo.observe(document.documentElement, {childList: true, subtree: true});
    });

  // 3) Main sampler
  (async () => {
    const canvas = await waitForCanvas();
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('[wplace] No WebGL context available; cannot sample.');
      return;
    }

    // HUD
    const hud = document.createElement('div');
    Object.assign(hud.style, {
      position: 'fixed',
      right: '20px',
      top: '60%',
      transform: 'translateY(-50%)',
      zIndex: 999999,
      font: '16px/1.4 monospace',
      padding: '12px 16px',
      background: 'rgba(0,0,0,.8)',
      color: '#fff',
      borderRadius: '12px',
      pointerEvents: 'none',
      whiteSpace: 'pre',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    });
    document.body.appendChild(hud);

    let rafPending = false;
    let lastMouse;
    let lastSampleTime = 0;
    const THROTTLE_MS = 30;

    const sample = timestamp => {
      rafPending = false;
      if (!lastMouse) return;

      // Throttle
      if (timestamp - lastSampleTime < THROTTLE_MS) return;
      lastSampleTime = timestamp;

      const rect = canvas.getBoundingClientRect();
      const cssX = lastMouse.clientX - rect.left;
      const cssY = lastMouse.clientY - rect.top;

      const dbw = gl.drawingBufferWidth;
      const dbh = gl.drawingBufferHeight;

      const x = Math.max(
        0,
        Math.min(dbw - 1, Math.floor((cssX * dbw) / rect.width)),
      );
      const y = Math.max(
        0,
        Math.min(
          dbh - 1,
          Math.floor(((rect.height - cssY) * dbh) / rect.height),
        ),
      );

      const out = new Uint8Array(4);
      try {
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, out);
      } catch (e) {
        console.warn('[wplace] readPixels failed:', e);
        return;
      }

      const [r, g, b, a] = out;
      const hex = toHex(r, g, b);
      const det = detintRGB([r, g, b]);

      let match = matchTinted([r, g, b]) || matchRaw([r, g, b]);

      const paletteLine = match
        ? `palette: ${match.name} (id ${match.id})`
        : `palette: -`;

      const colorSquare = match
        ? `<span style="display: inline-block; width: 16px; height: 16px; background-color: rgb(${match.rgb[0]},${match.rgb[1]},${match.rgb[2]}); border: 1px solid #fff; margin-left: 8px; vertical-align: middle;"></span>`
        : '';

      hud.innerHTML =
        `<div>RGB: ${det[0]},${det[1]},${det[2]}</div>` +
        `<div style="display: flex; align-items: center;">${paletteLine}${colorSquare}</div>`;
    };

    canvas.addEventListener(
      'mousemove',
      ev => {
        lastMouse = ev;
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(sample);
        }
      },
      {passive: true},
    );

    console.log('[wplace] pixel sampler ready (WebGL, detint + palette).');
  })();
})();
