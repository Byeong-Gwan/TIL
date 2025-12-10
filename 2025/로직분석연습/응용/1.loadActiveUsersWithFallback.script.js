// 1. 실전 로직 분석 예제
function loadActiveUsersWithFallback(apiClient) {
    const defaultUsers = [
      { id: 'guest', name: '게스트', level: 'GUEST' }
    ];
  
    return apiClient('/api/users')
      .then((res) => {
        // 1. 응답 자체가 없거나, 상태 코드가 200이 아니면 기본값 반환
        if (!res || res.status !== 200) {
          return defaultUsers;
        }
  
        // 2. data가 배열이 아니면 이상한 응답이므로 기본값 반환
        if (!Array.isArray(res.data)) {
          return defaultUsers;
        }
  
        const actives = [];
  
        // 3. 유저 목록 순회
        for (let u of res.data) {
          // u가 비어있거나, active가 false면 스킵
          if (!u || !u.active) {
            continue;
          }
  
          // 등급 계산 (VIP면 VIP, 아니면 NORMAL)
          const level = u.grade === 'VIP' ? 'VIP' : 'NORMAL';
  
          // 화면에서 쓸 수 있도록 정제된 형태로 푸시
          actives.push({
            id: String(u.id),
            name: u.name || '이름없음',
            level: level
          });
        }
  
        // 4. 필터 후 유저가 한 명도 없으면 기본값 반환
        if (actives.length === 0) {
          return defaultUsers;
        }
  
        // 5. 이상 없으면 필터된 유저 배열 반환
        return actives;
      })
      .catch((err) => {
        // 6. 예외가 나면 로그만 찍고 기본값 반환
        console.log('[loadActiveUsersWithFallback] error:', err && err.message);
        return defaultUsers;
      });
  }

/**
 * 7 — 종합 로직 흐름 읽기 (API + 조건 + 반복 + 가공 + fallback)
 *
 * 1. 함수 이름이 무슨 의미인지
 *    - loadActiveUsersWithFallback: ???
 *
 * 2. 입력 / 출력 정리
 *    - 인자(apiClient)는 어떤 역할?
 *    - 최종 return 값의 형태는?
 *
 * 3. 전체 큰 흐름을 단계로 쪼개서 적기
 *    - 1단계: ...
 *    - 2단계: ...
 *    - 3단계: ...
 *
 * 4. 방어 코드(예외/이상 데이터 처리) 부분만 따로 정리
 *    - 어떤 경우에 defaultUsers를 쓰는지?
 *
 * 5. 반복문 안에서 하는 일 정리
 *    - continue는 언제 쓰이고, 어떤 데이터를 actives에 넣는지?
 *
 * 6. 비동기 + 예외(.catch) 흐름 요약
 *    - 정상 흐름 vs 실패 시 흐름 비교
 */
