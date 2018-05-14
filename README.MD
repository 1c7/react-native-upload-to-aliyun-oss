## React Native 上传文件到阿里云 OSS
这里是博客 http://1c7.me/react-native-use-node-module-aliyun-oss/ 里提到的代码     
把关键的几个文件都放出来，博客里放很不方便。太长了      
**这里的代码是为了给你提供参考**

### 如何使用？
```javascript
import upload from '../third_party_lib/upload'

upload(
  'upload/2018-1-20/15164503124890.46344085317105055.png', 
  'image/png', 
  'file:///storage/emulated/0/DCIM/Screenshots/Screenshot_20180119-122029.png')
  .then((resp) => {
    // your code here
  });
  
// 注意这里的参数当然不是这样写死的, 比如 image/png，只是代码我是从实际项目中直接复制过来的
// 如果保留参数会很奇怪，会不知道参数具体值应该是什么
// 所以这里这样写
```

### 文件解释
* `third_party_lib/` 里 [upload.js](./third_party_lib/upload.js) 文件是核心，其他4个文件都是给它来调用的     

### 备注   
我是直接从实际项目中复制出来的。所以是这个文件夹结构       
代码仅供参考，实际用的时候，你不用照着这个文件夹结构来安排文件       

我的实际项目用了 React Natiave 版本 0.52，**但这里的代码不和 React Native 版本挂钩**     
是根据阿里云给的 DEMO 和文档写的      
所以只要阿里云不改接口标准，这里的代码都会可用        

这里代码本质是：**给阿里云发了一个符合它规范要求的 HTML 请求**   
