/**
 * 5 — 복합 로직 흐름 읽기 (조건 + 반복 + 가공)
 * 
 * 목표
    1. 길어 보이는 코드도 “덩어리별”로 나누어 보는 능력

    2. 전체 흐름을 조각조각 쪼개서 분석
 */

function getActives(users) {
    const result = [];
    
    for (let u of users) {
        if (!u.active) continue;
        result.push({ id: u.id, name: u.name });
    }
    
    return result;

//  return users
//    .filter(u => u.active)
//    .map(u => ({ id: u.id, name: u.name }));
}

/**
 * 
 * 
    1. 반복문 흐름
        - 일단 우선적으로 반복문 for...of 를 사용한 경우 배열, 문자열 이용한다는 이야기일 가능성이 큼
          이유로는 객체를 가공하는거였다면 for...in 을 사용했을거임
        - 매개변수로 받아온 users 의 값을 하나씩 u에 담아준다.
          만약에 users 첫번째 값에 active 값이 없으면 넘어간다.
          있다면 미리 선언한 빈배열을 갖고 있는 result에 객체 형식 {id: u.id, name: u.name}을 push한다.
          더이상 반복할게 없으면 반복문 종료 후 result 값을 반환한다.
    2. continue 역할
        - 다음 반복문으로 넘어가게 해줌
    3. push되는 데이터 형태
       → 실무에서 가장 자주 쓰는 구조
       [
        { id: u.id, name: u.name },
        { id: u.id, name: u.name },
         ....
        { id: u.id, name: u.name },
       ]
 */

/**
 * getActives 함수는 사용자 배열(users)에서
 * active가 true인 사용자만 골라(id, name만 남기고)
 * 새로운 배열 형태로 반환한다.
 *
 * 흐름:
 * 1) result라는 빈 배열 생성
 * 2) users 배열을 for...of로 순회 (요소를 하나씩 u에 담음)
 * 3) active가 false면 continue (건너뛰기)
 * 4) active가 true면 {id, name} 형태의 새 객체를 result에 push
 * 5) 반복 종료 후 result 반환
 */
