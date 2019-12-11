function InputText(){
	this.make = function(){
	//	if(input == undefined || input == null){
		const input = document.createElement('input')
		input.setAttribute('type', 'text')
		input.setAttribute('id', 'val')
		return input
	//	}
	}
}                       
function InputButton(){
	this.make = function(){
		const input = document.createElement('input')
		input.setAttribute('type', 'button')
		input.setAttribute('id', 'btn')
		input.setAttribute('value', '버튼')
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

function Factory(type){
	switch(type){
		case 'inputText' : return new InputText()
			break
		case 'inputButton' : return new InputButton()
			break
		case 'br' : return new br()
			break
	}
}