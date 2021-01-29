# MakMak_Chatbot
MakMak is a basic mini supermarket chatbot simulation, it can check the availability of the requested items, placing an order, and calculate daily revenues. 


### Part1: checking on inventory?

- MakMak has a list of items that he sells and their unit price.
    - Each item has an ID, name, price and quantity
- MakMak keeps track of the stock of each item he sells.
- Makmak keeps track of items that he needs to restock.
- Every morning MakMak runs the restock function to check what items need to be restocked today.

```bash
How can I help you? 
> restock
The following items need be restocked! 
ID  | Item Name
123 | Flour 
045 | Milk 
```

- When a client asks MakMak about the price of an item, he returns their unit price

```bash
How can I help you? 
> price Sugar
The unit price for Sugar is 5 EGP
```

- When a client asks MakMak about an item, he can search if he has enough stock from it or not.
```bash
How can I help you? 
> search Sugar 2
Yes we have 2 Sugar Units available

How can I help you? 
> search Milk 3
Sorry, we are out of milk.  

How can I help you? 
> search Juice 7
We only have 3 Juice Units available.  
```

### Part2: Placing an Order?

MakMak receives orders from customers, he needs to check stock availability of each item. and calculate the total and display it 
```bash
How can I help you? 
> order Sugar 2
2 units of Sugar available and added to your order.  

How can I help you?
> order Juice 3
3 units of Juice available and added to your order.  

How can I help you?
> order Milk 3
Sorry, we are out of milk, could not add it to your order. 

How can I help you?
> order Bread 4
4 units of bread available and added to your order.  

How can I help you?
> order DONE
Here is your order:
Order Date: Thu Apr 09 2020 15:28:28
Qt | Item
-----------
2  | Sugar
3  | Juice 
4  | Bread 
Total : 50 EGP
```

### Part3: Daily Earnings?
- MakMak can get total sales

    ```bash
    How can I help you?
    > Sales 
    Total Sales is 500 EGP
    ```
- MakMak wants to know which is the most selling product (sold most items), and how much he sold from it and the product that got most sales (the money from selling it was more than any other item)

    ```bash
    How can I help you?
    > Most Selling 
    The most selling item is Bread, we sold 20 units for 100 EGP

    How can I help you?
    > Most Sales
    The most sales came from Shampoo, we sold 5 units for 200 EGP
    ```
    
    ## next sprint
    
   * make an extranl connection to the store list of items. 
   * provide historical overview (not only covers the last day).
   * introduce NLP to understand the requests better.
   * provide more selection options in the begaining.
