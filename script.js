// While loop
let colors = ['yellow', 'blue', 'red', 'orange']

while (colors) {
    console.log(colors);
    colors++;
} 

//For loop
for (colors = ['yellow', 'blue', 'red', 'orange']; colors.length; colors++){
    console.log(colors);
}

//forEach:
let color = ['yellow', 'blue', 'red', 'orange'];
color.forEach(element => console.log(element));


/* 

1) How many lines does my for loop and my while loop take?
For loop = 5 lines
While loop = 3  lines

2) How many lines does my forEach method take?     
2 lines

3) What other advantages do using an array method have over a for or a while loop? 
I find a 'forEach' easier to read. You don't have to use the increment.

4) Can you use an array method on an object? 
The answer is no. 

Suppose you have an object with 45 properties. 
Try to find out (use Google) how you can still console.log those 45 properties with a loop: Looping through the properties of an object. 
Try this piece of code and use an object with 5 properties for it. Are you iterating now? */