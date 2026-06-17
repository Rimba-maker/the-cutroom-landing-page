# PRD: The Cutroom — Salon & Barbershop

## 1. Brand Identity

**Nama Brand:** The Cutroom
**Alasan Naming:** "Cutroom" = literal tempat memotong rambut, tapi dengan tone editorial/film studio yang modern & masculine-leaning. Singkat, gampang diingat, kerja untuk salon unisex dengan branding kuat di sisi grooming pria.

**Tagline:** *"Your Best Cut, Crafted With Detail."*

**Target Audience:**
- Pria urban usia 20-45 (primary 70%)
- Wanita yang cari salon modern, non-fussy (secondary 30%)
- Profesional muda, eksekutif, mahasiswa kelas atas
- Walk-in & appointment-based customer
- Lokasi: CBD & area perumahan premium

**Brand Voice:**
- Tone: Confident, edgy, masculine tapi inklusif, craftsmanship-focused
- Style copywriting: To-the-point, sedikit street-style, percaya diri tanpa arogan
- Avoid: Bahasa terlalu girly, bahasa flowery

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo bold, nav, CTA "Book Now" |
| 2 | Hero | React island `client:load` | Image dominant + bold statement |
| 3 | Services | React island `client:visible` | List service + harga |
| 4 | Our Style | React island `client:visible` | Gallery hasil potongan (lookbook) |
| 5 | Barbers / Stylists | React island `client:visible` | Tim dengan spesialisasi |
| 6 | The Experience | `.astro` + parallax image | Apa yang bikin beda (kopi, towel hangat, etc) |
| 7 | Pricing | `.astro` static | Pricing list lengkap |
| 8 | Membership | React island `client:visible` | Subscription unlimited cut |
| 9 | Locations | `.astro` static | List cabang + map |
| 10 | Book Online | React island `client:idle` | Booking widget |
| 11 | Footer | `.astro` static | Sosmed, jam buka, kontak |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Services • Lookbook • Tim • Lokasi • Membership
- CTA: **Book Now**

### Hero
- **Headline:** Sharp Cut. Clean Fade. No Compromise.
- **Subheadline:** Barbershop & salon modern untuk pria dan wanita yang serius tentang grooming. Booking online, walk-in welcome.
- **CTA Primary:** Book Sekarang
- **CTA Secondary:** Lihat Services

Stat bar: "20.000+ Cuts • 8 Tahun Pengalaman • 5 Cabang"

### Services
- **Heading:** Services
- **Subheading:** Semua dengan konsultasi dulu — kami pastikan hasilnya pas untukmu.

Grid services:

**FOR HIM:**
- ✂️ **Classic Haircut** — *Rp 85k* (45 min)
- ✂️ **Premium Cut + Wash** — *Rp 125k* (60 min)
- 🧔 **Beard Trim & Shaping** — *Rp 65k* (30 min)
- 🪒 **Hot Towel Shave** — *Rp 95k* (45 min)
- 💆 **Hair + Beard Combo** — *Rp 140k* (75 min)
- 🎨 **Hair Coloring (Pria)** — *Rp 250k+* (90 min)

**FOR HER:**
- ✂️ **Haircut & Style** — *Rp 150k* (60 min)
- 💇 **Cut + Wash + Blow Dry** — *Rp 200k* (75 min)
- 🎨 **Hair Coloring** — *Rp 450k+* (120 min)
- 💧 **Hair Treatment** — *Rp 250k+* (90 min)
- 🌀 **Perm / Straightening** — *Rp 600k+* (180 min)

**ADD-ONS:**
- Hair wash (Rp 35k) • Scalp massage (Rp 50k) • Pomade styling (Rp 25k)

### Our Style
- **Heading:** The Lookbook
- **Subheading:** Hasil kerja kami. Ambil inspirasi, atau show ke barber kami untuk request.
- Masonry grid 12-15 foto hasil potongan
- Filter: Men's Classic • Fade • Long Hair • Beard • Women's Cut • Color

### Barbers / Stylists
- **Heading:** Tangan Yang Mengerti Detail
- 4-6 stylist cards:
  - **Reza Pratama** — Lead Barber, spesialis fade & classic cut, 10+ tahun
  - **Yusuf Maulana** — Beard specialist & traditional shave
  - **Sari Indrawati** — Senior stylist, spesialis women's cut & color
  - **Bram Susanto** — Pomade master, vintage style expert
  - **Linda Tjia** — Coloring specialist, sertifikasi L'Oréal Professional

### The Experience
- **Heading:** Lebih Dari Sekadar Potong Rambut
- **Body:** Di The Cutroom, setiap kunjungan adalah ritual. Welcome coffee, hot towel, head massage, dan barber yang dengerin maumu — bukan cuma pakai gunting otomatis.

Mini cards:
- ☕ Welcome espresso atau teh
- 🔥 Hot towel sebelum cut
- 💆 Free scalp massage
- 🎵 Curated playlist
- 📺 Live sports streaming
- 🍺 Cold beer (selected outlets)

### Pricing
- **Heading:** Harga Transparan, Tidak Ada Hidden Fee
- Full table services + add-ons
- Note: "*Harga belum termasuk PPN. Tip optional, sesuai apresiasi.*"

### Membership
- **Heading:** Member Plans
- **Subheading:** Untuk yang grooming-nya rutin.

3 cards:

**🥉 Bronze — Rp 350k / bulan**
- 2x classic cut / bulan
- 10% off services lain
- Free hair wash

