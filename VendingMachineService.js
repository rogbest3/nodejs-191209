const service = {	//	기능은 객체 리터럴로 생성
	vendingMachine(){
		VendingMachine.prototype.setChange = function(change){ _change = change }
		VendingMachine.prototype.getChange = function(){ return _change }

		VendingMachine.prototype.setItemNo = function(itemNo){ _itemNo = itemNo }
		VendingMachine.prototype.getItemNo = function(){ return _itemNo }

		VendingMachine.prototype.setItemNoList = function(itemNoList){ _itemNoList = itemNoList }
		VendingMachine.prototype.getItemNoList = function(){ return _itemNoList }

		VendingMachine.prototype.setItemList = function(itemList){ _itemList = itemList }
		VendingMachine.prototype.getItemList = function(){ return _itemList }
	},
	insertCoin(coin){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)

		alert(`${vm.getChange()}원을 받음`)
	},
	selectItem( itemNo, quantity ){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setItemNo(itemNo)
		
	},
	returnChange(){
		
	},
	handleOrder( quantity, price, itemName ){

	}
}

/* 
function Initializer(){
	this.vendingMachine = function(){
		// 이 기능은 아무곳에서나 수행해도 상관없음
		VendingMachine.prototype.setChange = function(change){ _change = change }
		VendingMachine.prototype.getChange = function(){ return _change }

		VendingMachine.prototype.setItemNo = function(itemNo){ _itemNo = itemNo }
		VendingMachine.prototype.getItemNo = function(){ return _itemNo }

		VendingMachine.prototype.setItemNoList = function(itemNoList){ _itemNoList = itemNoList }
		VendingMachine.prototype.getItemNoList = function(){ return _itemNoList }

		VendingMachine.prototype.setItemList = function(itemList){ _itemList = itemList }
		VendingMachine.prototype.getItemList = function(){ return _itemList }
	}
}
function VendingMachineService(){
	
	this.insertCoin = function(coin){
		const init = new Initializer()
		init.vendingMachine()
		const vm = new VendingMachine()
		vm.setChange(coin)

		alert(`${vm.getChange()}원을 받음`)
	}
	this.selectItem = function( itemNo, quantity ){

	}
	this.returnChange = function(){

	}
	this.handleOrder = function( quantity, price, itemName ){

	}
}
 */

//	_change, _itemNo, _itemNoList, _itemList