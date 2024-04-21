
        let personal_info=['suprovho','De Sarkar','siliguri'];
        let qualification_position=['BCA','MCA','SDE'];

        //concatenation 

        // lets merge the  both the array and return new array without changing original by using Concat()

        let ans=personal_info.concat(qualification_position);
        console.log(ans);

        // if we do push it will merge two arrays and create a nested form which we don't want.

        //* another way of doing is using spread operator 

        const ans2=[...personal_info, ...qualification_position];
        console.log(ans2,"sprd opt");

        
        //suppose we have nested array, and would like to  make it one single array elements
        //in this case we will use flat() method

        let ar1=[1,2,3,4,5,[6,7,8],[9,10,11,[12,13]]];
        let o=ar1.flat(ar1.length); // we have to specify the depth  it can be upto any indx or infinity etc..
        console.log(o);

         //to check whether the give condition is array or  not
         let a=1;
         console.log(Array.isArray(a));// since the given type is false
         console.log(Array.isArray(ar1));// since the given type is true

         //to convert multiple variable to a single array
        // of()

        let h=12;
        let i=13;
        let j=14;

        console.log(Array.of(h,i,j));

        // const arr=new Array("hey");
        // console.log(arr);
