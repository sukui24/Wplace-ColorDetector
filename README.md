# Wplace-HelperUtils
A set of Quality of Life utils for wplace.live web game.

## Overview

This extension adds a draggable HUD(s):

1. Color Detector - shows every color that you're hovered on. This makes color detection easier. It's still unstable and it is possible that it will display wrong color or not display color at all, but for at least free colors it seems to be working fine.

<img width="830" height="301" alt="image" src="https://github.com/user-attachments/assets/ec2fab2b-5701-4e1e-bec6-adeaca293713" />


2. Area Calculator - Helps when you want to calculate an area of pixels. Simply set first corner (e.g. Top-Left) and second opposite corner (e.g. Bottom-Right) and it will calculate the area for you.

<img width="374" height="355" alt="image" src="https://github.com/user-attachments/assets/fa3085cd-7c08-4c04-8278-b1306e359198" />


Also performance is not tested at all and it's not guaranteed that extenstion will work smooth and perfect.

## Installation Instructions

### Install on Chrome

1. Install the [TamperMonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) extension for Chrome.
2. Right-click the extension.  
3. Left-click **"Manage Extension."**  
4. Enable **"Developer Mode."**  
5. Enable **"Allow user scripts."**
6. **One-click install:** [Install Color Detector](https://github.com/sukui24/Wplace-ColorDetector/releases/download/v0.2.0/WplaceColorDetector.user.js)  
   TamperMonkey will automatically detect the userscript and prompt you to install it.
7. Refresh [wplace.live](https://wplace.live/).

---

### Install on Microsoft Edge

1. Install the [TamperMonkey](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd) extension for Edge.  
2. Right-click the extension.
3. Left-click **"Manage Extension."**  
4. Enable **"Developer Mode."**  
5. Download [WplaceColorDetector.user.js](https://github.com/sukui24/Wplace-ColorDetector/releases/) from the latest release.
6. Open the TamperMonkey Dashboard.  
7. Drag the `WplaceColorDetector.user.js` file into the TamperMonkey dashboard.
8. Click **"Install"**.  
9. Enable Color detector inside the TamperMonkey dashboard.  
10. Refresh [wplace.live](https://wplace.live/).

---

### Install on Firefox

1. Install the [TamperMonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/) extension for Firefox.
2. **One-click install:** [Install Color Detector](https://github.com/sukui24/Wplace-ColorDetector/releases/download/v0.2.0/WplaceColorDetector.user.js)  
   TamperMonkey will automatically detect the userscript and prompt you to install it.
3. Refresh [wplace.live](https://wplace.live/).
