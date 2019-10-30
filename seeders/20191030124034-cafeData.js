'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cafes', [
      {
        id: 1,
        name: 'DMC 탐스커버리점',
        address: '서울 은평구 수색로 195 [1,2층]',
        telephone: '02-6925-0108',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 2,
        name: '강남구청역사거리점',
        address: '서울 강남구 선릉로131길16(논현동) [1층]',
        telephone: '02-516-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 3,
        name: '강남바로세움점',
        address: '서울 서초구 서초대로77길 55 [1층]',
        telephone: '02-532-0620',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 4,
        name: '강서구청사거리점',
        address: '서울 강서구 공항대로 395 기도산업사옥 [1층]',
        telephone: '02-3661-9890',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 5,
        name: '강서구청점',
        address: '서울 강서구 화곡로 329 [1층]',
        telephone: '02-2699-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 6,
        name: '고대점',
        address: '서울시 성북구 인촌로24길 63 [B1~3층]',
        telephone: '02-925-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 7,
        name: '공릉점',
        address: '서울 노원구 동일로192길 31 [1,2층]',
        telephone: '02-979-4565',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 8,
        name: '길동사거리점',
        address: '서울 강동구 천호대로 1139 (길동) [1층]',
        telephone: '02-471-1414',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 9,
        name: '난곡사거리점',
        address: '서울시 관악구 남부순환로 1474 [1층]',
        telephone: '02-865-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 10,
        name: '논현1호점',
        address: '서울 강남구 논현로 726 (논현동) [1층]',
        telephone: '02-546-2948',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 11,
        name: '논현점',
        address: '서울 강남구 강남대로118길 43 (논현동) [1~2층]',
        telephone: '02-516-1030',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 12,
        name: '마포도화점',
        address: '서울 마포구 삼개로 15 (도화동) 탐앤탐스 [마포도화점]',
        telephone: '02-704-7405',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 13,
        name: '목동점',
        address: '서울 양천구 목동동로 293 (목동) 현대 41타워 [1층(복층구조)]',
        telephone: '02-796-4556',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 14,
        name: '문정로데오점',
        address: '서울 송파구 동남로 130-1 (문정동) [1~2층]',
        telephone: '02-403-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 15,
        name: '방이점',
        address: '서울 송파구 오금로11길 11-8(방이동) [1층]',
        telephone: '02-424-0661',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 16,
        name: '블랙 도산사거리점',
        address: '서울 강남구 언주로 732 [1~2층]',
        telephone: '02-547-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 블랙',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 17,
        name: '블랙 압구정점',
        address: '서울시 강남구 언주로172길 11 [1층]',
        telephone: '02-517-9890',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 블랙',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 18,
        name: '블랙 이태원점',
        address: '서울시 용산구 이태원로 170 [2~4층]',
        telephone: '02-796-6640',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 블랙',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 19,
        name: '블랙 청계광장점',
        address: '서울 중구 청계천로 14 [1층]',
        telephone: '02-318-3757',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 블랙',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 20,
        name: '블랙 청담점',
        address: '서울 강남구 도산대로 443 [1~2층]',
        telephone: '02-3442-0232',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 블랙',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 21,
        name: '삼성2호점',
        address: '서울 강남구 삼성로 560 (삼성동) [1층]',
        telephone: '02-538-5565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 22,
        name: '상봉메가박스점',
        address: '서울 중랑구 망우로 210 [2,3층]',
        telephone: '02-434-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 23,
        name: '서울대입구점',
        address: '서울 관악구 관악로 173 (봉천동) [2~3층]',
        telephone: '02-878-5565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 24,
        name: '성대입구점',
        address: '서울 종로구 창경궁로 231-2 (명륜4가) [1,2층]',
        telephone: '02-745-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 25,
        name: '성신여대점',
        address: '서울 성북구 동소문로22길 15 [2,3층]',
        telephone: '02-923-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 26,
        name: '수유역점',
        address: '서울 강북구 오패산로 416 (번동) [2,3층]',
        telephone: '02-999-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 27,
        name: '신사역점',
        address: '서울 강남구 강남대로 596 극동IND빌딩 [1층]',
        telephone: '02-543-3242',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 28,
        name: '신촌로터리점',
        address: '서울 서대문구 신촌로 109 [1~2층]',
        telephone: '02-364-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 29,
        name: '신촌점',
        address: '서울 서대문구 명물길 43 [1~4층]',
        telephone: '02-392-5630',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 30,
        name: '압구정로데오점',
        address: '서울 강남구 선릉로 823 한양타운 [1층]',
        telephone: '02-542-5517',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 31,
        name: '압구정점',
        address: '서울 강남구 논현로175길 38 (신사동) 1층 [탐앤탐스]',
        telephone: '02-514-3300',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 32,
        name: '어린이대공원점',
        address: '서울 광진구 광나루로 383 [1~2층]',
        telephone: '02-2205-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 33,
        name: '언주로점',
        address: '서울 강남구 언주로97길 8 (역삼동) 창해에탄올사옥 [1층]',
        telephone: '070-8283-6145',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 34,
        name: '역삼2호점',
        address: '서울 강남구 논현로 338 정암빌딩 [1층]',
        telephone: '02-3452-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 35,
        name: '영등포시장역점',
        address: '서울 영등포구 영중로 58 [1층]',
        telephone: '02-2636-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 36,
        name: '영등포역점',
        address: '서울 영등포구 경인로 851-1 (영등포동3가) 탐앤탐스 [1층]',
        telephone: '02-2672-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 37,
        name: '잠실새내역점',
        address: '서울 송파구 올림픽로12길 5(잠실동)정호빌딩 [2,3층]',
        telephone: '02-420-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 38,
        name: '장안1호점',
        address: '서울 동대문구 장한로 85 (장안동) 현대벤쳐빌 [1층]',
        telephone: '02-2243-4560',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 39,
        name: '장한평역점',
        address: '서울 동대문구 장한로 20 (장안동) [1층]',
        telephone: '02-2247-8899',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 40,
        name: '천호로데오점',
        address: '서울 강동구 천호동 천호대로157길 11 [2층]',
        telephone: '02-485-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 41,
        name: '청담2호점',
        address: '서울 강남구 도산대로50길 12(논현동) [1층]',
        telephone: '02-541-2630',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 42,
        name: '청담제이제이점',
        address: '서울 강남구 선릉로153길 5 보성빌딩 [1층]',
        telephone: '02-548-8565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 43,
        name: '탐스커버리 건대점',
        address: '서울 광진구 아차산로 236 [1~3층]',
        telephone: '02-465-4565',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 44,
        name: '탐스커버리 광진화양점',
        address: '서울 광진구 능동로13길 26 [4층]',
        telephone: '02-497-4565',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 45,
        name: '탐스커버리 금천본점',
        address: '서울 금천구 시흥대로 398 [1~2층]',
        telephone: '02-863-4565',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 46,
        name: '탐스커버리 도산로점',
        address: '서울 강남구 논현로152길 37 CNJ 빌딩 [1~2층]',
        telephone: '02-544-8990',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 47,
        name: '탐스커버리 청담점',
        address: '서울 강남구 도산대로89길 3 [1층]',
        telephone: '02-511-5090',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 48,
        name: '탐스퀘어 영등포점',
        address: '서울 영등포구 영중로 21 [1~3층]',
        telephone: '02-2634-5565',
        category: 'TOMTOM',
        detailCategory: '탐스커버리',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 49,
        name: '탐스크레이지파머스 청담점',
        address: '서울 강남구 도산대로 430 [1~2층]',
        telephone: '02-518-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 50,
        name: '티티클럽노원',
        address: '서울 노원구 노해로 507 [1층]',
        telephone: '02-950-0479',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 51,
        name: '하계점',
        address: '서울 노원구 섬밭로 258 [1층]',
        telephone: '02-949-6644',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 52,
        name: '한양대점',
        address: '서울 성동구 왕십리로 229 (행당동) [2,3층]',
        telephone: '02-2292-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 53,
        name: '홍대파크점',
        address: '서울시 마포구 잔다리로 16 [2~4층]',
        telephone: '02-324-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 54,
        name: '화곡역점',
        address: '서울 강서구 화곡로 176-4 [1,2층]',
        telephone: '02-2696-4565',
        category: 'TOMTOM',
        detailCategory: '탐앤탐스 클래식',
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 55,
        name: '종로3가점',
        address: '서울 종로구 종로 113 (종로3가) 1~3층',
        telephone: '02-747-0221',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 56,
        name: '약수역점',
        address: '서울 중구 다산로 114, (신당동,1~2층)',
        telephone: '02-2233-0866',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 57,
        name: '홍대입구역점',
        address: '서울 마포구 양화로 151 (동교동) 욱도빌딩',
        telephone: '02-322-3584',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 58,
        name: '목동예술인회관점',
        address: '서울 양천구 목동서로 225, 예술인회관 1층',
        telephone: '02-2655-1300',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 59,
        name: 'X-190930아시아선수촌점',
        address: '서울 송파구 백제고분로 109 (잠실동) 1층',
        telephone: '02-412-3260',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 60,
        name: '신림고시촌점',
        address: '서울 관악구 호암로 605 (신림동) 1층',
        telephone: '02-871-0777',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 61,
        name: '동대문역사문화공원점',
        address: '서울 중구 장충단로 251 (을지로6가)',
        telephone: '02-2272-3331',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 62,
        name: '신림사거리점',
        address: '서울 관악구 남부순환로 1599-3 (신림동) 1층',
        telephone: '02-877-1433',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 63,
        name: '노량진역점',
        address: '서울 동작구 노량진로 157 (노량진동) 2층',
        telephone: '02-827-0280',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 64,
        name: '굽은다리역점',
        address: '서울 강동구 양재대로 1591 (천호동)',
        telephone: '02-488-5077',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 65,
        name: '서울대사거리점',
        address: '서울 관악구 관악로 172 (봉천동) 2층',
        telephone: '02-877-6070',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 66,
        name: '건대입구점',
        address: '서울 광진구 아차산로 235 (화양동)',
        telephone: '02-463-1983',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 67,
        name: '당산역점',
        address: '서울 영등포구 당산로 219',
        telephone: '02-2631-3446',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 68,
        name: '종로본점',
        address: '서울 종로구 종로 84',
        telephone: '02-734-2838',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 69,
        name: '연신내점',
        address: '서울 은평구 연서로 212 1~3층',
        telephone: '02-388-3977',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 70,
        name: '건대일감호수점',
        address: '서울 광진구 아차산로39길 38-6 (화양동) 1~4층',
        telephone: '02-456-6627',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 71,
        name: '한남순천향점',
        address: '서울 용산구 대사관로 62',
        telephone: '02-749-6977',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 72,
        name: '노원문화의거리점',
        address: '서울 노원구 노해로81길 22-26',
        telephone: '02-935-8231',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 73,
        name: '도곡점',
        address: '서울 강남구 논현로28길 54 1층 할리스커피',
        telephone: '02-6204-3311',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 74,
        name: '강남역점',
        address:
          '서울 강남구 강남대로 402 (역삼동, 시계탑빌딩) 1층 할리스커피 강남역점',
        telephone: '02-555-0890',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 75,
        name: '세종로점',
        address: '서울 종로구 세종대로 161 2,3층',
        telephone: '02-720-5582',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 76,
        name: '합정역점',
        address: '서울 마포구 양화로 36',
        telephone: '02-6204-1234',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 77,
        name: '홍대점',
        address: '서울 마포구 홍익로 4 2층',
        telephone: '02-6749-1117',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: false,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 78,
        name: '신림점',
        address: '서울 관악구 신림로 353-1',
        telephone: '02-877-0019',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 79,
        name: '신논현역점',
        address: '서울 강남구 강남대로 제우빌딩 2층',
        telephone: '02-545-6077',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: true,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 80,
        name: '태평로점',
        address: '서울 중구 세종대로 64 해남빌딩 1층',
        telephone: '02-755-7795',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 81,
        name: '이태원점',
        address: '서울 용산구 이태원로 179',
        telephone: '02-749-8752',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      },
      {
        id: 82,
        name: '신촌점',
        address: '서울 서대문구 연세로 34',
        telephone: '02-393-2004',
        category: 'hollys',
        detailCategory: null,
        smokingRoom: true,
        parkingLot: false,
        createdAt: '2019-11-01 00:00:00',
        updatedAt: '2019-11-01 00:00:00'
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cafes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
