# GIT
## Version Control System
- 버전관리, 백업, 복구, 협업
- git을 효율적으로 관리하려면 정해놓은 규칙을 준수해야한다.

### 저장소 생성
- .git폴더에 버전관리를 위한 파일들이 생성된다.
```git
git init
```

### 계정 정보 입력
```git
git config --global user.name InJaEE
git config --global user.email injae.baek@itmsg.co.kr
```

### log 관련
```
git status // git 저장소의 변경된 파일 목록을 확인
git log // commit한 내역을 확인
git shortlog // commit한 내역을 간단히 확인
git diff // 변경된 파일 내용 확인
```

### staging
```
git add <파일명> // 스테이징 목록에 추가
git add . // 스테이징 목록에 변경된 모든 파일을 추가
git rm --cached <파일명> // 스테이징 목록에서 삭제
```

### commit
- [좋은 커밋 메세지를 작성하는 방법](https://meetup.toast.com/posts/106)
```
git commit -m "commit message" // 스테이징된 파일들을 커밋
git commit -am "commit message" // 모든 변경사항을 add한 후 commit
```

### remote
```
git remote add origin http://192.168.0.55/INJAE/gitPractice // origin이라는 이름으로 git url 등록
git remote get-url origin // 등록된 url 확인
```

### push
- commit한 파일들을 git server에 보내는 명령어
```
git push origin master
```

### pull
- git server에서 변경된 파일들을 내려받는다.
```
git pull origin master
```

### 한글이 깨질때 설정 방법
```
set LC-ALL=ko_KR.UTF-8 // 명령 프롬프트 한글 설정
git config --global core.quotepath=false // git vim에서 한글 설정
```

### reset
```
git reset HEAD~1 --soft // soft방식으로 바로전 커밋으로 되돌린다.
git reset HEAD~2 -- mixed // mixed방식으로 두번전 커밋으로 되돌린다.
git reset HEAD~3 --hard // hard방식으로 세번전 커밋으로 되돌린다.
git reset --hard // 현재의 커밋상태에서 수정사항을 초기화시킨다.
git reset ca8270e // "ca8270e"라는 커밋코드를 가진 곳으로 mixed방식으로 리셋한다.

git checkout -- <파일명> // 수정된 파일의 내용을 처음 상태로 되돌릴때
```

### revert
- 이전의 commit 지점과 똑같은 내용으로 새롭게 commit하는 명령어
```
git revert HEAD
git revert ca8270e
```

### branch
```
git branch // 브랜치 목록
git branch <브랜치명> // 브랜치 생성
git checkout <브랜치명> // 브랜치 이동
git branch -d <브랜치명> // 브랜치 삭제
```

### merge
- branch에서 작업 후 master에 병합시킬때 사용하는 명령어
- 충돌이 발생하면 충돌한 내용을 변경 후 commit한다.
```
git merge <브랜치명> // master로 <브랜치명>의 commit상태를 merge
git merge --abort // 충돌이 발생했을때 merge를 취소시킨다.
```

### rebase
```
git rebase <브랜치명>
git rebase --continue // 충돌이 발생했을때 내용을 수정 후 rebase를 계속한다.
```

### cherry-pick
- merge할때 최신 커밋이 아닌 원하는 지점을 커밋하는 명령어
- 다른 브랜치에서 지정한 커밋을 복사하여 현재 브랜치로 가져올 수 있다.
- 특정 브랜치에 잘못 추가한 commit을 올바른 브랜치에 옮기거나 다른 브랜치의 commit을 현
```
git cherry-pick 1678c52
```

### tag
- hash값을 대체할 수 있는 tag 생성
```
git tag // tag 목록 확인
git tag v1.0.0  // v1.0.0라는 tag 생성
```

### stash
- 임시저장
- 서로 다른 브랜치에서도 사용가능
    - 작업 브랜치를 착각했을때도 사용가능
```
git stash // 임시저장
git stash list // stash list 확인
git stash apply // 돌아가기
```

### fetch
- git 서버의 저장 내역을 가져온다.
- pull = fetch + merge
```
git fetch
```

### git flow 전략
```
각자의 브랜치에서 작업 후 테스트용 브랜치에 merge하고 테스트 후 master에 merge한다.
그 후 다시 각자의 브랜치에 master의 내용을 merge한다.
급한 수정 내용이 생겼을 경우 hotfix 브랜치를 생성하여 작업한 후 master에 merge하고
각자의 브랜치에 merge한다.
master는 최대한 완성된 내용만 업로드한다.
```

### [우아한 형제들 git flow](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)