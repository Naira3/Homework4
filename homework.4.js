//2. Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.
 trianglestar= function(a){
  let x=0;
    let b=2*a-1;
    while(x<=a){
      console.log (" "+ third(b));
     b=b-2;
      x=x+1;
    }
    
  };
  
   third= function (num){
  let y=0;
    let s=[];
    while (y<num){
    s[y]="*";
      y=y+1;
     }
    return s;
  
  };
  
  trianglestar(5);
  



//3. Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.
merge= function(arr1, arr2){
    let a=0;
    let b= [];
    while (a<= arr1.length) {
      b[a]=arr1[a];
         a=a+1;
    }
    
    d=0;
    c=a;
    while (d<= arr2.length) {
      b[c]=arr2[d];
      c=c+1;
      d=d+1;
    }
    return b;
  }


//Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.
const findMinMax = function(array, b){
  let i = 1;
  let n;
  let j=array[0];
  if (b){
      while(i<array.length){
          if (j>=array[i])
          {
              j=j;
          }
          else{
              j= array[i]
          }
          i=i+1;
      }
      
  }
  else{
      while(i<array.length){
          if (j<=array[i]){
              j=j;
          }
          else{
              j= array[i]
          }
          i=i+1;
  }
  }
  console.log(j);
};
//5. Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given array.

const func = function(a){
  return a;
   
};

const forEach = function(array, f){
  let x = 0;
  while (x<array.length){
    console.log(f(array[x]));
    x=x+1;
  }  
};

//6. Create a function 'sum' that takes an array of numbers and returns their sum.
const sum = function(array){
  let x=0;
    let a=0;
    while (a < array.length){
    x = x + array[a];
      a=a+1;
   }
    return x;
   
  };
 

  //7. Write a function 'reverse' that reverses the given string.  
  const reverse= function(word){
    let x=0;
    let w="";
    let b= word.length - 1;
   
    while (x<word.length){
      w = w + word[b];
      b=b-1;
      x=x+1;
    }
    return w;
  };
  
//8. Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.
   
function checkboard(num, heigth){
    let y=0;
      while (y<heigth){
        if(y % 2 === 1){
          console.log (" "+merge("*", num))
        }  
        else{
        console.log (merge("*", num));
        }
        y=y+1;
      }
    }; 
      function merge(str,num){
       let x=0;
        let p="";
        while (x<num){
        p=p+str;
        x=x+1;
        }
      return p;
      
    };
    
    console.log(checkboard(5,6))

    
   

      

          