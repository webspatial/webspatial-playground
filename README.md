# WebSpatial Playgrounds (Vite + React)

## 中文

这是一组用于学习 WebSpatial 的小型练习项目（Vite + React），包含：图片瀑布流（UI/布局 + 空间化）与反应力小游戏（计时/交互 + 可扩展到 3D Reality）。

### 项目

- `playground1`：图片瀑布流（分类导航 + 瀑布流卡片 + 点赞交互），适合从 `enable-xr`/`--xr-back` 开始入门。
- `playground2`：60 秒反应力小游戏（随机方块 + 计分 + 倒计时），适合练习交互与后续迁移到 `Reality`/`Entity`。

### 快速开始

#### 环境要求

- Node.js 22+
- pnpm

#### 运行

- `playground1`（瀑布流）
  - `cd playground1`
  - `pnpm install`
  - `pnpm dev`
  - (Optional) `pnpm dev:webspatial`

- `playground2`（小游戏）
  - `cd playground2`
  - `pnpm install`
  - `pnpm dev`
  - (Optional) `pnpm dev:webspatial`

### 学习目标

- Spatialized DOM：在任意元素上尝试 `enable-xr` 与 `--xr-back` 等 CSS 变量
- Material/Background：尝试调整 `--xr-background-material`、透明度、圆角等视觉效果
- Interaction：练习计时、随机、计分、开始/停止等交互的实现与调试
- Upgrade to Reality：把 2D DOM 逻辑迁移到 `Reality`，用更多 `Entity` 组合 3D 场景并绑定空间交互事件

### 仓库描述（GitHub About）

WebSpatial Playgrounds：两个 Vite + React 练习项目（图片瀑布流 & 反应力小游戏），用于快速上手 WebSpatial 的空间化 DOM、材质与交互，并提供从 2D 到 `Reality` 3D 场景的进阶练习方向。

## English

This repo contains two small Vite + React playgrounds for learning WebSpatial: an image waterfall gallery (UI/layout + spatialized DOM) and a reaction game (timer/interaction + optional upgrade to 3D Reality).

### Projects

- `playground1`: Waterfall gallery with category nav, cards, and like interaction. Best for starting with `enable-xr`/`--xr-back`.
- `playground2`: 60-second reaction game with random blocks and scoring, ideal for practicing interactions and migrating to `Reality`/`Entity`.

### Quick Start

#### Prerequisites

- Node.js 22+
- pnpm

#### Run

- `playground1` (gallery)
  - `cd playground1`
  - `pnpm install`
  - `pnpm dev`
  - (Optional) `pnpm dev:webspatial`

- `playground2` (game)
  - `cd playground2`
  - `pnpm install`
  - `pnpm dev`
  - (Optional) `pnpm dev:webspatial`

### Learning Goals

- Spatialized DOM: try `enable-xr` and CSS variables like `--xr-back` on any element
- Material/Background: tune `--xr-background-material`, opacity, border radius and visual results
- Interaction: implement and debug timers, randomness, scoring, and start/stop flows
- Upgrade to Reality: migrate from 2D DOM to `Reality`, compose scenes with more `Entity` types, and bind spatial input events

### Repository Description (GitHub About)

WebSpatial Playgrounds: two Vite + React playgrounds (waterfall gallery & reaction game) to learn spatialized DOM, materials, and interactions in WebSpatial, with guided steps to upgrade from 2D UI to a 3D `Reality` scene.