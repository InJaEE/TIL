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
[이미지]
- Kibana 설치
  - 압축파일로 설치
  - config\kibana.yml 수정
  [이미지]
- Orchestrator 설정
  - Web.config 수정
  [이미지]
  [이미지]
  - Orchestrator 재시작
  [이미지]
