// MaKMak Project 

// part 1
// 1. list of items Each item has an ID, name, price and quantity

 var items=
	[{
	id:'001',
	name:'sugar',
	price:5,
	quantity: 10
	},
	{
	id:'002',
	name:'flour',
	price:3,
	quantity: 10
	},
	{
	id:'003',
	name:'milk',
	price:2.5,
	quantity: 10
	},
	{
	id:'004',
	name:'bread',
	price:1.30,
	quantity: 10
	},
	{
	id:'005',
	name:'juice',
	price:23,
	quantity: 5
	}]



	//  
 //new items (aka. orders)
 
 var newitems=
	[{
	name:'sugar',
	quantity: 0
	},
	{
	name:'flour',
	quantity: 0
	},
	{
	name:'milk',
	quantity: 0
	},
	{
	name:'bread',
	quantity: 0
	},
	{
	name:'juice',
	quantity: 0
	}]



//1.1 function to restock items 1 or zero. 
function restock(){
	for(i=0;i<items.length;i++){
	  if(items[i].quantity<2){
	    console.log("The following items need be restocked!")
	    console.log("ID  | Item Name")
	    console.log(items[i].id + " | " + items[i].name)
		} 
	}
}


//1.2 return price 

function price(a){
	for(i=0;i<items.length;i++){
	  	if (a=="price "+items[i].name)
	  		{
	  		console.log("The unit price for "+items[i].name+ " is "+items[i].price+ " EGP" )
	  		}
	  	}
		}





//1.3.1 find number in a string

function findNumber(a){
var number = ""
for (var i=0; i<=a.length; i++){
  if(a[i]<=9){
    number="" +number+a[i]
  	}
  }
return number
}



//1.3.1 find search

function search(a){
	if (a.indexOf("search")>=0){
    return true
    }
  else {return false
  }
  
}



//1.3.2 find name of the product 

function name(a){ 
  var productName=''
	for(i=0;i<items.length;i++){
    if (a.includes(items[i].name)== true){
      productName=items[i].name
    }
		} console.log(productName)
}


//return quantity 



//return quantity 


function quantity(a){
	for(i=0;i<items.length;i++){
    if (search(a)==true 
        && a.includes(items[i].name)== true
        && findNumber(a)<=items[i].quantity)
        {
      console.log("Yes we have " + items[i].quantity + " " + items[i].name  + " Units available")
        }
    
    else if (search(a)==true 
        && a.includes(items[i].name)== true
        && findNumber(a)>items[i].quantity
        && items[i].quantity !=0)
        {
      console.log("We only have "+ items[i].quantity + "  "+ items[i].name + " Units available.")
        }
   else if (search(a)==true 
        && a.includes(items[i].name)== true
        && items[i].quantity==0)
        {
    console.log("Sorry, we are out of " + items[i].name+ ". ")
  } 
}	
}



///////////////////////////////////PART 2 /////////////////////////////




	//2.1 find order

function order(a){
	if (a.indexOf("order")>=0){
    return true
    }
  else {return false
  }
  
}




// add values to the new array


//newitems[1].quantity=parseInt(findNumber(a))




/// order functions 



function theorder(a){
	for(i=0;i<items.length;i++){
    if (order(a)==true 
        && a.includes(items[i].name)== true
        && findNumber(a)<=items[i].quantity)
          
          {
           console.log(findNumber(a) +  " units of " + items[i].name +  " available and added to your order")

           newitems[i].quantity=parseInt(findNumber(a))


           }
    
    else if (order(a)==true 
        && a.includes(items[i].name)== true
        && findNumber(a)>items[i].quantity
        && items[i].quantity !=0)
        {
      console.log("We only have "+ items[i].quantity + "  "+ items[i].name + " Units available, please reorder with max "+ items[i].quantity + " units.")
        }
   else if (order(a)==true 
        && a.includes(items[i].name)== true
        && items[i].quantity==0)
        {

           console.log("Sorry, we are out of " + items[i].name + " , could not add it to your order.")}
}	
}


//console.log(theorder("order milk 4"))
//console.log(theorder("order sugar 5"))
//console.log(theorder("order bread 2"))
//console.log(theorder("order juice 1"))


/// total orders 

//Done total order price

function totalOrder(){
  var sum=0 
  for(i=0;i<newitems.length;i++){
    sum=(newitems[i].quantity*items[i].price)+sum
  }
  return sum
} 

totalOrder()



// done order
function done(){
   console.log("Here is your order:")
   console.log("Order Date: "+ new Date())
   console.log("Qt | Item")
   console.log("----------- ")
for(i=0;i<newitems.length;i++){
  if (newitems[i].quantity>0)
  {
  console.log(newitems[i].quantity + " | "+ newitems[i].name)
  }
}
console.log("Total : "+ totalOrder()+ " EGP")   
}

// done()




/////////////////////////////////////PART 3/////////////////////////////


// part three sales 


//3.1 Sales 

/// 
function sales(){
  console.log ("Total Sales is "+totalOrder()+ " EGP")
}




//  mosst selling 


function MostSelling() {
var mostSoFar = 0;
var maxI= " ";
for (var i = 0; i < newitems.length; i++){
if (newitems[i].quantity > mostSoFar) {
mostSoFar = newitems[i].quantity;
maxI = i;
}
}
//console.log(maxI)

console.log("The most selling item is " +newitems[maxI].name+", we sold " +newitems[maxI].quantity+ " units for "+ items[maxI].price*newitems[maxI].quantity+" EGP")

}





/// most sales by price 


function MostSales() {
var mostSoFar = 0;
var maxI= " ";
for (var i = 0; i < newitems.length; i++){
if ((newitems[i].quantity*items[i].price) > mostSoFar) {
mostSoFar = newitems[i].quantity*items[i].price;

maxI = i;
}
}


console.log("The most selling item is " +newitems[maxI].name+", we sold " +newitems[maxI].quantity+ " units for "+ items[maxI].price*newitems[maxI].quantity+" EGP")

}



/// 






















	







const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('\nHow can I help you?\n', function (answer) {
        if (answer == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        handleInput(answer);
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine();

/* IGNORE ALL THE ABOVE - THIS CODE ALLOWS YOU TO TAKE INPUT FROM USER - START FROM THE HANDLE INPUT FUNCTION */


var handleInput = function(input){ // called with every input
  if (input=='restock'){
		restock()

// if input == price "item"
}
else if (search(input)==true){
		quantity(input)}


else if (input=='order DONE'){
		done()}

else if (order(input)==true){
		theorder(input)}


else if (input=='Sales'){
		sales()}

else if (input=="Most Selling"){
	MostSelling()
}

else if(input=='Most Sales'){
	MostSales()
}
else { "invalid input, please rewrite a valid one"}

  console.log('You asked for: "', input, '"');
}
