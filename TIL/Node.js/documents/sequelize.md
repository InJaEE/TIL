# sequelize
- [API Reference](https://sequelize.org/master/)
- [API 한글 번역](https://velog.io/@cadenzah/tags/Sequelize)
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
        - unique : 유니크값
        - allowNull : Null 허용 여부
        - autoIncrement : 자동 
    - DataTypes 종류
        - STRING, INTEGER, BOOLEAN, DATE 등등
        - INTEGER.UNSIGNED.ZEROFILL
            - UNSIGNED: 절대값. 숫자 자료형에서만 사용 가능하며, 음수 입력이 불가능해진다.
            - ZEROFILL: 숫자의 자릿수가 고정되어있을때 사용(2 => 002)
    - 세번째 인자
        - timestamps(createdAt, updatedAt 컬럼 생성)
        - paranoid : deletedAt 컬럼 생성(timestamps가 true여야 가능)
        - underscored : 컬럼명에 '_'를 넣어준다.
        - tableName : sequelize는 define 메소드의 첫번째 인자를 복수형으로 만들어 테이블명으로 사용하는데, 테이블명을 다른 것으로 지정하고 싶을때 사용한다.
```js
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
        },
        number: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            alloNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: true,
        paranoid: true,
    })
}
```
- 관계 정의
    - 1:N
    - 1:1
    - N:M
