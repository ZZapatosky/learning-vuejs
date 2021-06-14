
  
  Vue.component("card", {
	template:`
	<div class="card  " style="width: 17rem; float: left;">	

	<img v-bind:src= " 'img' + dataimage" class="card-img-top">
	<div class="card-body" style="width: 11rem;text-align: center;">
	  <h5 class="card-title">{{datatitle}}</h5>
	  <p class="card-text">{{"$"+dataprice}}</p>
	  <p class="text-center"><input type="number" class="form-control" placeholder="Qty" min="1"/></p>
	  <button @click="addToCart(prods.title, prods.price, prods.qty)" class="btn btn-sm btn-primary">Add to Cart</button>
	</div>
	
  </div>`,
  props:[`datatitle`,`dataprice`,`dataimage`]
  })

  


const vue = new Vue({
	el: "#app",
	data:{
		products : [
			{id: 1,title: 'LenovoThinkpad x280', price: 1000.00, qty: 1, image: '/ThinkPad_x280.png'},  
			{id: 2,title: 'Apple Macbook Pro',price: 2500.00, qty: 1,image: '/MacBook-Pro.png'},  
			{id: 3,title: 'Amazon Kindle Ebook',price: 150.00,qty: 1,image: '/Amazon_Kindle.png'},  
			{id: 4,title: 'USB-C to HDMI cable',price: 10, qty: 1, image: '/usbC_to_hdmi.jpg'},  
		]

	}
})



