/**
 * 1 — 단일 함수 흐름 읽기 (가장 쉬운 단계)
 * 
 * 목표
    1. 함수가 어떤 입력 → 어떤 출력이 되는지 읽는 것

    2. 조건문 없이 “직선 흐름”만 보는 훈련

    3. 시작점과 끝점을 명확히 보기
 */

function calcPrice(count, price) {
    const total = count * price;
    const discount = total > 10000 ? 1000 : 0;
    return total - discount;
  }

  /**
   * calc - 가격
   * Price - 계산 
    1. “함수 이름이 무슨 의미인지”
        - calcPrice 가격 계산 함수

    2. “파라미터는 어떤 역할인지”
        - count: 상품? 개수
        - price: 상품? 가격

    “중간 변수는 어떤 과정인지”
        - total: 상품? 전체 가격 (개수 * 가격 의 값을 담는다.)
        - discount: 상품? 할인가 (전체 가격이 10000 보다 크면 1000을 아니면 0을 담는다.)
        - 전체 가격에서 할인된 가격을 뺀 남어지를 반환한다.
   */