# thai-rice

antd mobile 

0、安装
npm install -g eslint
npm install  babel-eslint --save
npm install eslint-config-airbnb  --save
npm install eslint-plugin-jsx-a11y  --save
npm install eslint-plugin-react  --save
npm install eslint-plugin-import  --save

npm install --save babel-polyfill  //es6新语法支持
npm install babel-preset-env --save-dev


1、PubSub使用方式
npm install pubsub-js --save
import PubSub from 'pubsub-js'

发送消息：PubSub.publish(名称,参数)
订阅消息：PubSub.subscrib(名称,函数)
取消订阅：PubSub.unsubscrib(名称)

PS:pubsubjs源npm install eslint-config-airbnb --save
码及使用详情https://github.com/mroderick/PubSubJS


2、history 监听 及路由
采用观察者模式，在location改变时，history会发出通知。
每一个history对象都有listen方法，接受一个函数作为参数。这个函数会被添加到history储存的监听函数数组中。
当location变化时（如代码调用history方法或用户点击浏览器按钮），history对象将会调用所有listener方法。这能让你在location变化时来设置代码更新。

props.match 对于知道详情页面渲染的 userId 以及如何编写我们的路由是很有用的。
match 对象给我们提供了几个属性，包括 match.params、match.path、match.url
this.props.children属性就是子组件。

withRouter 函数，页面进行路由跳转时触发该函数
withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入

3、connect
react-redux  connect      connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {}) 
dva          connect      export default connect(从 model 的 state 中获取数据)(要将数据绑定到哪个组件)

4、roadhogrc
.roadhogrc 是入口文件
"proxy": { "/api": { "target": "http://localhost:8011/", "changeOrigin": true } }
调用：
`request('/api/users', {
  method: 'POST',
  body: JSON.stringify(values),
});`
这时程序就会向http://localhost:8011/users发送post请求。

dva的roadhogrc配置文件webstorm或idea解析
https://blog.csdn.net/nianhua120/article/details/77683807?locationNum=3&fps=1

npm install roadhog-api-doc -g  &&  npm install roadhog-api-doc -save    
https://www.npmjs.com/package/roadhog-api-doc

5、dva  参考 
https://github.com/dvajs/dva-knowledgemap#effects  
https://github.com/dvajs/dva-docs/blob/master/v1/zh-cn/concepts.md#reducer  
https://github.com/dvajs/dva-knowledgemap
https://mobile.ant.design/components/tab-bar-cn/   
https://ant.design/

6、svg
svg 矢量图形：https://www.w3cplus.com/svg/svg-intro.html          
插件:https://github.com/tanem/react-svg    
https://blog.csdn.net/AboyL/article/details/79776563 
todo: 要重新 制作tabs矢量图  地址： http://iconfont.cn/ 账号github    

7、React
React.createElement(component, props, ...children); 
如：var element = React.createElement("h6",null,"Hello, world!") ====  const element = <h6>Hello, world!</h6>;

JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串

初始赋值: React提供了一个dangerouslySetInnerHTML属性，可以实现inner赋值操作 无法通过id或class  。 

todo : require() 无法加载 变量的图片。 里面为图片本地路径字符串 ，不能够为本地路径字符串的变量

事件处理函数中调用了 stopPropagation()，那么之后的元素就无法接收这个事件，也即是剩余的事件处理函数永远不会得到执行.
个 a 标签绑其 click 事件的默认行为是跳转到 href 指定的链接.preventDefault()，那么元素的默认行为就会被取消
event.cancelable 浏览器默认行为是否可以被禁用  event.defaultPrevented 浏览器默认行为是否已经被禁用
 if (event.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!event.defaultPrevented) {
            event.preventDefault();
        }
  }
  
slice()、substring()、substr()