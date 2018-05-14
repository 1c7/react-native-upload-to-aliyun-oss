import RNFetchBlob from 'react-native-fetch-blob'
import crypto from './crypto'
import hmac from './hmac'
import sha1 from './sha1'
import Base64 from './base64'
import Config from '../src/config'

export default function upload(file_name, file_type, file_path) {
  // production
  var accessid = Config.production_oss_config.accessid;
  var accesskey = Config.production_oss_config.accesskey;

  // 计算签名和其他参数
  var policyText = {
    "expiration": "2020-01-01T12:00:00.000Z", // 设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    "conditions": [
      ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
    ]
  };

  var policyBase64 = Base64.encode(JSON.stringify(policyText))
  var message = policyBase64
  var bytes = Crypto.HMAC(Crypto.SHA1, message, accesskey, {
    asBytes: true
  });
  var signature = Crypto.util.bytesToBase64(bytes);

  // 发送请求
  var url = Config.production_oss;
  return RNFetchBlob.fetch('POST', url, {}, [
    { name: 'key', data: file_name },
    { name: 'policy', data: policyBase64 },
    { name: 'OSSAccessKeyId', data: accessid },
    { name: 'success_action_status', data: '200' },
    { name: 'signature', data: signature },
    { name: 'file', filename: file_name, type: file_type, data: RNFetchBlob.wrap(file_path) }
  ])
}