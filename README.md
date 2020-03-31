# <center>react-vue-loading</center>

## <center>适用于 React Vue 的 loading 组件</center>

---

👋 `react-vue-loading` [homepage](https://www.weilkss.cn/react-vue-loading)

### 效果

### 引入

```shell
$ npm install react-vue-loading --save
# or
$ yarn install react-vue-loading --save
```

### React 使用

```js
import RVloading from 'react-vue-loading';

class Example extends Component {
  render() {
    return (
      <div className="example">
        <RVloading />
      </div>
    );
  }
}
```

### Vue 使用

```js
//mian.js
import RVloading from 'react-vue-loading';
Vue.use(RVloading);

//Example.vue
<template>
  <div class="example">
    <RVloading />
  </div>
</template>;
```

### Props

| 属性  | 默认值  | 数据类型      |
| ----- | ------- | ------------- |
| size  | 24      | number string |
| color | #2396fa | string        |

### 示例

```js
<RVloading size='32' color='#2396fa'/>
// or
<RVloading size={32} color='red'/>
```

### download

```shell
> git clone https://github.com/weilkss/react-vue-loading.git
> npm i
> npm run build
```