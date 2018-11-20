

// for(i=2;i<10;i++) {
// 	for(j=1;j<10;j++){
// 		window.document.write(i+"x"+j+"="+i*j,"<br>");
// 	}
// }


// body태그안의 내용들이 구성된 후(화면이 출력된 후) function안에 있는 코드들이 실행됨.
window.onload = function(){
	printMulti();
	alert("hello");
}

// 구구단 전체를 출력하는 함수.
function printMulti(){
	for(var i=2;i<=9;i++){
		multi(i);
	}
}

// a단을 출력하는 함수
function multi(a) {
	console.log(a + "단");
	for(var i=1; i<=9;i++) {
		printMul(a, i);
	}
}

// a*i를 출력하는 함수
function printMul(a,i) {
	var res = a*i;
	var str = ""+ a + "x" + i + "=" + res;
	console.log(str);
}

var array = {name:"홍길동", age:"20", address:"청주시"};
console.log(array['name']);
console.log(array['age']);

for(var key in array) {
	// key : 배열 array의 각 키 값인 name, age, address를 가져온다.
	console.log(key+" : " +array[key]);
}

var array1 = [1, "123", 456];
var array2 = [789, "1234", "456"];
// concat함수는 배열 2개를 하나로 합쳐 새로운 배열을 만들어 돌려준다.
console.log("concat()함수 예제");
console.log(array1.concat(array2));
console.log(array1);
console.log("push()함수 예제");
console.log(array1.push(000));
console.log("배열의 길이 : " + array1.length); 
// 배열을 구분자를 이용하여 하나의 문자열 생성
console.log("join()함수 예제");
console.log(array1.join(", "));
// 배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고, 원본은 수정됨.
console.log("splice()함수 예제");
console.log(array1.splice(1));
console.log(array1);
// 배열을 해당하는 번지부터 잘라내기를 하여 잘려진 부분을 반환하고 원본은 수정이 안됨.
console.log("slice()함수 예제");
console.log(array2.slice(1));
console.log(array2);
console.log("reverse()함수 예제");
console.log(array2.reverse());
console.log("sort()함수 예제");
// 모든 배열원소들을 문자열로 만든 후 비교하여 정렬
console.log(array2.sort());
