# xwb-loading

## 适用于 React

##安装

```shell

$ npm install xwb-loading -save

```

##使用

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

<Loading size='32' color='#2396fa'/>
<Loading size={32} color='red'/>
```

##属性

| 属性  | 值      | 类型          |
| ----- | ------- | ------------- |
| size  | 24      | number string |
| color | #2396fa | string        |

##其他

```shell

$ npm install
$ npm run build

```
