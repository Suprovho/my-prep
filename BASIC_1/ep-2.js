
//! String is stored in key value pairs in from of object not in from of arrays. 

const game=new String("hello world"); // string declaration using new keyword
console.log(game);


//*BACKTICKS-->>

const hello="sup";
console.log(`hey! ${hello.toLocaleUpperCase()}`); 

const gameName= new String("GTAsanandreas");
        console.log(gameName);//return the basic output as GTAsanandreas
        console.log(gameName.charAt(1)); // returns the character position as t which lies in the index 2
        console.log(gameName[0]);
        console.log(gameName[1]);
        console.log(gameName[2]);
        console.log(gameName[3]);
        console.log(gameName[4]);
        console.log(gameName[5]);
        console.log(gameName[6]);
        console.log(gameName[7]);
        console.log(gameName[8]);
        console.log(gameName[9]);
        console.log(gameName[10]);
        console.log(gameName[11]);
        console.log(gameName[12]);
        console.log(gameName[13]);// if the indexing exceeds then the output will be thrown as undefined

        //*substring method
        const names="suprovho";
        console.log(names.substring(0,3));
     
        //*slice method
          
        console.log(names.slice(0,4));
        
        //*replace

        let vic=names.replace('sup','pus');
        console.log(vic);

        //*trim method

        let c=new String("      hey  kee");
        console.log(c.trim());


    //!problem STATEMENT->

     const icc=new String("Yo this is vicky acahrjee");
     let r=icc.replace('this','This');
     console.log(r);
     r=icc.replace('vicky','VICKY');
     console.log(r);
     r=icc.replace('acahrjee','ACHARJEE');

     console.log(r);

//* The reason you're not getting the expected results when calling replace multiple times is that the replace method does not modify the original string in place. Instead, it returns a new string with the replacements applied. Therefore, when you call replace and assign the result to the variable r, subsequent calls to replace do not operate on the modified string; they still operate on the original unmodified string.


// split->

//*this is split method and this basically converts string to an array 
const hmm="hello this is a js tutorial"
console.log(hmm.split(" "));
        

//to String-->

const num=123;
console.log(typeof num.toString());

//concatination->

const helo="hi"
const b="sup";
console.log(helo+b);

