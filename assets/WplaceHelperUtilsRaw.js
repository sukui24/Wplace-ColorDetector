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

  // Reusable buffers to eliminate allocation churn
  const reusableRgbBuffer = {r: 0, g: 0, b: 0};
  const hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  
  // In-place RGB operations to avoid array allocations
  const detintRGB = (srcR, srcG, srcB, targetBuffer) => {
    targetBuffer.r = clamp8(invDetint(srcR));
    targetBuffer.g = clamp8(invDetint(srcG));
    targetBuffer.b = clamp8(invDetint(srcB));
    return targetBuffer;
  };
  
  const tintRGB = (srcR, srcG, srcB, targetBuffer) => {
    targetBuffer.r = clamp8(applyTint(srcR));
    targetBuffer.g = clamp8(applyTint(srcG));
    targetBuffer.b = clamp8(applyTint(srcB));
    return targetBuffer;
  };

  // Optimized hex conversion without string allocations
  const toHexOptimized = (r, g, b) => {
    return '#' + 
      hexChars[(r >> 4) & 0xf] + hexChars[r & 0xf] +
      hexChars[(g >> 4) & 0xf] + hexChars[g & 0xf] +
      hexChars[(b >> 4) & 0xf] + hexChars[b & 0xf];
  };

  // Precompute a tinted version of the palette for robust matching while hovered
  const PALETTE_FOR_MATCH = colorpalette
    .filter(c => c.name !== 'Transparent') // avoid the duplicate black
    .map(c => {
      const tintedBuffer = {r: 0, g: 0, b: 0};
      tintRGB(c.rgb[0], c.rgb[1], c.rgb[2], tintedBuffer);
      return {...c, tinted: [tintedBuffer.r, tintedBuffer.g, tintedBuffer.b]};
    });

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
    
    // Get saved position for HUD or use default
    const savedHudPosition = localStorage.getItem('colorDetectorPosition');
    let hudPosition = savedHudPosition ? JSON.parse(savedHudPosition) : { right: 20, top: '60%' };
    
    // Convert right position to left position for right-side expansion
    const windowWidth = window.innerWidth;
    const leftPosition = windowWidth - hudPosition.right - 250; // 250 is minimum width

    Object.assign(hud.style, {
      position: 'fixed',
      left: leftPosition + 'px',
      top: typeof hudPosition.top === 'string' ? hudPosition.top : hudPosition.top + 'px',
      transform: typeof hudPosition.top === 'string' ? 'translateY(-50%)' : 'none',
      zIndex: 999999,
      font: '16px/1.4 monospace',
      padding: '12px 16px',
      background: 'rgba(0,0,0,0.75)',
      color: '#fff',
      borderRadius: '12px',
      pointerEvents: 'auto',
      whiteSpace: 'nowrap',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'move',
      userSelect: 'none',
      minWidth: '250px',
      width: 'fit-content',
      maxWidth: '400px',
      boxSizing: 'border-box',
    });

    // Create reusable DOM elements to avoid innerHTML churn
    const hudHeader = document.createElement('div');
    hudHeader.style.cssText = 'display: flex; align-items: center; gap: 8px; margin-bottom: 4px; padding-bottom: 4px; border-bottom: 1px solid rgba(255,255,255,.2);';
    
    const hudTitle = document.createElement('span');
    hudTitle.style.cssText = 'font-weight: bold; color: #60a5fa; flex: 1;';
    hudTitle.textContent = 'Color Detector';
    
    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settings-toggle';
    settingsBtn.style.cssText = 'background: none; color: white; padding: 4px 6px; border-radius: 4px; font-size: 24px; cursor: pointer; font-family: monospace; border: none;';
    settingsBtn.textContent = '⚙';
    
    hudHeader.appendChild(hudTitle);
    hudHeader.appendChild(settingsBtn);
    
    const rgbDisplay = document.createElement('div');
    const paletteDisplay = document.createElement('div');
    paletteDisplay.style.cssText = 'display: flex; align-items: center; gap: 8px; margin-bottom: 8px;';
    
    const paletteText = document.createElement('span');
    paletteText.style.cssText = 'flex-shrink: 0;';
    
    const colorSquare = document.createElement('span');
    colorSquare.style.cssText = 'display: inline-block; width: 16px; height: 16px; border: 1px solid #fff; margin-left: 8px; vertical-align: middle;';
    
    paletteDisplay.appendChild(paletteText);
    paletteDisplay.appendChild(colorSquare);
    
    const controlsDiv = document.createElement('div');
    controlsDiv.style.cssText = 'display: flex; align-items: center; gap: 8px;';
    
    const smartBrushBtn = document.createElement('button');
    smartBrushBtn.id = 'smart-brush-toggle';
    smartBrushBtn.style.cssText = 'background: none; color: white; border: 1px solid rgba(255,255,255,0.3); padding: 6px 8px; border-radius: 4px; font-size: 14px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px;';
    smartBrushBtn.title = 'Smart Brush - Automatically select colors while painting with spacebar or mouse. Detects the color you\'re hovering over and switches to it before painting.';
    smartBrushBtn.textContent = '🖌️ Smart Brush';
    
    const smartBrushIndicator = document.createElement('div');
    smartBrushIndicator.style.cssText = 'width: 8px; height: 8px; background: #22c55e; border-radius: 50%; flex-shrink: 0; display: none;';
    smartBrushIndicator.title = 'Color available for painting';
    
    controlsDiv.appendChild(smartBrushBtn);
    controlsDiv.appendChild(smartBrushIndicator);
    
    const settingsPanel = document.createElement('div');
    settingsPanel.style.cssText = 'padding: 8px; background: rgba(255,255,255,.05); border-radius: 6px; margin-top: 8px; display: none;';
    
    const settingsTitle = document.createElement('div');
    settingsTitle.style.cssText = 'font-weight: bold; margin-bottom: 8px; color: #60a5fa;';
    settingsTitle.textContent = 'Settings';
    
    const areaToggleLabel = document.createElement('label');
    areaToggleLabel.style.cssText = 'display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px;';
    
    const areaToggleInput = document.createElement('input');
    areaToggleInput.type = 'checkbox';
    areaToggleInput.id = 'area-calc-toggle';
    areaToggleInput.style.cssText = 'margin: 0;';
    
    const areaToggleText = document.createElement('span');
    areaToggleText.textContent = 'Show Area Calculator';
    
    areaToggleLabel.appendChild(areaToggleInput);
    areaToggleLabel.appendChild(areaToggleText);
    
    settingsPanel.appendChild(settingsTitle);
    settingsPanel.appendChild(areaToggleLabel);
    
    // Assemble HUD
    hud.appendChild(hudHeader);
    hud.appendChild(rgbDisplay);
    hud.appendChild(paletteDisplay);
    hud.appendChild(controlsDiv);
    hud.appendChild(settingsPanel);

    // HUD Dragging functionality
    let isHudDragging = false;
    let hudDragOffset = { x: 0, y: 0 };

    const startHudDrag = (e) => {
      isHudDragging = true;
      const rect = hud.getBoundingClientRect();
      hudDragOffset.x = e.clientX - rect.left;
      hudDragOffset.y = e.clientY - rect.top;
      hud.style.cursor = 'grabbing';
      hud.style.opacity = '0.8';
    };

    const doHudDrag = (e) => {
      if (!isHudDragging) return;
      e.preventDefault();
      
      const x = e.clientX - hudDragOffset.x;
      const y = e.clientY - hudDragOffset.y;
      
      // Calculate position relative to viewport edges
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const hudWidth = hud.offsetWidth;
      const hudHeight = hud.offsetHeight;
      
      // Constrain to viewport bounds with some padding
      const padding = 10;
      const left = Math.max(padding, Math.min(x, windowWidth - hudWidth - padding));
      const top = Math.max(padding, Math.min(y, windowHeight - hudHeight - padding));
      
      // Set position using left/top for easier calculation
      hud.style.left = left + 'px';
      hud.style.top = top + 'px';
      hud.style.right = 'auto';
      hud.style.transform = 'none';
    };

    const stopHudDrag = () => {
      if (!isHudDragging) return;
      isHudDragging = false;
      hud.style.cursor = 'move';
      hud.style.opacity = '1';
      
      // Save position to localStorage (convert left back to right for consistency)
      const rect = hud.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Convert to right/top coordinates for consistency with storage format
      const savedPos = {
        right: windowWidth - rect.right,
        top: rect.top
      };
      
      localStorage.setItem('colorDetectorPosition', JSON.stringify(savedPos));
    };

    hud.addEventListener('mousedown', startHudDrag);
    
    // Combined mouse event handlers for both draggable elements
    document.addEventListener('mousemove', (e) => {
      doHudDrag(e);
      doDrag(e);
    });
    
    document.addEventListener('mouseup', () => {
      stopHudDrag();
      stopDrag();
    });

    // Handle window resize for HUD
    window.addEventListener('resize', () => {
      // Invalidate caches on resize
      cachedCanvasRect = null;
      colorButtonCache.clear();
      
      // Handle HUD repositioning
      if (!isHudDragging) {
        const savedPosition = localStorage.getItem('colorDetectorPosition');
        if (savedPosition) {
          const pos = JSON.parse(savedPosition);
          const windowWidth = window.innerWidth;
          const leftPos = windowWidth - pos.right - 250; // Recalculate left from right
          hud.style.left = leftPos + 'px';
          hud.style.top = pos.top + 'px';
          hud.style.right = 'auto';
          hud.style.transform = 'none';
        }
      }
      
      // Handle Area Panel repositioning
      if (!isDragging) {
        const savedPosition = localStorage.getItem('areaCalculatorPosition');
        if (savedPosition) {
          const pos = JSON.parse(savedPosition);
          areaPanel.style.right = pos.right + 'px';
          areaPanel.style.bottom = pos.bottom + 'px';
          areaPanel.style.left = 'auto';
          areaPanel.style.top = 'auto';
        }
      }
    });

    document.body.appendChild(hud);

    // Area Calculator Panel
    const areaPanel = document.createElement('div');
    
    // Get saved position or use default bottom-right
    const savedPosition = localStorage.getItem('areaCalculatorPosition');
    let position = savedPosition ? JSON.parse(savedPosition) : { right: 20, bottom: 20 };
    
    Object.assign(areaPanel.style, {
      position: 'fixed',
      right: position.right + 'px',
      bottom: position.bottom + 'px',
      zIndex: 999998,
      font: '14px/1.4 monospace',
      padding: '16px',
      background: 'rgba(0,0,0,0.75)',
      color: '#fff',
      borderRadius: '12px',
      pointerEvents: 'auto',
      width: '300px',
      maxWidth: '300px',
      border: '1px solid rgba(255,255,255,.2)',
      cursor: 'move',
      userSelect: 'none',
      boxSizing: 'border-box',
    });

    // Dragging functionality
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    const startDrag = (e) => {
      // Only allow dragging from the header area or drag handle
      const dragHandle = document.getElementById('drag-handle');
      if (!dragHandle || (!dragHandle.contains(e.target) && e.target.tagName === 'BUTTON')) return;
      
      isDragging = true;
      const rect = areaPanel.getBoundingClientRect();
      dragOffset.x = e.clientX - rect.left;
      dragOffset.y = e.clientY - rect.top;
      areaPanel.style.cursor = 'grabbing';
      
      // Add visual feedback
      areaPanel.style.opacity = '0.8';
    };

    const doDrag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      
      // Calculate position relative to viewport edges
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const panelWidth = areaPanel.offsetWidth;
      const panelHeight = areaPanel.offsetHeight;
      
      // Constrain to viewport bounds with some padding
      const padding = 10;
      const left = Math.max(padding, Math.min(x, windowWidth - panelWidth - padding));
      const top = Math.max(padding, Math.min(y, windowHeight - panelHeight - padding));
      
      // Set position using left/top instead of right/bottom for easier calculation
      areaPanel.style.left = left + 'px';
      areaPanel.style.top = top + 'px';
      areaPanel.style.right = 'auto';
      areaPanel.style.bottom = 'auto';
    };

    const stopDrag = () => {
      if (!isDragging) return;
      isDragging = false;
      areaPanel.style.cursor = 'move';
      areaPanel.style.opacity = '1';
      
      // Save position to localStorage
      const rect = areaPanel.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Convert to right/bottom coordinates for consistency
      const savedPos = {
        right: windowWidth - rect.right,
        bottom: windowHeight - rect.bottom
      };
      
      localStorage.setItem('areaCalculatorPosition', JSON.stringify(savedPos));
    };

    areaPanel.addEventListener('mousedown', startDrag);

    // Area calculation state
    let topLeft = null;
    let bottomRight = null;
    let currentPixel = {x: 0, y: 0, tlX: 0, tlY: 0, pxX: 0, pxY: 0};
    let isExpanded = true;
    
    // Settings state
    let showAreaCalculator = localStorage.getItem('showAreaCalculator') !== 'false'; // default true
    let showSettings = false;

    // Function to get coordinates from the #bm-h element
    const getCoordinatesFromBmH = () => {
      const bmhElement = document.querySelector('#bm-h');
      if (bmhElement) {
        const text = bmhElement.textContent;
        const match = text.match(/\(Tl X: (\d+), Tl Y: (\d+), Px X: (\d+), Px Y: (\d+)\)/);
        if (match) {
          return {
            tlX: parseInt(match[1]),
            tlY: parseInt(match[2]),
            pxX: parseInt(match[3]),
            pxY: parseInt(match[4]),
            finalX: parseInt(match[1]) * 1000 + parseInt(match[3]),
            finalY: parseInt(match[2]) * 1000 + parseInt(match[4])
          };
        }
      }
      return null;
    };

    // Create area panel content
    const updateAreaPanel = () => {
      let area = 0;
      let width = 0;
      let height = 0;
      
      if (topLeft && bottomRight) {
        // Calculate using the proper formula: (Tl X * 1000) + Px X
        const tlFinalX = (topLeft.tlX * 1000) + topLeft.pxX;
        const tlFinalY = (topLeft.tlY * 1000) + topLeft.pxY;
        const brFinalX = (bottomRight.tlX * 1000) + bottomRight.pxX;
        const brFinalY = (bottomRight.tlY * 1000) + bottomRight.pxY;
        
        // Calculate absolute differences
        width = Math.abs(brFinalX - tlFinalX) + 1;
        height = Math.abs(brFinalY - tlFinalY) + 1;
        area = width * height;
      }

      const expandedContent = `
        <div style="margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
            <span style="width: 80px; flex-shrink: 0;">Corner 1:</span>
            <span style="color: ${topLeft ? '#4ade80' : '#94a3b8'}; word-wrap: break-word; flex: 1; min-width: 0;">
              ${topLeft ? `${((topLeft.tlX * 1000) + topLeft.pxX).toLocaleString()}, ${((topLeft.tlY * 1000) + topLeft.pxY).toLocaleString()}` : 'Not set'}
            </span>
            <button id="geo-tl" style="
              background: #3b82f6; 
              color: white; 
              border: none; 
              padding: 4px 8px; 
              border-radius: 4px; 
              font-size: 12px; 
              cursor: pointer;
              font-family: monospace;
              pointer-events: auto;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            ">Set</button>
          </div>
        </div>
        
        <div style="margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
            <span style="width: 80px; flex-shrink: 0;">Corner 2:</span>
            <span style="color: ${bottomRight ? '#4ade80' : '#94a3b8'}; word-wrap: break-word; flex: 1; min-width: 0;">
              ${bottomRight ? `${((bottomRight.tlX * 1000) + bottomRight.pxX).toLocaleString()}, ${((bottomRight.tlY * 1000) + bottomRight.pxY).toLocaleString()}` : 'Not set'}
            </span>
            <button id="geo-br" style="
              background: #3b82f6; 
              color: white; 
              border: none; 
              padding: 4px 8px; 
              border-radius: 4px; 
              font-size: 12px; 
              cursor: pointer;
              font-family: monospace;
              pointer-events: auto;
              flex-shrink: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            ">Set</button>
          </div>
        </div>
        
        <div style="padding: 8px; background: rgba(255,255,255,.1); border-radius: 6px; word-wrap: break-word;">
          <div style="font-weight: bold; color: ${area > 0 ? '#fbbf24' : '#94a3b8'};">
            Area: ${area > 0 ? area.toLocaleString() : '0'} pixels
          </div>
          ${area > 0 ? `
            <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
              Width: ${width.toLocaleString()} × Height: ${height.toLocaleString()}
            </div>
          ` : ''}
        </div>
        
        <div style="margin-top: 12px;">
          <button id="clear-area" style="
            background: #ef4444; 
            color: white; 
            border: none; 
            padding: 6px 12px; 
            border-radius: 6px; 
            font-size: 12px; 
            cursor: pointer;
            font-family: monospace;
            pointer-events: auto;
          ">Clear</button>
        </div>
      `;

      areaPanel.innerHTML = `
        <div id="drag-handle" style="
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          margin-bottom: ${isExpanded ? '12px' : '0'};
          cursor: move;
          padding: 4px 0;
          border-bottom: ${isExpanded ? '1px solid rgba(255,255,255,.1)' : 'none'};
          margin-bottom: ${isExpanded ? '8px' : '0'};
        ">
          <div style="font-weight: bold; color: #4ade80;">
            Area Calculator
          </div>
          <button id="expand-toggle" style="
            background: none; 
            color: white; 
            border: 1px solid rgba(255,255,255,.3); 
            padding: 4px 8px; 
            border-radius: 4px; 
            font-size: 12px; 
            cursor: pointer;
            font-family: monospace;
          ">${isExpanded ? '−' : '+'}</button>
        </div>
        ${isExpanded ? expandedContent : ''}
      `;

      // Add event listeners for buttons
      const geoTlBtn = document.getElementById('geo-tl');
      const geoBrBtn = document.getElementById('geo-br');
      const clearBtn = document.getElementById('clear-area');
      const expandBtn = document.getElementById('expand-toggle');

      if (expandBtn) {
        expandBtn.addEventListener('click', () => {
          isExpanded = !isExpanded;
          updateAreaPanel();
        });
      }

      if (geoTlBtn) {
        geoTlBtn.addEventListener('click', () => {
          const coords = getCoordinatesFromBmH();
          if (coords) {
            topLeft = {
              tlX: coords.tlX,
              tlY: coords.tlY,
              pxX: coords.pxX,
              pxY: coords.pxY
            };
            updateAreaPanel();
          }
        });
      }

      if (geoBrBtn) {
        geoBrBtn.addEventListener('click', () => {
          const coords = getCoordinatesFromBmH();
          if (coords) {
            bottomRight = {
              tlX: coords.tlX,
              tlY: coords.tlY,
              pxX: coords.pxX,
              pxY: coords.pxY
            };
            updateAreaPanel();
          }
        });
      }

      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          topLeft = null;
          bottomRight = null;
          updateAreaPanel();
        });
      }
    };

    updateAreaPanel();
    if (showAreaCalculator) {
      document.body.appendChild(areaPanel);
    }

    // Performance optimizations: reuse buffers and cache values
    const pixelBuffer = new Uint8Array(4); // Reuse instead of creating new buffer each sample
    let cachedCanvasRect = null;
    let rectCacheTime = 0;
    const RECT_CACHE_MS = 100; // Cache canvas rect for 100ms

    let rafPending = false;
    let lastMouse;
    let lastSampleTime = 0;
    const THROTTLE_MS = 30;
    const BACKGROUND_THROTTLE_MS = 5000; // Much slower sampling when tab is hidden
    
    // Page Visibility API for background tab optimization
    let isPageVisible = !document.hidden;
    document.addEventListener('visibilitychange', () => {
      isPageVisible = !document.hidden;
      if (!isPageVisible) {
        // Clear pending operations when going to background
        if (rafPending) {
          rafPending = false;
        }
        console.log('[wplace] Tab hidden - reducing sampling rate');
      } else {
        console.log('[wplace] Tab visible - resuming normal sampling');
      }
    });
    
    // Smart brush state
    let isSmartBrushActive = false;
    let lastDetectedColor = null;
    let lastSelectedColorId = null; // Track the last color we actually selected
    
    // Smart brush debouncing for performance
    let smartBrushDebounce = null;
    const SMART_BRUSH_DEBOUNCE_MS = 16; // ~60fps limit for color selection
    
    // Performance: Cache last HUD content to avoid unnecessary DOM updates
    let lastRgbValues = '';
    let lastPaletteLine = '';
    let lastSmartBrushState = false;
    let lastMouseX = -1;
    let lastMouseY = -1;
    let hudUpdatePending = false; // Prevent HUD update storms

    // Set up persistent event listeners (no more innerHTML churn)
    const setupEventListeners = () => {
      // Settings toggle
      settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showSettings = !showSettings;
        settingsPanel.style.display = showSettings ? 'block' : 'none';
      });

      // Smart brush toggle
      smartBrushBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isSmartBrushActive = !isSmartBrushActive;
        
        // Update button appearance
        if (isSmartBrushActive) {
          smartBrushBtn.style.background = 'rgba(34, 197, 94, 0.3)';
          smartBrushBtn.style.border = '2px solid #22c55e';
          lastSelectedColorId = null;
          console.log('[Smart Brush] Activated - ready to detect colors');
        } else {
          smartBrushBtn.style.background = 'none';
          smartBrushBtn.style.border = '1px solid rgba(255,255,255,0.3)';
          console.log('[Smart Brush] Deactivated');
        }
        
        // Trigger update using protected RAF pattern
        if (lastMouse && !rafPending) {
          rafPending = true;
          requestAnimationFrame(sample);
        }
      });

      // Area calculator toggle
      areaToggleInput.addEventListener('change', (e) => {
        e.stopPropagation();
        showAreaCalculator = e.target.checked;
        localStorage.setItem('showAreaCalculator', showAreaCalculator.toString());
        
        if (showAreaCalculator) {
          document.body.appendChild(areaPanel);
        } else {
          if (areaPanel.parentNode) {
            areaPanel.parentNode.removeChild(areaPanel);
          }
        }
      });
    };

    // Function to update HUD content without innerHTML
    const updateHudContent = (rgbValues, paletteLine, match) => {
      rgbDisplay.textContent = rgbValues;
      paletteText.textContent = paletteLine;
      
      if (match) {
        colorSquare.style.backgroundColor = `rgb(${match.rgb[0]},${match.rgb[1]},${match.rgb[2]})`;
        colorSquare.style.display = 'inline-block';
      } else {
        colorSquare.style.display = 'none';
      }
      
      // Update smart brush indicator
      if (isSmartBrushActive && match && !(match.premium && document.querySelector(`#color-${match.id}`)?.querySelector('svg'))) {
        smartBrushIndicator.style.display = 'block';
      } else {
        smartBrushIndicator.style.display = 'none';
      }
      
      // Update settings checkbox
      areaToggleInput.checked = showAreaCalculator;
    };

    // One-time setup instead of repeated innerHTML updates
    setupEventListeners();

    // Cached canvas rect function to reduce layout thrashing
    const getCachedCanvasRect = () => {
      const now = performance.now();
      if (!cachedCanvasRect || now - rectCacheTime > RECT_CACHE_MS) {
        cachedCanvasRect = canvas.getBoundingClientRect();
        rectCacheTime = now;
      }
      return cachedCanvasRect;
    };

    const sample = timestamp => {
      rafPending = false;
      if (!lastMouse) return;

      // Adaptive throttling based on page visibility
      const currentThrottle = isPageVisible ? THROTTLE_MS : BACKGROUND_THROTTLE_MS;
      if (timestamp - lastSampleTime < currentThrottle) return;
      
      // Skip expensive operations entirely when page is hidden
      if (!isPageVisible) {
        lastSampleTime = timestamp;
        return;
      }
      
      lastSampleTime = timestamp;

      // Performance: Skip expensive operations if mouse hasn't moved
      if (lastMouse.x === lastMouseX && lastMouse.y === lastMouseY) {
        return;
      }
      lastMouseX = lastMouse.x;
      lastMouseY = lastMouse.y;

      const rect = getCachedCanvasRect(); // Use cached rect instead of expensive getBoundingClientRect
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

      // Update current pixel coordinates for area calculator (keep as fallback)
      currentPixel = {x, y};
      updateAreaPanel();

      // Use reused pixel buffer instead of creating new allocation
      try {
        gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixelBuffer);
      } catch (e) {
        console.warn('[wplace] readPixels failed:', e);
        return;
      }

      const [r, g, b, a] = pixelBuffer;
      const hex = toHexOptimized(r, g, b);
      const det = detintRGB(r, g, b, reusableRgbBuffer);

      let match = matchTinted([r, g, b]) || matchRaw([r, g, b]);
      
      // Store current match for smart brush functionality
      lastDetectedColor = match;

      const paletteLine = match
        ? `Palette: ${match.name} (id ${match.id})`
        : `Palette: -`;

      const colorSquare = match
        ? `<span style="display: inline-block; width: 16px; height: 16px; background-color: rgb(${match.rgb[0]},${match.rgb[1]},${match.rgb[2]}); border: 1px solid #fff; margin-left: 8px; vertical-align: middle;"></span>`
        : '';

      // Performance: Only update HUD if content has actually changed
      const currentRgbValues = `RGB: ${det.r},${det.g},${det.b}`;
      const hasContentChanged = 
        currentRgbValues !== lastRgbValues ||
        paletteLine !== lastPaletteLine ||
        isSmartBrushActive !== lastSmartBrushState;

      if (!hasContentChanged) return;

      // Cache the current values
      lastRgbValues = currentRgbValues;
      lastPaletteLine = paletteLine;
      lastSmartBrushState = isSmartBrushActive;

      // Update HUD content using efficient DOM updates instead of innerHTML
      updateHudContent(currentRgbValues, paletteLine, match);
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

    // Smart brush functionality with performance optimizations
    const colorButtonCache = new Map(); // Cache color button references
    let colorCacheTime = 0;
    const COLOR_CACHE_MS = 1000; // Cache color buttons for 1 second
    const MAX_COLOR_CACHE_SIZE = 64; // Prevent unlimited cache growth
    
    const getColorButton = (colorId) => {
      const now = performance.now();
      // Clear cache periodically or if it gets too large
      if (now - colorCacheTime > COLOR_CACHE_MS || colorButtonCache.size > MAX_COLOR_CACHE_SIZE) {
        colorButtonCache.clear();
        colorCacheTime = now;
      }
      
      if (!colorButtonCache.has(colorId)) {
        const button = document.querySelector(`#color-${colorId}`);
        if (button) {
          colorButtonCache.set(colorId, button);
        }
      }
      return colorButtonCache.get(colorId) || null;
    };

    const selectColorInPalette = (colorId) => {
      const colorButton = getColorButton(colorId); // Use cached button reference
      if (colorButton) {
        // Check if color is locked (has lock icon)
        const isLocked = colorButton.querySelector('svg') !== null;
        if (isLocked) {
          console.log('[Smart Brush] Color is locked, cannot select:', colorId);
          return false;
        }
        
        // Click the color button to select it
        colorButton.click();
        console.log('[Smart Brush] Selected color:', colorId);
        return true;
      }
      return false;
    };

    // Debounced version for performance during rapid drawing operations
    const selectColorDebounced = (colorId) => {
      // Simple rate limiting to prevent excessive timeout clearing
      if (smartBrushDebounce) {
        clearTimeout(smartBrushDebounce);
        smartBrushDebounce = null;
      }
      smartBrushDebounce = setTimeout(() => {
        if (selectColorInPalette(colorId)) {
          lastSelectedColorId = colorId;
          console.log('[Smart Brush] Debounced color change to:', colorId);
          
          // Update HUD using protected RAF pattern instead of nested setTimeout + RAF
          if (lastMouse && !rafPending) {
            rafPending = true;
            requestAnimationFrame(sample);
          }
        }
      }, SMART_BRUSH_DEBOUNCE_MS);
    };

    // Intercept spacebar and mouse down events
    let smartBrushUsedForCurrentSpacePress = false;
    
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Space' && isSmartBrushActive && !smartBrushUsedForCurrentSpacePress) {
        // Only handle if we're over the canvas
        if (lastMouse && document.elementFromPoint(lastMouse.clientX, lastMouse.clientY) === canvas) {
          smartBrushUsedForCurrentSpacePress = true;
          
          // Don't prevent the event, just select the color immediately if it's different
          if (lastDetectedColor && lastDetectedColor.id !== lastSelectedColorId) {
            // For premium colors, check if they're locked
            if (lastDetectedColor.premium) {
              const colorButton = getColorButton(lastDetectedColor.id); // Use cached button reference
              if (colorButton && colorButton.querySelector('svg')) {
                console.log('[Smart Brush] Cannot paint with locked color:', lastDetectedColor.name);
                event.preventDefault();
                event.stopPropagation();
                return;
              }
            }
            
            // Select the detected color in the palette only if it's different
            if (selectColorInPalette(lastDetectedColor.id)) {
              lastSelectedColorId = lastDetectedColor.id;
              console.log('[Smart Brush] Color changed to:', lastDetectedColor.name);
              
              // Update HUD using protected RAF pattern
              if (lastMouse && !rafPending) {
                rafPending = true;
                requestAnimationFrame(sample);
              }
            }
          }
          // Let the spacebar event continue normally after color selection (or if same color)
        }
      }
    }, true);
    
    document.addEventListener('keyup', (event) => {
      if (event.code === 'Space') {
        smartBrushUsedForCurrentSpacePress = false;
      }
    }, true);

    canvas.addEventListener('mousedown', (event) => {
      // Only respond to left mouse button (button 0), ignore right-click (button 2)
      if (event.button !== 0) return;
      
      if (isSmartBrushActive && lastDetectedColor && lastDetectedColor.id !== lastSelectedColorId) {
        // For premium colors, check if they're locked using cached value
        if (lastDetectedColor.premium) {
          const colorButton = getColorButton(lastDetectedColor.id); // Use cached button reference
          const isLocked = colorButton && colorButton.querySelector('svg');
          if (isLocked) {
            console.log('[Smart Brush] Cannot paint with locked color:', lastDetectedColor.name);
            event.preventDefault();
            event.stopPropagation();
            return;
          }
        }
        
        // Use debounced selection for mousedown to reduce overhead during rapid drawing
        selectColorDebounced(lastDetectedColor.id);
        // Let the mouse event continue normally
      }
    }, true);

    // Periodic cache cleanup to prevent memory leaks
    setInterval(() => {
      // Force cache cleanup every 30 seconds to prevent memory buildup
      if (colorButtonCache.size > MAX_COLOR_CACHE_SIZE / 2) {
        colorButtonCache.clear();
        console.log('[wplace] Periodic cache cleanup performed');
      }
      
      // Clear canvas rect cache on interval to ensure freshness
      cachedCanvasRect = null;
    }, 30000);
    
    // Cleanup function for potential future use
    window.__wplaceCleanup = () => {
      colorButtonCache.clear();
      cachedCanvasRect = null;
      if (smartBrushDebounce) {
        clearTimeout(smartBrushDebounce);
        smartBrushDebounce = null;
      }
      console.log('[wplace] Cleanup performed');
    };

    console.log('[wplace] pixel sampler ready (WebGL, optimized memory usage, detint + palette + area calculator + smart brush).');
  })();
})();
