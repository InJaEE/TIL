# IgnoreCertification

- Axios 사용할때 자체 서명된 인증서 경고를 무시하는 방법
```js
const authenticate = axios({
    url: address+'/api/Account/Authenticate',
    method: 'post',
    headers: {'content-type': 'application/json'},
    //////////////////////////////////////////
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    }),
    //////////////////////////////////////////
    data: ({
        'tenancyName': 'Default',
        'usernameOrEmailAddress': 'admin',
        'password': '1234qwer'
    }),
}).then((res) => {
    key = res.data.result;
}).catch((err) => {
    console.error(err);
});
```
