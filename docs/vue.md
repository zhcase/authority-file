## 样式

### scss 基本用法

```scss
<style lang = "scss"  scoped>
$color : red ;
div { color : $color ;}
</ style >
```

[例子：索引](http://localhost:8080/#bem-%E5%91%BD%E5%90%8D)

### vue 里面的 Scoped

单文件组件让你可以在同一个文件里完全控制 CSS，将其作为组件代码的一部分。

示例：

```vue
<template>
  <div class="parent">
    父组件
  </div>
</template>

<style lang="scss" scoped>
.parent {
  color: #333;
}
</style>
```

转换

```vue
<template>
  <div data-v-2f3286d4 class="parent">
    父组件
  </div>
</template>

<style>
.parent[data-v-2f3286d4] {
  color: #333;
}
</style>
```

scoped 覆盖 样式 (如 element-ui 覆盖)

**_使用 deep 时 请在外面加一层_**

```vue
<template>
  <div class="div">
    ··· class='div1'
  </div>
</template>

<style scoped>
.div {
  /deep/ .div1 {
    color: red;
  }
}
</style>
```

## vue 语法

### props

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

```vue
props: { greetingText: String }
```

```vue
<WelcomeMessage greeting-text="hi" />
```

定义类型

```vue
<script>
export default{
   props: ['status'] //反例
}
<script>
```

```vue
<script>
export default{
props: {  // 好例
  status: String
},
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
<script>
```

### v-for

在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。

```vue
<template>
    <div v-for='item in todos' :key='item.id'>
    </div>
    //当没有id
<div v-for='(item,index) in todos' :key='index'>

</div>

</template>
<script>
export default{
    data(){
        return{
           todos: [
             {
              id: 1,
              text: '学习使用 v-for'
           },
          {
             id: 2,
             text: '学习使用 key'
          }
              ]
        }
    }
}
<script>


```

避免 v-if 和 v-for 用在一起

### v-for

在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。

```vue
<template>
<div>
<template v-for='item in todos'>
<div :key='item.id' v-if='item'> </div>
</template>
</div>

</template>
<script>
export default{
    data(){
        return{
           todos: [
             {
              id: 1,
              text: '学习使用 v-for'
           },
          {
             id: 2,
             text: '学习使用 key'
          }
              ]
        }
    }
}
<script>


```
