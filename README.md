# design-core
디자인 코어 레파지토리

## 사용방법
❌ ❌ 작업 하기 전에 명심 명심!!! ❌ ❌
1. 상위 저장소 (design-product)에서 서브트리(design-core) 변경사항 받아오기
   ```bash
   git subtree pull -P src/core-style design-core master
   ```
2. 상위 저장소에서 서브트리의 코드를 수정했다면 서브트리 저장소에도 올려주기
   ```bash
   git subtree push -P src/core-style design-core master
   ```
위 명령어들은 나중에 alias 나 npm script로 작성 하면 더 편할듯