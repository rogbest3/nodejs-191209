function Animal(name){	
	this.name = name 
}
function Human(){	
	Animal.apply(this, arguments) 
}	
function SuperHero(){	
	Human.apply(this, arguments) 
}
function Main(){
	return {
		test : function(){
			alert('클로저 테스트')
			Animal.prototype.setName = function(name){
				this.name = name
			}
			Animal.prototype.getName = function(){
				return this.name
			}
		}
	}
}