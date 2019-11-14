# sequelize
- [API Reference](https://sequelize.org/master/)
- 설치
```console
npm i sequelize mysql2
npm i -g sequelize-cli
sequelize init
```
- 모델 정의
    - define 메서드를 사용한다.
    - id는 기본 키로 연결된다.
    - 속성값
        - defaultValue : 기본값
        - unique
        - allowNull
    - DataTypes 종류
        - STRING, INTEGER, BOOLEAN, DATE 등등
        - INTEGER.UNSIGNED.ZEROFILL
    - 세번째 인자
        - timestamps(createdAt, updatedAt 컬럼 생성)
        - paranoid : deletedAt 컬럼 생성(timestamps가 true여야 가능)
        - underscored : 
        - tableName :
```js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false;
    })
}
```
- 관계 정의
    - 1:N
    - 1:1
    - N:M