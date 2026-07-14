# vin-decoder

client-side indian vin decoder — 17 manufacturers, zero deps, zero api calls.

[![live demo](https://img.shields.io/badge/live%20demo-vercel-000000?style=flat-square&logo=vercel)](https://vin-decoder-xi.vercel.app)

![html](https://img.shields.io/badge/html-E34F26?style=flat-square&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![vercel](https://img.shields.io/badge/vercel-000000?style=flat-square&logo=vercel)

`vanilla js` `vercel`

---

## supported manufacturers

| | | | |
|---|---|---|---|
| tata motors | mahindra | maruti suzuki | hyundai |
| toyota | honda | ford | chevrolet |
| mitsubishi | nissan | renault | kia |
| volkswagen | skoda | fiat | jeep |
| mg | | | |

17 manufacturers covering most indian-market vehicles.

---

## how it works

1. enter a 17-character vin (e.g. `MAT629103K1H01674`)
2. first 3 chars (wmi) identify the manufacturer
3. manufacturer lookup tables decode **year** and **month**
4. results shown instantly in a card layout

handles 6 year-encoding types and 5 month-encoding types:

| encoding | used by |
|----------|---------|
| year type 1 (a-t → 2010-2030) | tata, honda, mahindra, hyundai, etc. |
| year type 4 (2-digit → 2010-2030) | volkswagen, skoda, toyota |
| month type 1 (a-p → jan-dec) | tata, honda, hyundai |
| month type 5 (1-c → jan-dec) | nissan, renault |

---

## stack

- zero npm dependencies — pure vanilla html/css/js
- zero api calls — all decoding client-side
- zero build step — static site on vercel

---

## project structure

```
VIN-Decoder/
├── index.html
├── script.js
├── style.css
├── disclaimer.html
└── TODO
```

---

## run locally

```bash
git clone https://github.com/kjhq/vin-decoder.git
open VIN-Decoder/index.html
```

---

## known limitations

- no support for older maruti suzuki (pre-2010 encoding)
- vw/skoda share `MEX` after 2021 (ambiguity)
- ford month encoding not fully implemented
- decodes manufacturer, year, month only — not plant/serial

see [open issues](https://github.com/kjhq/vin-decoder/issues) for planned work.

---

<div align="center">

built by [kjhq](https://kjhq.dev) · [@kjhqdev](https://x.com/kjhqdev)

</div>
