# Playground 1: Waterfall Gallery (瀑布流图片墙)

## 中文

这是一个「图片瀑布流 + 左侧分类导航 + 点赞交互」的基础项目，重点用来练习：
- 常见业务页面结构（Nav + Masonry + Card）
- 在 DOM 元素上做 WebSpatial 的空间化（`enable-xr` + CSS 变量）

### 运行

- `pnpm install`
- `pnpm dev`
- (Optional) `pnpm dev:webspatial`

### 入口位置

- Main page: `src/pages/main/App.tsx`
- Nav component: `src/pages/main/component/Nav.tsx`
- Image card: `src/pages/main/component/ImageCard.tsx`
- Styles: `src/pages/main/**/*.css`

### 新手任务（WebSpatial）

#### 任务 1：让一个卡片空间化

- 找到卡片节点（例如 `.tile` 或你自己的卡片容器）
- 给它加上 `enable-xr`
- 逐步调大深度距离（与父级的 back offset）：
  - 例如给样式加 `style={{ '--xr-back': 60 }}`
  - 或者在 CSS 里设置 `--xr-back: 60;`

#### 任务 2：尝试改背景材质（页面整体 vs 单个卡片）

- 给页面根容器或某个空间化元素尝试设置：
  - `--xr-background-material: translucent`
  - `--xr-background-material: transparent`

#### 任务 3：做一个小改造

- 把点赞按钮做成「空间按钮」：给按钮加 `enable-xr` 并设置一个较小的 `--xr-back`（例如 10~30）
- 或者让左侧导航整体空间化，并给它更大的圆角（`borderRadius`）

## English

This playground is a basic gallery page with a category sidebar, a waterfall (masonry-like) layout, and a like button. It is designed to practice:
- Typical app layout (Nav + Masonry + Card)
- Spatialized DOM in WebSpatial (`enable-xr` + CSS variables)

### Run

- `pnpm install`
- `pnpm dev`
- (Optional) `pnpm dev:webspatial`

### Where to Look

- Main page: `src/pages/main/App.tsx`
- Nav component: `src/pages/main/component/Nav.tsx`
- Image card: `src/pages/main/component/ImageCard.tsx`
- Styles: `src/pages/main/**/*.css`

### Beginner Tasks (WebSpatial)

#### Task 1: Spatialize a card

- Pick a card node (e.g. `.tile` or your card wrapper)
- Add `enable-xr`
- Gradually increase the back offset (depth distance from its parent):
  - e.g. `style={{ '--xr-back': 60 }}`
  - or set `--xr-back: 60;` in CSS

#### Task 2: Try materials (page-level vs element-level)

- Try setting on the page root or a spatialized element:
  - `--xr-background-material: translucent`
  - `--xr-background-material: transparent`

#### Task 3: Small refactor

- Make the like button a spatial button: add `enable-xr` and a small `--xr-back` (e.g. 10–30)
- Or spatialize the whole sidebar and increase its `borderRadius`
