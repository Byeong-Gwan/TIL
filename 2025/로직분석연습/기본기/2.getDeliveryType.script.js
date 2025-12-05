/**
 * 2 — 조건 분기 흐름 잡기
 * 
 * 목표
    1. if-else 흐름을 “나뭇가지”처럼 보는 능력

    2. 조건이 많아도 구조를 추적하는 연습
 */

function getDeliveryType(cost) {
    if (cost === 0) return 'free';
    if (cost < 3000) return 'discount';
    return 'normal';
  }

  /**
   * getDeliveryType - 배송 유형 가져오기 함수
   * 
    1. “조건이 몇 갈래로 나뉘는지” 표시하기
        - cost: 비용
        - 총 3갈래

    2. 어떤 조건에서 어떤 값이 나오는지 적기
        - cost의 비용이 0이면 free 
        - cost의 비용이 3000보다 작으면 discount
        - 아니면 normal 
   */