/**
 * 4 — 비동기 흐름 읽기 (Promise / API)
 * 
 * 목표
    1. “나중에 실행되는 코드” 흐름 읽기

    2. then 체인/async await 구조 이해
 */

function loadData() {
    return fetch('/api/user')
        .then(res => res.json())
        .then(data => data.name);
}
    
/**
 * loadData 함수는 API를 통해 원하는 결과 값을 원하는 형태로 저장
 * 
    - fetch → res → data → 최종 반환 순서 적기
        → React Query 이해도 급상승
        api/user 값을 fetch함 
        fetch메서드는 네트워크에 있는 데이터를 비동기 방식으로 가져온다. 
        성공했을떄 res 값을 json 으로 저장하고, json으로 저장된값에 data의 name값을 가져운다.

    “fetch는 즉시 값을 반환하지 않고, ‘미래의 값’을 약속하는 Promise를 반환한다.”
 */
/**
 * loadData 함수는 '/api/user'에서 사용자 데이터를 비동기적으로 불러오고,
 * 최종적으로 data.name 값을 반환한다.
 * 
 * 비동기 흐름:
 * 1) fetch('/api/user') → Promise 반환 (미래의 값)
 * 2) 응답이 오면 .then(res) 실행
 * 3) res.json() 으로 실제 데이터를 JS 객체로 변환
 * 4) 변환된 data에서 name 속성만 추출하여 반환
 */
