
//Filter method starts here
//the use case of filter is to check the cobndition
const arr2=[1,2,3,4,45,];
const ans=arr2.filter((item)=>item>3) //returns [ 4, 45 ]
console.log(ans);

//same thing if we want to return as
const arr3=[1,2,3,4,45,];
const ans2=arr2.filter((item)=>{
    item>3
}) //returns [] it returns an empty object since its return under {} braces and whever {} braces comes it means explicit so compulsory and mandatory we need to have return 
console.log(ans2);

const arr4=[1,2,3,4,45,];
const ans3=arr4.filter((item)=>{
    return item>3;
}) //returns [ 4, 45 ]
console.log(ans3); // well the issue is fixed with the help of fixing return statement

const book=[
    {
      "title": "Miss Bala",
      "genre": "Willow Airport",
      "publis_date": 2011,
      "edition": "8/4/2021"
    },
    {
      "title": "Niagara Motel",
      "genre": "Waiheke Reeve Airport",
      "publis_date": 2012,
      "edition": "9/9/2008"
    },
    {
      "title": "Signal, The",
      "genre": "Urubupunga Airport",
      "publis_date": 2001,
      "edition": "9/14/2003"
    },
    {
      "title": "A Connecticut Yankee in King Arthur's Court",
      "genre": "Mandera Airport",
      "publis_date": 1992,
      "edition": "10/9/2018"
    },
    {
      "title": "Oscar and Lucinda (a.k.a. Oscar & Lucinda)",
      "genre": "Santo Ângelo Airport",
      "publis_date": 2008,
      "edition": "6/4/2010"
    },
    {
      "title": "Return of Swamp Thing, The",
      "genre": "Çardak Airport",
      "publis_date": 2011,
      "edition": "1/14/2007"
    },
    {
      "title": "Venom",
      "genre": "Canela Airport",
      "publis_date": 2004,
      "edition": "8/1/2017"
    },
    {
      "title": "Under the Volcano",
      "genre": "Bol Airport",
      "publis_date": 1989,
      "edition": "4/9/2011"
    },
    {
      "title": "Free Money",
      "genre": "Taylor Airport",
      "publis_date": 2005,
      "edition": "1/24/2018"
    },
    {
      "title": "Little Secrets",
      "genre": "Karlsruhe Baden-Baden Airport",
      "publis_date": 2006,
      "edition": "2/26/2022"
    },
    {
      "title": "Keys of the Kingdom, The",
      "genre": "Rouyn Noranda Airport",
      "publis_date": 2011,
      "edition": "2/18/2006"
    },
    {
      "title": "One from the Heart",
      "genre": "La Ronge Airport",
      "publis_date": 2009,
      "edition": "9/17/2015"
    },
    {
      "title": "Spine Tingler!  The William Castle Story",
      "genre": "Gwalior Airport",
      "publis_date": 1990,
      "edition": "2/6/2011"
    },
    {
      "title": "Libeled Lady",
      "genre": "Tetiaroa Airport",
      "publis_date": 1965,
      "edition": "3/19/2020"
    },
    {
      "title": "Relative Fear",
      "genre": "Lahr Airport",
      "publis_date": 2003,
      "edition": "7/21/2002"
    },
    {
      "title": "Actor's Revenge, An (Yukinojô henge)",
      "genre": "Gilgit Airport",
      "publis_date": 2007,
      "edition": "1/17/2024"
    },
    {
      "title": "All That Jazz",
      "genre": "Shigatse Air Base",
      "publis_date": 2006,
      "edition": "12/17/2023"
    },
    {
      "title": "Enid Is Sleeping",
      "genre": "C David Campbell Field Corsicana Municipal Airport",
      "publis_date": 1996,
      "edition": "5/26/2016"
    },
    {
      "title": "Palookaville",
      "genre": "Milingimbi Airport",
      "publis_date": 1989,
      "edition": "1/24/2004"
    },
    {
      "title": "I'll Do Anything",
      "genre": "Orlando Sanford International Airport",
      "publis_date": 2004,
      "edition": "6/21/2004"
    }
  ]

  const result=book.filter((book)=>book.publis_date>=2003);
   console.log(result);

   const myNum3=[1,2,3,4,5,6,7,8,9];
   const map3=myNum3
               .map((num)=>num*10)// 10, 20, 30, 40, 50,60, 70, 80, 90
               .map((num)=>num+1)//  11, 21, 31, 41, 51,61, 71, 81, 91
               .filter((num)=>num>=61)// [ 61, 71, 81, 91 ]
   console.log(map3);