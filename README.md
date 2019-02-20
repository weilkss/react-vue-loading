# xwb-loading

## 适用于 React Vue

### 安装

```shell

$ npm install xwb-loading -save

```

### React 使用

```js
import Loading from 'xwb-loading';

class Test extends Component {
    render() {
        return (
            <div className={styles.box}>
                <Loading />
            </div>
        );
    }
}
```

### Vue 使用

```js
//mian.js
import Loading from 'xwb-loading/vue';
Vue.use(Loading);

//test.vue
<template>
    <div class="test">
        <Loading />
    </div>
</template>;
```

### 属性

| 属性  | 值      | 类型          |
| ----- | ------- | ------------- |
| size  | 24      | number string |
| color | #2396fa | string        |

### 示例

```js

<Loading size='32' color='#2396fa'/>
<Loading size={32} color='red'/>

```

### 其他 React 编译

```shell

$ npm install
$ npm run build

```

### vue git

xeb-loading/vue[xeb-loading/vue](https://github.com/xwb007/xwb-loading-vue.git)
