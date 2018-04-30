# thai-rice

antd mobile 

npm install babel-preset-env --save-dev

1、PubSub使用方式
npm install pubsub-js --save
import PubSub from 'pubsub-js'

发送消息：PubSub.publish(名称,参数)
订阅消息：PubSub.subscrib(名称,函数)
取消订阅：PubSub.unsubscrib(名称)

PS:pubsubjs源码及使用详情https://github.com/mroderick/PubSubJS


