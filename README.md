# 숫자 야구 (제로초의 자바스크립트 입문 7장 숫자야구)

1차 : 08/08 <제로초JS입문 7장 숫자야구 1>

https://hareubang.github.io/Number_baseball/

Devcos 코드 리뷰

보완점

1. -[x]~~코드 작동 순서대로 코드를 배치하는 습관을 만들어 나가기~~
2. -[x]~~입력값에 123432 이렇게 중복된 숫자 입력이 가능한 증상 발견! -> 이유를 코드에서 찾아보고, 딱 4개의 숫자만 입력받을 수 있도록 개선해보기~~
3. -[x]~~eventListener에서 (event)로 명확하게 표현 해주기~~
4. -[x]~~innerHTML은 XSS 해킹에 대해 보안취약점을 가지고 있기 때문에 사용을 지양해야하며 createElement 등을 사용하는 방향으로 개선 해보기~~

---

추천 학습

1. .includes 대신 Set 사용해보기
2. if문 대신 에러처리 사용해보기
3. innerHTML의 보안취약점

---

1. CSS, 디자인 부족.
2. 시멘틱 태그
3. event.preventDefault();
4. github 저장소에서 README.md 생성했다가 vs에서 git push origin main 하다가 Error 발생함.
5. document.createElement() / .setAttribute() / .createTextNode() / .appendChild() / .classList.add() / .getAttribute()
