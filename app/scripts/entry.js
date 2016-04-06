// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import Backbone from 'backbone';
import $ from 'jquery';


var shirts = Backbone.Collection.extend[
	
  {
    id: 1,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Save my Trees",
    price: 19

  },
  {
    id: 2,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Nature Lover",
    price: 19

  },
  {
    id: 3,
    imageUrlFront: "http://fillmurray.com/250/250",
    imageUrlBack: "http://placecage.com/250/250",
    title: "Forrest Walk",
    price: 19

  }
];




const shirtDisplay = Backbone.View.extend({
	initialize: function(fimage, bimage, title, price) {
		this.fimage = fimage;
		this.bimage = bimage;
		this.title = title;
		this.price = price;
	}, 
	template: function() {

		return` 
				<img src = ${this.fimage}>
				<div class = "rotate">
				</div>
				<div>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
				<br>
				<span class = "title">${this.title}</span>
				<span class = "price"font-color = "#81BCE6">${this.price}</span>
				</div>`;

	},
	className: 'shirtDiv',
	render: function() {
		this.$el.html(this.template());
		$('section').append(this.el);
	}
});

var pinkShirt = new shirtDisplay("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Save my Trees","$19.00");
var blueShirt = new shirtDisplay("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Forrest Walk","$19.00");
var yelloShirt = new shirtDisplay("http://fillmurray.com/250/250", "http://placecage.com/250/250", "Nature Lover","$19.00");

pinkShirt.render();
blueShirt.render();
yelloShirt.render();



//   events: {
//     "click .icon":          "open",
//     "hover .button.":   "animate",
//   },

//   initialize: function() {
//     this.listenTo(this.model, "change", this.render);
//   },

//   render: function() {
//     ...
//   }

// });