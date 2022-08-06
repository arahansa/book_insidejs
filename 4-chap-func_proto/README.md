
# 대분류
1. 함수 생성
2. 함수도 객체다


## 함수를 생성방식
- 함수 선언문
- 함수 표현식
- Function() 생성자 함수

1. 함수 리터럴을 통한 함수 생성 정의
```

```

2. 함수 선언문 
```
function add(x,y){
    return x+y;
}
```




3. 함수 표현식
```
var add = function(x,y){
    return x+y;
}

```
4. Function() 생성자 함수를 통한 함수 생성
```

var add = new Function('x','y','return x+y');
console.log(add(3,4);
```
