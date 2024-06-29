

//*normal script tags->

// html parsing will go on and when it encounter script tags it will fetch from network and execute then continue the html parsing again.

//* async script tags ->

// html->along with html parsing it will do js parsing parallel and when its done it will execute and html-> continue 

//* defer  ->

// html-> parallel js parsing -> and when the whole html parsing is done it will execute js 

//* when to use what ?

// if one script tag is depended on other then we should use defer otherwise async basically in async the order may not be same so when we have to follow certain order we use defer. 

