function Looping(){
	this.forTest = function(arr){
		let returnVal = [] // 배열		
		for(let i = 0; i< arr.length; i++){
			if(arr[i] % 2 == 0)
				returnVal.push(arr[i])			//	list.add와 같
		}
		return returnVal
	}

	this.forEachTest = function(arr){
		let returnVal = [] // 배열		
		arr.forEach( i => { if( i % 2 == 1) returnVal.push(i) } )
		return returnVal
	}

	this.mapTest = function(arr){
		return arr.map(i => i*100 ) 
	}

	/* this.findTest = function(arr){
		return (arr.find( function(i){	//	조건을 만족하는 첫번째 값(근사치)만 출력 (값 하나만 출력)
			return i > 42			
		} ))
	} */
	this.findTest = function(arr){
		return (arr.find( i => i > 42 ))
	}
	this.findTest2 = function(arr, id){
		let resultVal = (arr.find( i => i.id == id ))
//		alert(`결과 : ${resultVal}`)
		return ( resultVal == undefined ) 
				? resultVal = '찾는 ID가 없습니다.'
				: resultVal.name
	}

	this.reduceTest = function(arr){
		return arr.reduce( (i, j) => i + j)	// 파라미터 2개 
	}

	this.filterTest = function(arr){
		return arr.filter( i => (i % 2 == 0))	// return 으로 바로 출력하면 메모리를 점유하지 않음
	}

	this.ofTest = function(arr){
		let temp = []
		for (const item of arr){
			temp.push(item.name)
		}
		return temp
	}

	this.fromTest = function(arr){
		return Array.from( arr, 	i => i + i)
	}

	this.argumentsTest = function(){
		return [...arguments]	// 호출시 argument값 출력
	}

	this.joinTest = function(){
		return [...arguments].join('\n')	// argument값을 [] string값으로 전
	}

	this.sortTest = function(){
		let t1 = [...arguments].sort()
		let t2 = [...t1].reverse()			
		return [...t1, ...t2]
	}
	
	this.reverseTest = function(){
		/* let t1 = [...arguments].sort()
		return [...t1].reverse()		 */	

		return [...[...arguments].sort()].reverse()
	}

	this.todos = function(arr){
		const todos = arr;

		// 비교 함수
		function compare(key) {
			return function (a, b) {
				// 프로퍼티 값이 문자열인 경우, - 산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
				return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
			};
		}

		// id를 기준으로 정렬
		resultVal = todos.sort(compare('id'));
		console.log(todos);

		// content를 기준으로 정렬
		resultVal = todos.sort(compare('content'));	// compare(content) - X
		console.log(todos);
		arr = todos.sort(compare('content'))
		
		let temp = []
		for (const item of arr){
			temp.push(item.content)
		}
		return temp
		
	}

}