# 🚗 Indian VIN Decoder

A client-side **Vehicle Identification Number (VIN) decoder** for Indian vehicles. Enter a 17-character VIN and instantly get the manufacturer, manufacturing year, and month — no API calls, no backend, no dependencies.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-000000?style=flat-square&logo=vercel)](https://vin-decoder-xi.vercel.app)

---

## 📋 Supported Manufacturers

| | | | |
|---|---|---|---|
| Tata Motors | Mahindra | Maruti Suzuki | Hyundai |
| Toyota | Honda | Ford | Chevrolet |
| Mitsubishi | Nissan | Renault | Kia |
| Volkswagen | Skoda | Fiat | Jeep |
| MG | | | |

**17 manufacturers** covering the vast majority of Indian-market vehicles.

---

## 🔧 How It Works

1. Enter a 17-character VIN (e.g., `MAT629103K1H01674`)
2. The first 3 characters (WMI — World Manufacturer Identifier) identify the manufacturer
3. Manufacturer-specific lookup tables decode the **year** and **month** from specific VIN character positions
4. Results are displayed instantly in a clean card layout

Different manufacturers use different encoding schemes — this tool handles **6 year-encoding types** and **5 month-encoding types**:

| Encoding | Used by |
|----------|---------|
| **Year Type 1** (A-T → 2010-2030) | Tata, Honda, Mahindra, Hyundai, etc. |
| **Year Type 4** (2-digit number → 2010-2030) | Volkswagen, Skoda, Toyota |
| **Month Type 1** (A-P → Jan-Dec) | Tata, Honda, Hyundai |
| **Month Type 5** (1-C → Jan-Dec) | Nissan, Renault |

---

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)

- **Zero npm dependencies** — pure vanilla HTML/CSS/JS
- **Zero API calls** — all decoding logic is client-side with hardcoded lookup tables
- **Zero build step** — served as-is by Vercel as a static site

---

## 📁 Project Structure

```
VIN-Decoder/
├── index.html       # Main page with VIN input and result cards
├── script.js        # All decoding logic (~320 lines)
├── style.css        # Responsive styling
├── disclaimer.html  # Legal disclaimer page
└── TODO             # Known limitations
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/ThunderDrag/vin-decoder.git

# Open in browser — no build step needed
open VIN-Decoder/index.html
```

---

## ⚠️ Known Limitations

- No support for older Maruti Suzuki cars (pre-2010 encoding)
- Volkswagen and Skoda share the manufacturer code `MEX` after 2021 (ambiguity)
- Ford's month encoding requires additional logic not yet implemented
- Only decodes manufacturer, year, and month — plant/serial number not included

See [open issues](https://github.com/ThunderDrag/vin-decoder/issues) for planned improvements.
