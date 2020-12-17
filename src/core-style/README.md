# design-core
디자인 코어 레파지토리

## 사용방법
❌ ❌ 작업 하기 전에 꼭 볼것 ❌ ❌
1. 상위 저장소 (design-product)에서 서브트리(design-core) 변경사항 받아오기
```bash
git subtree pull -P src/core-style design-core-upstrea master

# 위 명령어를 수행하는 npm 스크립트
npm run pull
```
2. 상위 저장소에서 서브트리의 코드를 수정한 경우
   - 상위 저장소에 커밋 남기고 원격 저장소에 push 하기
     ```bash
     git add <file-path>
     git commit -m"commit-message"
     git push origin <branch-name>
     ```
     이 후, 상위 저장소에 PR요청 혹은 upstream에 push하는 등 작업자들에게 코드를 공유해줍니다.
   - 서브트리에 push 하기
   ```bash
   git subtree push -P src/core-style design-core-origin master

   # 위 명령어를 수행하는 npm 스크립트
   npm run push
   ```
   - 서브트리의 upstream 저장소에 PR하기

upstream에 변경 내역이 잘 병합 되고 나면, 상위 저장소에서 다시 1번 과정을 수행한 후 작업 합니다.