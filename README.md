## 배포 주소

[medalTracker](olympic-medal-tracker.vercel.app/)

## 작업 기간

24.08.08(목요일)~24.08.13(화요일)

## 프로젝트 구조

```md
olympic_medal_tracker
├─ .git
├─ .gitattributes
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public
│ └─ vite.svg
├─ README.md
├─ src
│ ├─ App.css
│ ├─ App.jsx
│ ├─ assets
│ │ └─ react.svg
│ ├─ index.css
│ └─ main.jsx
├─ vite.config.js
└─ yarn.lock
```

## 실행 방법

![alt text](<깃허브에서 코드 사용하는 방법1.png>)

1. 해당 리포지토리의 메인 페이지에서 "<>Code" 버튼을 클릭 후 Download ZIP를 눌러 다운로드 합니다.

![alt text](<깃허브에서 코드 사용하는 방법2.png>)

2. 다운로드 받은 코드를 실행하기 위해서는 VScode 작업영역에서 우클릭을 한 후 "작업 영역에 폴더 추가" 버튼을  
   클릭해서 VScode에 작업 영역에 다운로드 받은 코드를 추가 합니다.

![alt text](<깃허브에서 코드 사용하는 방법3.png>)

3. 작업 영역에 추가한 프로젝트를 확인하고, 터미널에서 해당 프로젝트로 들어가 npm install 또는  
   npm install -g yarn 명령어로 npm 또는 yarn을 설치해서 프로젝트를 실행 도구를 설치 합니다.

4. npm start 또는 yarn dev를 사용해서 프로젝트를 실행 합니다.

## 주요 기능

### 1. 입력

![alt text](<올림픽 프로젝트 주요기능1.png>)

1. 국가명, 금메달, 은메달, 동메달을 입력 후 국가 추가 버튼을 클릭합니다.

### 2. 읽기

![alt text](<올림픽 프로젝트 주요기능2.png>)

2. 입력했던 국가명과 금메달, 은메달, 동메달 개수가 추가된 것을 확인합니다.

### 3. 수정

![alt text](<올림픽 프로젝트 주요기능3.png>)

3. 이미 추가했던 국가명을 입력하고 금메달, 은메달, 동메달 개수를 입력 후 업데이트 버튼을 클릭합니다.

### 3-1. 수정된 데이터 확인

![alt text](<올림픽 프로젝트 주요기능3-1.png>)

3-1. 수정된 데이터를 확인 합니다.

### 4. 삭제

![alt text](<올림픽 프로젝트 주요기능4.png>)

4. 테이블에 추가된 데이터에서 오른쪽에 있는 삭제 버튼을 클릭하면 해당 데이터가 삭제 됩니다.

### 4-1. 삭제된 데이터 확인

![alt text](<올림픽 프로젝트 주요기능4-1.png>)

4-1. 삭제 버튼을 클릭하면 입력되었던 데이터들이 사라지고 "아직 추가된 국가가 없습니다. 메달을  
 추적하세요!" 문구가 나옵니다.

## 트러블 슈팅

1. 업데이트 기능을 작성할 때, 나는 입력한 국가가 있는지 확인하는 코드를 작성해야겠다는 생각을
   하지 않고, 무작정 메달 수를 업데이트를 할 생각을 했었다. 그 결과는 입력한 국가가 테이블에 존재
   하는지 확인을 하지 못해서 업데이트 할 데이터를 찾지 못하는 상황이 발생했다.

2. 국가 추가, 업데이트 버튼의 배경 색을 짙은 노란색으로 변경하려고 했으나 className을 지정하고
   CSS 파일에서 수정을 하니 지정한 className을 정의한 부분이 없다는 오류가 나타났다.

## 회고

 추가(C), 읽기(R), 삭제(D) 기능은 찾아가면서 구현은 했지만 업데이트(U) 기능은 힘들게 만들었다.
업데이트 로직은 더 확실히 공부해야 겠다는 생각이 들었다.(물론 CRUD 기능 모두 확실히 공부해야
하지만...) 또한 국가 추가, 업데이트 버튼의 배경 색을 변경하기 위해서 className을 지정하고 CSS 파일에 클래스명
선택자를 쓰고 background-color을 설정했다. 하지만 App.jsx 파일에서 지정한 className이 정의되지
않았다는 오류를 내뱉어서 button을 직접 선택하는 선택자(.button-group > button)로 background-
color을 설정했다. 그 결과 내가 의도했던대로 버튼들의 색상이 짙은 노란색으로 변경이 되었다. 여기에서
느낀점은 "하나의 방법이 의도대로 되지 않는다면 다른 방법을 사용해서 내 의도를 충족시키도록 만들자!"라는
생각이 들었다.
