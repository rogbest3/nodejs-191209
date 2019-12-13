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

	//	alert(`${vm.getChange()}원을 받음`)
	},
	selectItem( itemNo, quantity ){
		service.vendingMachine()
		const vm = new VendingMachine()
		vm.setItemNo(itemNo)
		let calc, result, price, itemName
		switch(itemNo){
			case '1' :
				itemName = '콜라'
				price = 700
				calc = price * quantity 
				break
			case '2' :
				itemName = '사이다'
				price = 800
				calc = price * quantity 
				break
			case '3' :
				itemName = '쥬스'
				price = 1000
				calc = price * quantity 
				break
		}
//		alert(`${itemNo}, ${itemName}, ${price} `)


		service.handleOrder(quantity, price, itemName, calc)

		if( vm.getChange() >= calc ){
			vm.setChange(vm.getChange() - calc)
			result = `잔돈 ${service.returnChange()}원이 남았습니다.`
		}
		else{
			result = `금액 ${Math.abs(vm.getChange() - calc)}원이 부족합니다.`
		}
		return result
		
	},
	returnChange(){
		service.vendingMachine()
		const vm = new VendingMachine()
		return vm.getChange()
	},
	handleOrder( quantity, price, itemName, calc ){
		document
		.getElementById('box')
		.appendChild(compo.div('order'))

		const $order = document.getElementById('order')
		$order.appendChild(compo.span(`< 선택 내역 > `))
		$order.appendChild(compo.br())
		$order.appendChild(compo.span(`선택한 메뉴 : `))
		$order.appendChild(compo.span(`${itemName}`))
		$order.appendChild(compo.br())
		$order.appendChild(compo.span(`${itemName} 금액 : `))
		$order.appendChild(compo.span(`${price}원`))
		$order.appendChild(compo.br())
		$order.appendChild(compo.span(`구매 수량 : `))
		$order.appendChild(compo.span(`${quantity}개`))
		$order.appendChild(compo.br())
		$order.appendChild(compo.span(`구매 총 금액 : `))
		$order.appendChild(compo.span(`${calc}원`))
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