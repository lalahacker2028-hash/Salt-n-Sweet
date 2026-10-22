# Salt'n Sweet — Restaurant, Cafe & Bakery (Mirpur Mathelo)

Premium restaurant & bakery website with direct WhatsApp ordering and client-side shopping cart.

---

## 🚀 Vercel Par Live Karne Ka Complete Tarika (Step-by-Step Guide)

Aap is website ko Vercel par 2 aasan tareeqon se live kar sakte hain:

### Tareeqa 1: GitHub ke zariye (Sab se behtareen aur automatic)

1. **GitHub par code upload karein:**
   - GitHub par aik new repository banayein (jaise: `salt-n-sweet-website`).
   - Apne computer ya AI Studio se code ko GitHub repo par push/upload karein.

2. **Vercel par login karein:**
   - [vercel.com](https://vercel.com) par jayein aur apne GitHub account se **Sign In** karein.

3. **New Project Import karein:**
   - Dashboard par **"Add New..."** -> **"Project"** par click karein.
   - Apni GitHub repository (`salt-n-sweet-website`) ko select karein aur **"Import"** dabayein.

4. **Project Settings (Yeh pehle se configure hain):**
   - **Framework Preset**: `Vite` (Vercel automatically detect kar leta hai)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **"Deploy" par click karein:**
   - Sirf 1 minute mein aapki website live ho jayegi aur aapko aik free URL mil jayega (e.g. `https://salt-n-sweet-restaurant.vercel.app`).
   - Aap baad mein apna custom domain (jaise `saltnsweet.com` ya `.pk`) bhi Vercel settings mein add kar sakte hain.

---

### Tareeqa 2: Vercel CLI ke zariye (Terminal se Direct)

Agar aap apne computer ke terminal/command prompt se deploy karna chahte hain:

1. Vercel CLI install karein:
   ```bash
   npm i -g vercel
   ```

2. Project folder mein jayein aur deploy command chalayein:
   ```bash
   vercel
   ```

3. Production par direct live karne ke liye:
   ```bash
   vercel --prod
   ```

---

## 📁 Pre-Configured Files for Vercel

- `vercel.json`: Single Page Application (SPA) routing, redirects aur caching headers set hain taake koi 404 error na aaye.
- `public/assets/images/`: Tamam real food images production build (`dist/`) mein optimize ho kar copy hoti hain.
- `package.json`: Vite build scripts aur dependencies configured hain.

---

## 📞 Salt'n Sweet Contact Details
- **Location**: Data-3 Petroleum, Near Bus Stand, Mirpur Mathelo, Sindh, Pakistan.
- **WhatsApp**: +92 300 2696166 / +92 336 6541666
