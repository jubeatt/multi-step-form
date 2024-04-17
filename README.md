# Frontend Mentor - Multi-step form solution

這是來自 [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) 的專案。

[Frontend Mentor](https://www.frontendmentor.io/) 是一個工程師的交流網站，裡面會提供與前端相關的各種題目，你可以從中挑出你有興趣的來當作練習，藉此來和其他的工程師互相交流。

- [Frontend Mentor - Multi-step form solution](#frontend-mentor---multi-step-form-solution)
  - [Overview](#overview)
  - [連結](#連結)
  - [使用工具](#使用工具)
  - [開發手冊](#開發手冊)
  - [學習紀錄](#學習紀錄)
    - [Tailwind - 怎麼設定 background-image](#tailwind---怎麼設定-background-image)
    - [Tailwind - 只使用一次性的值該怎麼寫](#tailwind---只使用一次性的值該怎麼寫)
    - [Next.js - 怎麼設定字型](#nextjs---怎麼設定字型)
    - [Next.js - 共通的 Layout 可以怎麼設定](#nextjs---共通的-layout-可以怎麼設定)
  - [總結](#總結)

## Overview

![screenshot](./screenshot.jpeg)

這是一個按照步驟來完成的表單，使用者必須要能夠：

- 依照順序來填入表單
- 回到上一步來修改過去的選擇
- 在最後一步的總結畫面上看到所有的選擇，並且確認
- 透過 hover 來看出可互動的元件
- 看到到表單的驗證訊息（必填沒填、格式不正確）

## 連結

- Live Site 連結: [https://multi-step-form-mu-five.vercel.app/](https://multi-step-form-mu-five.vercel.app/)
- Solution 連結: [Add solution URL here](https://your-solution-url.com)

## 使用工具

- Next.js (Pages Router)
- TypeScript
- Tailwind CSS
- Semantic HTML5 markup
- RWD support (Mobile First)
- Flexbox

## 開發手冊

1. 使用 npm 作為 package manager
2. node 版本為 v20.10.0
3. 建議優先使用 `npm ci` 來安裝 package，真的不行再改用 `npm install`

## 學習紀錄

這邊會列出幾個當初碰到的問題，以及後來解決的方式，分別為：

- Tailwind - 怎麼設定 `background-image`
- Tailwind - 只使用一次性的值該怎麼寫
- Next.js - 怎麼設定字型
- Next.js - 共通的 Layout 可以怎麼設定

### Tailwind - 怎麼設定 background-image

之前在用 Tailwind 的時候剛好都沒有碰過要設定背景圖片的屬性，所以當時就小愣了一下並在內心 OS：「啊，這也能用 utility class 來設定嗎？有這麼簡單嗎？」

答案是肯定的。

[官方文件](https://tailwindcss.com/docs/background-image#customizing-your-theme) 中提供了兩種做法，一種是寫在 `tailwind.config.js` 裡面，例如：

```js
const config: Config = {
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-desktop': "url('/bg-sidebar-desktop.svg')"
      }
    }
  },
  plugins: []
}
export default config
```

另外一種是透過免洗屬性（Arbitrary values）來添加：

```html
<div class="bg-[url('url('/bg-sidebar-desktop.svg')')]">
  <!-- ... -->
</div>
```

我自己是選擇第一種，不過後來認為第二種好像也還不錯就是了。

### Tailwind - 只使用一次性的值該怎麼寫

這個問題我得先自打臉一下，其實官方文件都有針對這個做解說，只是我當初看得不夠仔細所以就忽略了 🥹。

大部分的 css 屬性在文件的最下面通常都會有一段叫做「Arbitrary values」的段落，裡面就會告訴你這個屬性的 Arbitrary values 是怎麼寫的。像當初我是卡在 `box-shadow` 的寫法不正確，因為我原本的寫法是：

```html
<div class="shadow-[0 35px 60px 15px rgba(0,0,0,0.3)]">
  <!-- ... -->
</div>
```

但實際上應該要是：

```html
<div class="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
  <!-- ... -->
</div>
```

只能說文件真的要認真看，亂槍打鳥是不一定找得到答案的（雖然也是有誤打誤撞就猜中了的情況 XD）。

### Next.js - 怎麼設定字型

以往在寫 SPA 的時候可能要自己去網路上下載對應的文字檔案，然後在 CSS 用 `@import` 來引入，但 Next.js 裡面都幫你處理好了，你只要直接指定好你要的字型跟樣式即可，像在這份專案裡我是這樣寫的：

```ts
// src/layout.tsx
import type { ReactNode } from 'react'
import { Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Layout({ children }: { children: ReactNode }) {
  return <main className={`${ubuntu.className}`}>{children}</main>
}
```

如果你沒有什麼特殊需求的話基本上就這樣而已，非常的簡單又樸實無華對吧！所以詳細說明就留給[官方文件](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts)囉。

### Next.js - 共通的 Layout 可以怎麼設定

有些網站會有所有頁面都出現的那種元件（雖然這專案沒有），這時候你不會想寫在每個 Component 裡面都寫一遍，因此就有了 Layout 元件的寫法，內容大概會像這樣：

```ts
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

在 `Layout` 裡面把要共用的元件放進去，接著在開一個 `children` 來當作插槽，這樣子就可以把 `Layout` 當作是 Wrapper（抱歉，我實在不知道這中文該怎麼翻比較順）來使用了。

有了 Wrapper 以後，接著就是把內容傳進去就行了：

```ts
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
```

## 總結

其實本來是只打算想練習 Tailwind 的，但想說也是時候來嘗試一下新的技術比較好，例如最近挺夯的 Next.js。

實際寫完後好像 Tailwind 的部分練習到了比較多，Next.js 的部分因為專案太小所以有很多功能就算想用也用不到 XD，像是 Router、Fetching、SSR、ISR 等等，總覺得有點浪費了 Next.js 本身的優勢了，希望下次可以找個更適合的專案來練練手。

不過 Tailwind 的部分真的是有越寫越上手（撇開查文件看 class 名稱怎麼寫的部分），也越來越能體會為什麼很多人很愛用的理由。以我自己來說的話，光是下面這個好處就能說服我為什麼要用它了：

- 不用想 class 名字（其實我沒有取名障礙，但有發現名字取得不好的話後面會有點誤導，而且要再回頭改的話很麻煩）
- 想要什麼就直接寫，例如最常用的 margin、padding，不用在到對應的 class 去寫
- RWD 寫起來比較快，直接用 `:md :lg` 來添加就好，也可以直接從那個標籤身上看到原本有下哪些屬性，我自己覺得比傳統的 media query 更加一目瞭然

但一長條的 class 名稱會看到眼花這一點確實是不可否認的，只能說還是要看自己取捨看看值不值得囉。
