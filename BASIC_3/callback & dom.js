

function addEventListener() {
    var count=0;
    document.getElementById("clickme").addEventListener("click",function xyz(params) {
        console.log("button clicked",++count);        
    })
}

addEventListener();

// its a revision of the prev topics

// so here a call back function is called inside eventlistener on click which is taking a variable count present in the outer scope by forming a closure with addEventListener function getting the access of its lexical environment. we are using closure to ensure of data encapsulation and hiding so that count can,t be accessed from outside.

// we should remove the event listener when ever possible as it doesn't get garaged collected as it hold some value and can also block the main thread.