**🥈 Silver — Rp 650k / bulan** ⭐ Most Popular
- Unlimited classic cut
- 1x beard trim / bulan
- 15% off product
- Priority booking

**🥇 Gold — Rp 1.2jt / bulan**
- Unlimited premium cut
- Unlimited beard trim
- Free monthly treatment
- 20% off color/treatment
- Exclusive event invite

### Locations
- **Heading:** Cari The Cutroom Terdekat
- 5 cabang:
  - **SCBD** — Jakarta Selatan (flagship)
  - **Kemang** — Jakarta Selatan
  - **PIK Avenue** — Jakarta Utara
  - **Bintaro** — Tangerang Selatan
  - **Surabaya West** — Surabaya
- Map embed + jam buka tiap cabang

### Book Online
- **Heading:** Book Slot Kamu
- Mini booking form: Pilih cabang → Pilih service → Pilih barber → Pilih tanggal & jam → Submit
- Atau CTA: **Book via WhatsApp**

### Footer
- Tagline: *"Crafted, not just cut."*
- Jam: Senin-Sabtu 10:00-21:00, Minggu 11:00-20:00
- Sosmed: IG (@thecutroom.id), TikTok, YouTube
- Walk-in: "Walk-in welcome, tapi book online aman dari antri 🪒"

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/barbershop-men-haircut-dark | "Barber memotong rambut pria" | 1920x1080 |
| Service - Classic Cut | Pexels | https://www.pexels.com/search/men%20haircut%20barber/ | "Classic haircut session" | 600x800 |
| Service - Fade | Unsplash | https://unsplash.com/s/photos/fade-haircut | "Fade haircut detail" | 600x800 |
| Service - Beard | Pexels | https://www.pexels.com/search/beard%20trim%20barber/ | "Beard trim shaping" | 600x800 |
| Service - Hot Towel | Unsplash | https://unsplash.com/s/photos/hot-towel-shave | "Hot towel shave traditional" | 600x800 |
| Service - Women Cut | Pexels | https://www.pexels.com/search/woman%20haircut%20salon/ | "Women haircut style" | 600x800 |
| Service - Color | Unsplash | https://unsplash.com/s/photos/hair-coloring-salon | "Hair coloring process" | 600x800 |
| Lookbook gallery (10-15) | Unsplash + Pexels | https://unsplash.com/s/photos/mens-hairstyle-modern | Berbagai hasil potongan | 600x800 |
| Stylists portraits | Pexels | https://www.pexels.com/search/barber%20portrait/ | Portrait stylist | 600x800 |
| Experience - Coffee | Unsplash | https://unsplash.com/s/photos/barbershop-coffee | "Welcome coffee barbershop" | 800x600 |
| Experience - Interior | Unsplash | https://unsplash.com/s/photos/barbershop-interior-dark | "Interior barbershop modern" | 1600x900 |
| Locations | Unsplash | https://unsplash.com/s/photos/barbershop-exterior | "Storefront cabang" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Headline: split text reveal per character
const charReveal = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.6 }
  }
}

// Stat bar: counter animation
// Hero image: slight parallax on scroll
const parallaxY = useTransform(scrollY, [0, 500], [0, 150])
```

### Services (React island, `client:visible`)
- Service cards reveal stagger (left-to-right wave)
- Hover: card slide-up + icon scale + background color shift
- Tab switch (For Him / For Her): slide horizontal transition

### Lookbook Gallery (React island, `client:visible`)
- Masonry layout dengan `layout` prop untuk smooth reflow
- Filter chips active: `layoutId` smooth pill animation
- Image hover: scale + dark overlay slide-down with style name
- Lightbox modal pakai `AnimatePresence`

### Barbers Cards (React island, `client:visible`)
- 3D card flip on hover (front: image, back: specialty list)
```tsx
<motion.div
  whileHover={{ rotateY: 180 }}
  transition={{ duration: 0.6, type: "spring" }}
>
```
- Stagger reveal saat scroll into view

### The Experience (parallax `.astro` + small React island)
- Image parallax saat scroll
- Mini cards (kopi, towel, etc): icon bouncy reveal

### Pricing Table
- Row reveal stagger
- Hover row: background highlight

### Membership Cards (React island, `client:visible`)
- 3 cards reveal stagger
- "Most Popular" badge: floating bounce
- Card hover: lift + border accent

### Book Online Form
- Step-by-step animation
- Field appear sequential
- Date picker custom dengan smooth transition

### Scroll Reveal Pattern (reusable)
```tsx
const sharpReveal = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
}
```

### Cursor Effect (optional, desktop only)
- Custom cursor follow dengan ✂️ icon di hover atas service cards
- Implement pakai `useMotionValue` + `mousePosition` tracking

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Services, Lookbook, Barbers, Membership
- `client:idle` → Book Online form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** The Cutroom — Modern Barbershop & Salon Jakarta
- **Description:** Barbershop & salon modern untuk pria & wanita. Classic cut, fade, beard trim, hair coloring. 5 cabang di Jakarta, Tangerang, Surabaya. Book online.
- **Keywords:** barbershop jakarta, salon pria, haircut jakarta, fade jakarta, premium barbershop, salon kemang
- **OG Image:** Hero shot dengan logo overlay, dark moody tone (1200x630)
- **Schema:** `BeautySalon` (LocalBusiness) + `Service` schema
