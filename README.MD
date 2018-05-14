### React Native 上传文件到阿里云 OSS
这里是博客 http://1c7.me/react-native-use-node-module-aliyun-oss/ 里提到的代码     
把关键的几个文件都放出来，博客里放很不方便。太长了。

### 文件解释
* `src/` 文件夹里就一个 `config.js` 文件，很好理解，都是 OSS 的配置
* `third_party_lib/` 是阿里云 OSS React Native 上传的核心代码

### 为什么是这个文件夹结构？
我是直接从实际项目中复制出来的。所以是这个结构       
这里的代码是只是给你提供参考，实际用的时候，你不用照着这个文件夹结构来安排文件       

实际项目用的 RN 版本是 0.52，但这里的代码不和 React Native 版本挂钩   
是根据阿里云给的 DEMO 和文档写的。所以只要阿里云不改接口，这里的代码都会可用    