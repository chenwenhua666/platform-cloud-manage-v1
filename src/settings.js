module.exports = {
  title: 'Platform Cloud',
  // Spring Boot Admin控制台地址
  springBootAdminUrl: 'http://localhost:9904',
  // Swagger UI 地址
  swaggerUrl: 'http://localhost:9903/system/swagger-ui.html',
  // zipkin 控制台地址
  zipkinUrl: 'http://localhost:9920',
  // kibana 控制台地址
  kibanaUrl: 'http://192.168.85.2:5601',
  // 获取令牌时，请求头信息(Basic Base64.encode(client_id:client_secret))
  authorizationValue: 'Basic cGxhdGZvcm06MTIzNDU2',
  // 社交登录后台地址
  socialLoginUrl: 'http://apicloud.com:9903/auth/social/login',

  onlinePreview: 'http://127.0.0.1:9903/onlinePreview?url='
}
