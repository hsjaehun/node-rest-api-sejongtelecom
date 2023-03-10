// prettier-ignore
const resultCodeMap ={
'100' : 'MMSC 전달 성공',
'202' : 'Content-length 오류',
'203' : 'MIME 형식 오류 (컨텐츠 개체, 사이즈, 타입 등의 오류)',
'206' : '멀티미디어 BODY 에러',
'207' : '지원하지 않는 미디어',
'208' : '사용 정지된 번호',
'211' : '변작신고접수발신번호',
'212' : '발신번호도용차단서비스가입번호',
'300' : 'MMS를미지원단말',
'301' : '메시지 FULL',
'302' : '단말기 전원 꺼짐, 음영지역, 이통사 TIME OUT',
'304' : '핸드폰 꺼짐',
'305' : '음영 지역',
'306' : '기타 에러',
'500' : '번호 이동 에러',
'506' : '발송 유효 시간 에러 508 스팸 Text 에러',
'600' : '발신 번호가 명의도용방지_부가서비스에 가입',
'601' : '발신 문구가 명의도용방지_부가서비스에 가입',
'1001' : 'Request Body 가 Json 형식이 아님',
'1002' : '허브 파트너 키가 유효하지 않음',
'1003' : '발신 프로필 키가 유효하지 않음',
'1004' : 'Request Body(Json)에서 name 을 찾을 수 없음',
'1006' : '삭제된 발신프로필. (메시지 사업 담당자에게 문의)',
'1007' : '차단 상태의 발신프로필. (메시지 사업 담당자에게 문의)',
'1011' : '계약 정보를 찾을 수 없음. (메시지 사업 담당자에게 문의)',
'1012' : '잘못된 형식의 유저키 요청',
'1013' : '유효하지 않은 app 연결',
'1014' : '유효하지 않은 사업자 번호',
'1015' : '유효하지 않은 app user id 요청',
'1016' : '사업자등록번호 불일치',
'1020' : '전화번호 or app user id 가 유효하지 않거나 미입력 요청',
'1021' : '차단 상태의 카카오톡 채널 (카카오톡 채널 운영툴에서 확인)',
'1022' : '닫힘 상태의 카카오톡 채널 (카카오톡 채널 운영툴에서 확인)',
'1023' : '삭제된 카카오톡 채널 (카카오톡 채널 운영툴에서 확인)',
'1024' : '삭제대기 상태의 카카오톡 채널 (카카오톡 채널 운영툴에서 확인)',
'1025' : '메시지차단 상태의 카카오톡 채널 (카카오톡 채널 운영툴에서 확인)',
'1026' : '사용할 수 없는 response_method 로 요청 (이미지알림톡(AI)는 realtime 으로 발송 불가)',
'1030' : '잘못된 파라메터 요청',
'2003' : '(테스트 발송) 카카오톡 채널을 추가하지 않았음',
'2004' : '템플릿일치확인시오류발생(내부오류발생)',
'2006' : '시리얼넘버 형식 불일치',
'3000' : '예기치않은 오류발생',
'3005' : '메시지를 발송했으나 수신확인 안됨 (성공 불확실), 서버에는 암호화 되어 보관되며 30 일 이내 수신 가능',
'3006' : '내부 시스템 오류로 메시지 전송 실패',
'3008' : '전화번호 오류',
'3010' : 'Json 파싱 오류',
'3011' : '메시지가 존재하지 않음',
'3012' : '메시지 일련 번호가 중복 됨, 메시지 일련번호는 CS 처리를 위해 고유한 값이 부여되어야 함',
'3013' : '메시지가 비어 있음',
'3014' : '메시지 길이 제한 오류 (텍스트 타입 1000자 초과, 이미지 타입 400자 초과)',
'3015' : '템플릿을찾을수없음',
'3016' : '메시지 내용이 템플릿과 일치하지 않음',
'3018' : '메시지를 전송할 수 없음',
'3022' : '메시지 발송 가능한 시간이 아님 (친구톡 / 마케팅 메시지는 08시부터 20시 50 분까지 발송 가능)',
'3024' : '메시지에 포함된 이미지를 전송할 수 없음 (이미지주소 또는 링크가 올바르지 않거나 이미지가 규격에 맞지 않음)',
'3025' : '변수 글자 수 제한 초과',
'3026' : '상담/봇 전환 버튼 extra, event 글자수 제한 초과',
'3027' : '메시지 버튼/바로연결이 템플릿과 일치하지 않음',
'3028' : '메시지 강조 표기 타이틀이 템플릿과 일치하지 않음',
'3029' : '메시지 강조 표기 타이틀 길이 제한 초과 (50자)',
'3030' : '메시지 타입과 템플릿 강조유형이 일치하지 않음',
'3031' : '헤더가 템플릿과 일치하지 않음',
'3032' : '헤더 길이 제한 초과(16 자)',
'3033' : '아이템 하이라이트가 템플릿과 일치하지 않음',
'3034' : '아이템 하이라이트 타이틀 길이 제한 초과(이미지 없는 경우 30 자, 이미지 있는 경우 21 자)',
'3035' : '아이템 하이라이트 디스크립션 길이 제한 초과(이미지 없는 경우 19 자, 이미지 있는 경우 14 자)',
'3036' : '아이템 리스트가 템플릿과 일치하지 않음',
'3037' : '아이템 리스트의 아이템의 디스크립션 길이 제한 초과(23 자)',
'3038' : '아이템 요약정보가 템플릿과 일치하지 않음',
'3039' : '아이템 요약정보의 디스크립션 길이 제한 초과(14 자)',
'3040' : '아이템 요약정보의 디스크립션에 허용되지 않은 문자 포함(통화기호/코드, 숫자, 콤마, 소수점, 공백을 제외한 문자 포함)',
'4000' : '메시지 전송 결과를 찾을 수 없음',
'4001' : '알 수 없는 메시지 상태',
'5000' : '(테스트 발송) 관리자 혹은 일회성 인증을 받은 사용자가 아님',
'5001' : '(테스트 발송) 일일 발송량 초과',
'7103' : '메시지길이제한오류(메시지제한길이및1000자초과)',
'7104' : '메시지 내용이 템플릿과 일치하지 않음',
'7109' : '사용자에게 메시지를 발송했으나 수신여부 불투명 (성공불확실/비과금)',
'7110' : '카카오 내부 시스템 오류로 메시지 전송 실패',
'7111' : '카카오 서버와 연결되어 있지 않는 카카오톡 사용자',
'7112' : '전화번호 오류',
'7115' : '친구톡발송가능시각이아님',
'7188' : '친구톡 이미지 발송 에러',
'7199' : '카카오 메시지 상태 unknown Error',
'7403' : 'IMAGE 업로드 권한 없음',
'7405' : 'IMAGE 업로드 파라미터 오류',
'7600' : '이미지용량초과,발송할수없는이미지사이즈,지원하지않는이미지형식',
'8XXX' : '카카오 HTTP 에러 코드 9001 세종텔레콤 내부 처리 오류',
'9998' : '미 제공 서비스 (시스템에 문제가 발생하여 담당자가 확인하고 있는 경우)',
'9999' : '기타 오류 (시스템에 문제가 발생하여 담당자가 확인하고 있는 경우)',
}

// prettier-ignore
const wideShotStatusCode ={
'200' : '요청 성공',
'201' : '비가입,결번(착신가입자없음)',
'209' : '전화번호세칙미준수발신번호사용',
'210' : '사전 미등록 발신번호 사용',
'213' : '카카오 sender-key 오류 400 서버 실패',
'403' : '권한 없음',
'405' : '파라미터 포맷 관련 오류',
'501' : '잔액 부족',
'502' : '10초당메시지전송량초과(재전송필요)',
'503' : '스팸 처리',
'504' : '일일 최대 전송 량 초과',
'505' : '월별 최대 전송 량 초과',
'506' : '발송 유효 시간 에러',
'S403' : '권한 없음',
'S405' : '파라미터가 올바르지 않음',
'S406' : '지원하지 않는 메서드 형식',
'S429' : 'Too many connection S500 서버 오류',
}
