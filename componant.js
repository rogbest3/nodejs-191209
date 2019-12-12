const compo = {
	// div : ()=>{}
	// div : function(){}
	// div(){}
	div(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
	//	div.textContent = text
		return div
	}, 
	inputText(id, type){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		return input
	},
	inputButton(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		input.setAttribute('value', val)
		return input
	},
	br(){
		return document.createElement('br')
	}
}
// 공유하는 프로퍼티가 없기 때문에 객체 리터러로 사용 -> 위에 코드로 사용, 사용시 new 필요 없이 사용가능
/* function Div(){
	this.make = function(id){
		const div = document.createElement('div')
		div.setAttribute('id', id)
		div.setAttribute('style', 'border : 1px solid black')
	//	div.textContent = text
		return div
	}
}

function InputText(){
	this.make = function(id, type){
	//	if(input == undefined || input == null){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		return input
	//	}
	}
}                       
function InputButton(){
	this.make = function(id, type, val){
		const input = document.createElement('input')
		input.setAttribute('id', id)
		input.setAttribute('type', type)
		input.setAttribute('value', val)
		return input

	}
}
function br(){
	this.make = function(){
		const br = document.createElement('br')
		return br
	}
}       

function Func02(){
	this.play = function(){
		if(input == undefined || input == null || input == ''){
			alert('텍스트 필드를 입력하세요.')
		}
		else{
			alert((input.value !== '') ? input.value : '먼저 입력하시오.')
			input.focus()
		}
		choice.value = 0
	}
}
// factory 패턴
function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
		case 'inputButton' : return new InputButton()
		case 'br' : return new br()
		case 'div' : return new Div()
	}
} */