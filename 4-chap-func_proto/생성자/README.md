1. 빈 객체 생성 및 this 바인딩 : 생성자 함수가 생성한 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정.
2. this 를 통한 프로퍼티 생성
3. 생성된 객체 리턴 : 리턴문이 없는 경우 this 로 바인딩된 새로 생성된 객체 리턴, 리턴값이 새로 생성한 객체가 아닌 다른 객체를 반환하는 경우는 생성자 함수를 호출했다고 하더라도 this 가 아닌 해당 객체가 리턴
