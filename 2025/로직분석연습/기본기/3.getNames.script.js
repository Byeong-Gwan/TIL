/**
 * 3 — 데이터 흐름(입력 → 가공 → 출력) 읽기
 * 
 * 목표
    1. BFF/React 공통으로 쓰는 “데이터 변환 흐름” 이해

    2. 특히 배열·객체 변환 패턴 익히기
 */

function getNames(users) {
    return users
      .filter(u => u.active)
      .map(u => u.name);
}

  /**
   * getNames - 이름을 가져오는 합수
   * usesr - 사용자 값

    1. filter에서 걸러지는 기준
        - filter : 사용자 값을 하나씩 가져와서 u.action 의 값만 가져온다. 

    2. map에서 무엇을 뽑는지
        - map: 사용자의 이름만 가져온다.
    3. 최종 결과가 어떤 형태인지
        → React 화면 리스트 출력의 기본 감각 획득
   */