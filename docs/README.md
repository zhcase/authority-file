# 命名规范

## 样式命名

### 基本命名

> css 命名规范可以避免不必要的样式冲突。命名将采用 BEM 规范（后面章节将有讲述）+常用命名

**常用命名**

```css
- 头：header
- 内容：content/container
- 尾：footer
- 导航：nav
- 侧栏：sidebar
- 栏目：column
- 页面外围控制整体布局宽度：wrapper
- 左右中：left right center
- 登录条：loginbar
- 标志：logo
- 广告：banner
- 页面主体：main
- 热点：hot
- 新闻：news
- 下载：download
- 子导航：subnav
- 菜单：menu
- 子菜单：submenu
- 搜索：search
- 友情链接：friendlink
- 页脚：footer
- 版权：copyright
- 滚动：scroll
- 小技巧：tips
```

### 命名规则

将采用 page 或者 component 的命名形式(全部采用小写的形式)

**项目结构：**

```css
├── src # 项目代码
│   ├── component #组件
│   |   ├── Menu
│   ├── views #页面
│   |   ├── LoginForm
 ....

```

**示例：**

```html
<!-- 组件示例 -->
<div class="menu">
  ···
</div>

<!-- 页面示例 -->
<div class="login-form">
  ···
</div>
```

### BEM 命名

> BEM 命名法，是对 css 命名的一种规范，将页面模块化，隔离样式，提高代码的复用性，减少后期的维护成本。BEM 代表的是 Block(块)、Element(元素)、modifier(修饰符)，通过双下划线\_\_或者双中划--链接。

**命名约定的模式如下：**

```css
/* 代表上一级或组件名 */
.block {
    ···
}
/* 代表 block的后代，用于形成一个完整的block的整体  */
.block__element {
    ···
}
/* 代表block的不同状态 如选中状态 */
.block--modifier {
    ···
}
```

**案例：**

```html
<div class="menu">
  <div class="menu__item menu__item--active">
    <div class="menu__title">首页</div>
  </div>
  <div class="menu__item">
    <div class="menu__title">购物车</div>
  </div>
  <div class="menu__item">
    <div class="menu__title">订单</div>
  </div>
  <div class="menu__item">
    <div class="menu__title">我的</div>
  </div>
</div>
```

```scss
<style lang="scss">
.menu {
  position: absolute;
  left: 0;
  height: 0.49rem;
  padding: 0 0.18rem;
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  width: 100%;
  border-top: 1px solid #f1f1f1;
  &__item {
    flex: 1;
    text-align: center;
  }
  &__title {
    font-size: 0.2rem;
    transform-origin: center top;
  }
}
.menu__item--active {
  color: #1fa4fc;
}
</style>
```

## js 命名
