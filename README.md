# List Virtualization

This is a project exploring how to render large lists in React apps more performantly.

## No Library Demo

我們假設 list 中每個 item 的高度都是相同的，那麽 list 的高度就會是 list height \* list count，這個總高度稱為 inner height。另外，需要一個固定高度的 window 來渲染可視範圍內的 list items，這個高度稱為 window height。list 在 window 可視範圍上方的高度稱為 scrollTop。

建立一個 SimpleVirtualizedList 元件，裡面分成兩層，外層稱為 scroll，用來監聽往下滾動的事件(scroll)，內層為 inner，是一個 position: relative 的容器，高度就是 innerHeight，裡面的 list item 用絕對定位定在容器上方，每個 item 都設一個相對於 window 的 top 定位。

這樣整個 APP 就只會渲染可視範圍內能容納的 10 個 item，然後透過往下滾動，會繼續渲染接下來的 10 個 item，直到 list 被滾動到下方沒有東西為止

<img src="src/assets/no-library-demo.gif" alt="no-library" />

## CSS Solution -- `content-visibility: auto`

`content-visibility: auto` 是一個 2020 年才加入的 css 屬性，可以讓瀏覽器在渲染時，選擇性地跳過不在可視範圍內的元素，不去計算它們的內容和佈局，會用 placeholder 來取代該元素。所謂跳過渲染內容是指：元素還是會出現在 DOM 上，但是因為尚未進入可視範圍，其子代不會被渲染，因此可優化初次渲染時的效能。但是使用這個方法有幾個缺點：一是往下滾動時 scrollbar 會出現抖動，另外如果某列表中有些元素設置`visibility: hidden`或`display:none`，在 offscreen(出現在可視範圍外)時，因為瀏覽器會跳過渲染其樣式，因此他們仍會出現在 DOM 中。
補充：可以在 list-item 上另外加上`contain-intrinsic-size`，這是一個告訴瀏覽器元素不在可視範圍內時，placeholder 的高度和寬度，可以稍微提高滾動時的效能。

<img src="src/assets/use-css.gif" alt="content-visibility-auto" />

### React-Virtualized
React-Virtualized是一個專門處理list-virtualization的套件。它透過List等component建立可滾動的window，提供list和list item的基礎樣式，並可自己客製化調整。透過```import 'react-virtualized/styles.css';``` 這張stylesheet，可以讓使用者額外使用Tailwind等工具來客製化列表的樣式。它的運作和上面no-library是差不多的，都是用絕對定位的items在相對定位的容器裡面滾動，但是我們不用自己計算scroll top，也不用寫onScroll的事件處理，只要定好itemHeight, itemCount, windowHeight，以及render單一item的renderer function即可，非常方便。
但是和Vite不太兼容，直接使用會有一個bug，可以透過修改Vite config來解決。

<img src="src/assets/react-virtualized-list.gif" alt="content-visibility-auto" />

