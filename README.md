<aside>
💡 react, redux, json-server, Thunk, react-query 실습을 통해 개발에 익숙해져 봅시다.

</aside>

## Lv1

- React를 이용한 TodoList를 만듭니다.
- Todo를 Create, Delete, Update(완료/취소) 가 가능해야 합니다.
- 이때, useState와 Props만을 사용합니다.

### Keyword

props drilling, state 끌어올리기

## Lv2

- React + redux-toolkit를 이용한 TodoList를 만듭니다.
- Todo를 Create, Delete, Update(완료/취소)가 가능해야 합니다.
- Lv1의 코드를 고쳐서 만듭니다.

### Keyword

전역 상태 관리, redux

## Lv3

- Lv3의 과제에서 json-server를 추가합니다.
- Todo를 Create, Delete, Update(완료/취소), Read(From Json-server)가 가능해야 합니다.
- Lv2의 코드를 고쳐서 만듭니다.

### Keyword

DB

## Lv4

- Lv4의 과제에서 데이터베이스의 비동기 처리 로직을 추가합니다.
- Lv3의 코드에서, createAsyncThunk를 추가하여 json-server 상태 관리 로직을 다루도록 합니다.

### Keyword

Thunk

## Lv5

- Lv4의 과제에서 Redux를 react-query로 리팩토링 합니다.

### Keyword

query

- For the extra levels
  - useEffect
    - counter 프로그램 필요
  - react-router-dom + useParams
    - 전용 프로그램 필요
  - custom-hooks
    - Level 4, 5에 각각 리팩토링
  - authentication
    - Level 4, 5에 각각 리팩토링
