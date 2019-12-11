function Initializer(){
	/* return {
		animal = function(){
			Animal.prototype.setName = function(name){
			this._name = name
		}
		Animal.prototype.getName = function(){
			return this._name
		}
		}
	} */
	// 클로저 기능함 -> this를 써야 public
	this.animal = function(){
		Animal.prototype.setName = function(name){
			_name = name
		}
		Animal.prototype.getName = function(){
			return _name
		}
	}

	this.human = function(){
		Human.prototype = new Animal()
		Human.prototype.test = function(){ 
			return _name
		} 
	}

	this.superHero = function(){
		SuperHero.prototype = new Human()
		SuperHero.prototype.exam = function(){
	//	SuperHero.prototype.test = function(){
			return _name
		}
	}
}