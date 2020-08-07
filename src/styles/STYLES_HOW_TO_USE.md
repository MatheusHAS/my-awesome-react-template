# 🎨 How to CSS

> How to use css classes on this project

# 🎯 Utility

## 💻 Mediaquery

| Prefix  | min-width | max-width  |
| ------- | --------- | ---------- |
| `sm`    | `48em`    |            |
| `maxsm` |           | `47.937em` |
| `md`    | `48em`    |            |
| `lg`    | `75em`    |            |

## 📏 margin

Available sizes: `0 4 8 12 16 24 32 40 48 56 64`;

> Possibility to change in `styles/utility/src/_margin.scss`;

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

To use default classes:

To `margin-top: 4px;` use `.u-mt-4`;

To `margin-bottom: 12px;` use `.u-mb-12`;

To `margin-left: 24px;` use `.u-ml-24`;

To `margin-right: 24px;` use `.u-mr-24`;

To `margin-left: 24px;` on resolution `> sm` use `u-ml-24@sm`;

To `margin-left: 64px;` on resolution `> md` use `u-ml-64@md`;

## 📏 padding

Available sizes: `0 4 8 12 16 24 32 40 48 56 64`;

> Possibility to change in `styles/utility/src/_padding.scss`;

| Prefixes | Property         |
| -------- | ---------------- |
| `u-pt`   | `padding-top`    |
| `u-pb`   | `padding-bottom` |
| `u-pl`   | `padding-left`   |
| `u-pr`   | `padding-right`  |

Examples:

To `padding-top: 12px;` use `u-pt-12`;

To `padding-top: 12px;` on resolution `> sm` use `u-pt-12@sm`;

## 📝 font-size

Available sizes: `12 14 16 18 20 22 24 26 28 40 52 58 60`;

> Possibility to change in `styles/utility/src/_font-size.scss`;

| Prefix | Property    |
| ------ | ----------- |
| `u-fs` | `font-size` |

Examples:

To `font-size: 24px;` use `u-fs-24`;

To `font-size: 24px;` on resolution `> sm` use `u-fs-24@sm`;

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

To `display: none;` use `u-dn`;

To `display: none;` on mobile, and `display: flex;` on resolution `> sm` use `u-dn u-flex@sm`;
