# Elasticsearch
### 검색 엔진
- 구글, 네이버같은 검색 엔진이 아닌 **프로그램으로서의 검색엔진**
- 프로그램으로서의 검색 엔진이란?
  - 현재 가지고 있는 데이터 중에서 특정한 데이터를 검색할 수 있는 기능을 제공하는 것
- 효과적인 검색을 위해 **역색인**과 **형태소 분석**을한다.

<br>

### UiPath Orchestrator 연결
- ElasticSearch 설치
  - msi로 설치(압축파일로 설치시 외부접속이 안되는 문제 발생)
  - C:\ProgramData\Elastic\Elasticsearch\config\elasticsearch.yml 수정
![](https://user-images.githubusercontent.com/45154110/79197791-54f37d80-7e6d-11ea-84b9-80ea82314250.png)
- Kibana 설치
  - 압축파일로 설치
  - config\kibana.yml 수정
![](https://user-images.githubusercontent.com/45154110/79197793-5624aa80-7e6d-11ea-8772-b9a673804c09.png)
- Orchestrator 설정
  - Web.config 수정
![](https://user-images.githubusercontent.com/45154110/79197796-56bd4100-7e6d-11ea-82e2-9f86765ff825.png)
![](https://user-images.githubusercontent.com/45154110/79197794-56bd4100-7e6d-11ea-8f28-e4dd8cc7c5e6.png)
  - Orchestrator 재시작
![](https://user-images.githubusercontent.com/45154110/79197797-5755d780-7e6d-11ea-8957-2fe660e217a3.png)
