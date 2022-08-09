function parent(){
    var a = 100;

    var child = function(){
        console.log(a);
    }

    return child;
}

var inner = parent();
inner();

// 실행이 끝난 parent() 와 같은 부모 함수 스코프의 변수를 참조하는 inner 와 같은 함수를 클로저

