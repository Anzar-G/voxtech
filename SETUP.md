# Setup Instructions - Muhammad Nizar Al-Faris Portfolio

## ⚠️ Current Status

TypeScript errors yang Anda lihat di IDE adalah **NORMAL** dan akan hilang setelah dependencies diinstall. Error ini muncul karena `node_modules` belum ada.

---

## 🚀 Quick Start Guide

### Step 1: Install Dependencies

Buka terminal di folder project dan jalankan:

```bash
npm install
```

**Atau jika menggunakan yarn:**

```bash
yarn install
```

**Atau jika menggunakan pnpm:**

```bash
pnpm install
```

Ini akan menginstall semua dependencies yang dibutuhkan:

- ✅ react & react-dom
- ✅ lucide-react (untuk icons)
- ✅ recharts (untuk charts)
- ✅ @types/node (TypeScript types)
- ✅ vite & @vitejs/plugin-react
- ✅ typescript

### Step 2: Start Development Server

Setelah install selesai, jalankan:

```bash
npm run dev
```

Server akan start di `http://localhost:5173` (atau port lain yang tersedia).

### Step 3: Open in Browser

Buka browser dan navigasi ke URL yang ditampilkan di terminal (biasanya `http://localhost:5173`).

---

## ✅ Expected Result

Setelah `npm install` selesai:

- ❌ Semua TypeScript errors akan **HILANG**
- ✅ IDE akan mengenali semua imports
- ✅ Auto-complete akan berfungsi
- ✅ Type checking akan aktif

---

## 🔧 Troubleshooting

### Jika `npm: command not found`

Anda perlu install Node.js terlebih dahulu:

1. Download dari: <https://nodejs.org/>
2. Install versi LTS (Long Term Support)
3. Restart terminal
4. Verify dengan: `node --version` dan `npm --version`

### Jika ada error saat install

Coba hapus cache dan install ulang:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Jika port 5173 sudah digunakan

Vite akan otomatis menggunakan port lain (5174, 5175, dst). Lihat output di terminal untuk URL yang benar.

---

## 📦 What Gets Installed

Setelah `npm install`, folder `node_modules` akan berisi:

```
node_modules/
├── react/                 # React library
├── react-dom/             # React DOM renderer
├── lucide-react/          # Icon library
├── recharts/              # Chart library (untuk Ads Performance)
├── @types/node/           # TypeScript types untuk Node.js
├── vite/                  # Build tool
├── typescript/            # TypeScript compiler
└── ... (dan dependencies lainnya)
```

Total size: ~200-300 MB (normal untuk React project)

---

## 🎯 Next Steps After Setup

1. ✅ Verify semua sections render dengan benar
2. ✅ Test navigation (klik setiap menu di sidebar)
3. ✅ Test mobile view (resize browser atau buka DevTools)
4. ✅ Click semua external links (projects, social media)
5. ✅ Test contact form
6. ✅ Test project filter tabs
7. ✅ Verify hover effects

---

## 🚢 Ready to Deploy?

Setelah testing lokal selesai, build untuk production:

```bash
npm run build
```

Ini akan create folder `dist/` dengan optimized files untuk deployment.

Deploy ke Vercel (recommended):

```bash
# Install Vercel CLI (jika belum)
npm i -g vercel

# Deploy
vercel --prod
```

Atau push ke GitHub dan connect ke Vercel dashboard untuk auto-deployment.

---

## 📝 Summary

**Current errors are EXPECTED** karena dependencies belum terinstall.

**Solution:** Jalankan `npm install` dan semua error akan hilang! 🎉
