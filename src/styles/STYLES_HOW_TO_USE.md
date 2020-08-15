[![Netlify Status](https://api.netlify.com/api/v1/badges/1c16823a-5790-4ae8-bae3-ad133b7cbb17/deploy-status)](https://app.netlify.com/sites/my-awesome-react-template/deploys)

## [✨ Click here to visit this project on netlify](https://my-awesome-react-template.netlify.app/)

# 🎨 How to CSS

> How to use css classes on this project

# 💻 Mediaquery and prefix sizes

| Prefix  | min-width | max-width  |
| ------- | --------- | ---------- |
| `xs`    |           | `47.937em` |
| `sm`    | `48em`    |            |
| `maxsm` |           | `47.937em` |
| `md`    | `48em`    |            |
| `lg`    | `75em`    |            |

# 🎯 Objects

## 📏 Columns (grid system)

Max columns: `12`;

> Possibility to change in [`styles/objects/src/_layout.scss`](objects/src/_layout.scss);

> Based on 12 cols (default)

| Class         | Size        |
| ------------- | ----------- |
| `o-column-1`  | `8.33333%`  |
| `o-column-2`  | `16.66667%` |
| `o-column-3`  | `25%`       |
| `o-column-4`  | `33.33333%` |
| `o-column-5`  | `41.66667%` |
| `o-column-6`  | `50%`       |
| `o-column-7`  | `58.33333%` |
| `o-column-8`  | `66.66667%` |
| `o-column-9`  | `75%`       |
| `o-column-10` | `83.33333%` |
| `o-column-11` | `91.66667%` |
| `o-column-12` | `100%`      |

---

> 💡 Always use inside a `o-row` element;

> 💡 Always use use a base column class: `o-column`;

---

Examples:

To `Column` with `6` of size in all resolutions, use:

`o-column o-column-6@xs`

---

To `Column` with `6` in `xs`, `4` in `sm` and `2` in `> md`, use:

`o-column o-column-6@xs o-column-4@sm o-column-2@md`

# 🎯 Utility

## 📏 margin

Available sizes: `0 4 8 12 16 24 32 40 48 56 64`;

> Possibility to change in [`styles/utility/src/_margin.scss`](utility/src/_margin.scss);

| Prefixes | Property        |
| -------- | --------------- |
| `u-mt`   | `margin-top`    |
| `u-mb`   | `margin-bottom` |
| `u-ml`   | `margin-left`   |
| `u-mr`   | `margin-right`  |

| Class      | Description     |
| ---------- | --------------- |
| `u-m-0`    | `margin: 0;`    |
| `u-m-auto` | `margin: auto;` |

---

Examples:

To use default classes:

To `margin-top: 4px;` use:

`u-mt-4`

---

To `margin-bottom: 12px;` use class:

`u-mb-12`

---

To `margin-left: 24px;` use class:

`u-ml-24`

---

To `margin-right: 24px;` use class:

`u-mr-24`

---

To `margin-left: 24px;` on resolution `> sm` use class:

`u-ml-24@sm`

---

To `margin-left: 64px;` on resolution `> md` use class:

`u-ml-64@md`

---

To `margin-bottom: 32px;` in `xs (mobile)` and `margin-bottom: 64px;` in resolution `> md` use class:

`u-mb-32 u-mb-64@md`

---

## 📏 padding

Available sizes: `0 4 8 12 16 24 32 40 48 56 64`;

> Possibility to change in [`styles/utility/src/_padding.scss`](utility/src/_padding.scss);

| Prefixes | Property         |
| -------- | ---------------- |
| `u-pt`   | `padding-top`    |
| `u-pb`   | `padding-bottom` |
| `u-pl`   | `padding-left`   |
| `u-pr`   | `padding-right`  |

---

Examples:

To `padding-top: 12px;` use class:

`u-pt-12`

---

To `padding-top: 12px;` on resolution `> sm` use class:

`u-pt-12@sm`

---

## 📝 font-size

Available sizes: `12 14 16 18 20 22 24 26 28 40 52 58 60`;

> Possibility to change in [`styles/utility/src/_font-size.scss`](utility/src/_font-size.scss);

| Prefix | Property    |
| ------ | ----------- |
| `u-fs` | `font-size` |

Examples:

To `font-size: 24px;` use class:

`u-fs-24`

---

To `font-size: 24px;` on resolution `> sm` use class:

`u-fs-24@sm`

---

## 📝 text-align

| Class  | Description           |
| ------ | --------------------- |
| `u-tc` | `text-align: center;` |
| `u-tr` | `text-align: right;`  |
| `u-tl` | `text-align: left;`   |

## 📌 flex

| Class                | Description                       |
| -------------------- | --------------------------------- |
| `u-flex-row`         | `flex-direction: row;`            |
| `u-flex-column`      | `flex-direction: column;`         |
| `u-items-center`     | `align-items: center;`            |
| `u-justify-center`   | `justify-content: center;`        |
| `u-justify-between`  | `justify-content: space-between;` |
| `u-flex-row-reverse` | `flex-direction: row-reverse;`    |

## ✒️ font-weight

| Class      | Description         |
| ---------- | ------------------- |
| `u-fw-300` | `font-weight: 300;` |
| `u-fw-400` | `font-weight: 400;` |
| `u-fw-500` | `font-weight: 500;` |
| `u-fw-600` | `font-weight: 600;` |
| `u-fw-700` | `font-weight: 700;` |

## 👓 display

| Class    | Description       |
| -------- | ----------------- |
| `u-dn`   | `display: none;`  |
| `u-db`   | `display: block;` |
| `u-flex` | `display: flex;`  |

---

To `display: none;` use class:

`u-dn`

---

To `display: none;` on mobile, and `display: flex;` on resolution `> sm` use class:

`u-dn u-flex@sm`
