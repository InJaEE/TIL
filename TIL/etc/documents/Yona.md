# Yona
- 설치형 이슈트래커 + Git/SVN 코드 저장소
- 주요기능
    - 서비스 종료나 데이터 종속 걱정없는 설치형
    - 프로젝트 기반의 유연한 이슈트래커와 게시판
    - 편리한 프로젝트간 이슈 이동
    - Git/SVN 선택 가능
    - 블럭기반 코드리뷰
    - LDAP 지원
    - 소셜 로그인 지원
    - 한글 기반
    - 다른 제품이나 서비스로의 마이그레이션 기능 제공

***

## 테스트 설치환경
- CentOS7
- RAM 4GB
- HDD 100GB
- 요구사항 : MariaDB, Java8

***

## 설치 과정
1. VM 생성 후 OS 설치
2. 네트워크 설정
    1. putty로 root계정 접속 후 "ifconfig" 입력
    2. 출력값 확인 ex)ens192
    3. "cd /etc/sysconfig/network-scripts" 입력
    4. "ls" 입력하여 파일 확인
    5. "vi ifcfg-ens192" 입력
    6. 설정파일 변경
```
ex)
DEVICE=ens192
ONBOOT=yes
IPADDR=192.168.0.60
PREFIX="24"
NETMASK=255.255.255.0
GATEWAY=192.168.0.1
NETWORK=192.168.0.0
DNS1=168.126.63.1
```
3. MariaDB 설치
    1. repo 설정    
* ![MariaDB01](https://user-images.githubusercontent.com/45154110/68438704-522e9580-0208-11ea-8a50-fea411178ee7.png)

    2. "yum install MariaDB" 입력
    3. 잘 설치되었는지 확인
* ![MariaDB02](https://user-images.githubusercontent.com/45154110/68438761-8a35d880-0208-11ea-9b02-0a6f1deafc6e.png)

    4. DB 시작 / 패스워드 변경
* ![MariaDB03](https://user-images.githubusercontent.com/45154110/68438763-8bff9c00-0208-11ea-9ed8-7ec5bab8d3ac.png)

    5. 접속 확인
* ![MariaDB04](https://user-images.githubusercontent.com/45154110/68439109-c74e9a80-0209-11ea-99e1-4648b4ec22e8.png)

4. Java 설치
    1. 설치가능 확인
* ![java01](https://user-images.githubusercontent.com/45154110/68438766-8d30c900-0208-11ea-99fc-727ab8f96340.png)

    2. 설치
* ![java02](https://user-images.githubusercontent.com/45154110/68438768-8efa8c80-0208-11ea-9b2f-da0f8c4d62ea.png)

    3. 설치 확인
* ![java03](https://user-images.githubusercontent.com/45154110/68438769-90c45000-0208-11ea-9b9d-5b89ba8e12d4.png)

5. Yona 다운로드
    1. https://github.com/yona-projects/yona/releases/download/v1.7.0/yona-v1.7.0-bin.zip (1.7v)

6. Yona 설치
    1. 다운로드 후 압축 해제
```
wget https://github.com/yona-projects/yona/releases/download/v1.7.0/yona-v1.7.0-bin.zip
unzip <압축파일명>
```
- 
    2. 설정파일 생성
        1. 압축이 풀린곳으로 이동 후 bin/yona 실행
        2. 실행하면 패스워드가 틀렸다는 에러와 함께 실행이 종료되고 conf 디렉터리가 생성된다.
    3. DB 설정 수정
        1. conf 폴더 아래의 application.conf 파일의 아래 부분에서 password를 자신의 환경에 맞게 변경
```
...
db.default.driver=org.mariadb.jdbc.Driver
db.default.url="jdbc:mariadb://127.0.0.1:3306/yona?useServerPrepStmts=true"
db.default.user=yona
db.default.password="yonadan"
...
```
7. 실행
    1. conf 폴더를 비롯해 각종 데이터를 유지할 폴더를 하나 만든다.
        1. "mkdir /yona-data" 입력
    2. conf 폴더를 위에서 만든 /yona-data로 복사한다.
        1. "cp -r conf /yona-data" 입력 (안돼서 파일질라로 옮김)
    3. YONA-DATA 환경변수를 지정하고 Yona 실행
```
YONA_DATA=/yona-data;export YONA_DATA
bin/yona
```

### 에러
- yum 설치 에러날때
    - No presto metadata available for base => "yum clean metadata" 입력
- 서버 재실행시 이미 실행중인 어플리케이션이라고 나올시엔 RUNNING_PID 파일을 삭제한 후 실행
- 서버를 다시 실행 후 접속했을때 사용자 계정을 설정하라고 나왔을시에는 환경변수를 지정했는지 확인

### 참고 사이트
- https://zetawiki.com/wiki/CentOS7_MariaDB_%EC%84%A4%EC%B9%98 // MariaDB 설치
- https://repo.yona.io/yona-projects/yona/code/next/docs/ko/install-mariadb.md // DB 설정
- https://zetawiki.com/wiki/CentOS_JDK_%EC%84%A4%EC%B9%98 // Java 설치
- https://github.com/yona-projects/yona/blob/master/docs/ko/install-yona-server.md // YONA 설치
- https://github.com/yona-projects/yona/releases/download/v1.7.0/yona-v1.7.0-bin.zip // YONA 다운
- https://repo.yona.io/yona-projects/yona/code/next/docs/ko/yona-run-and-restart.md	// YONA 실행



