# List Virtualization

This is a project exploring how to render large lists in React apps more performantly.

## No Library Demo
我們假設list中每個item的高度都是相同的，那麽list的高度就會是list height * list count，這個總高度稱為inner height。另外，需要一個固定高度的window來渲染可視範圍內的list items，這個高度稱為window height。list在window可視範圍上方的高度稱為scrollTop。

建立一個SimpleVirtualizedList元件，裡面分成兩層，外層稱為scroll，用來監聽往下滾動的事件(scroll)，內層為inner，是一個position: relative的容器，高度就是innerHeight，裡面的list item用絕對定位定在容器上方，每個item都設一個相對於window的top定位。

這樣整個APP就只會渲染可視範圍內能容納的10個item，然後透過往下滾動，會繼續渲染接下來的10個item，直到list被滾動到下方沒有東西為止

<img src="src/assets/no-library-demo.gif" alt="no-library" />