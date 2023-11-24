Server is a software which runs on a machine whose environment is 24/7 and passively waits for client's request to respond.
--------------------------------------------------------------------------------------------------------->

Client is a software which runs on a machine whose actively asks and send request to server and get response and got down.
--------------------------------------------------------------------------------------------------------->

The function is indeed a store and reuse pattern.
The function keyword returns a value which is the function itself - it makes a function!.
--------------------------------------------------------------------------------------------------------->

First class functions :
In Computer Science, a programming language is said to have first class language if it treats function as first class citizens.Specifically, this means that, we can pass function as arguments to other functions, assigning them  to variables or storing them in other data structures.
--------------------------------------------------------------------------------------------------------->

Destructor is not available in js and Constructor are implicitly present in js.
--------------------------------------------------------------------------------------------------------->

A Constructor in a class is a special block of statements called when an object is created.
--------------------------------------------------------------------------------------------------------->

Each instance has its own copy of the instance variables.
--------------------------------------------------------------------------------------------------------->

Static variables are those variables, which remains till the ending of the program.
--------------------------------------------------------------------------------------------------------->

Strict Mode in Js, forces us to declare a variable, object and then initialize it. Directly, declaring  throws error.

"Use-Strict" directives was introduced in ECMA v5. The code should be executed in strict mode. We can strict mode:
------> at the beginning of the file.
"use strict"
a = 5 { This will throw an error" }
-------> Inside a function 
x = 25 // will throw an error.
function my_fn(){
 y = 12; // will throw an error.
}

In strict mode, any assignment to a non-writeable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.
--------------------------------------------------------------------------------------------------------->

A callback function can run, after another function has finished.
--------------------------------------------------------------------------------------------------------->

Function which are running in parallel with other function are called Asynchronous functions.
--------------------------------------------------------------------------------------------------------->

Promises : it is a JS object that link producing code and consuming code.
--------------------------------------------------------------------------------------------------------->

Producing code : it will take some time, for completion.
--------------------------------------------------------------------------------------------------------->

Consuming Code : it will wait for the producing code to get completed.
--------------------------------------------------------------------------------------------------------->

Asynchronous Functions : Objects running in parallel, are asynchronous.
--------------------------------------------------------------------------------------------------------->

Promises : A promise is a Js object, that link producing and consuming code.
Producing code is a code that takes some time.
Consuming code is a code that merge with further result.
--------------------------------------------------------------------------------------------------------->

Async and Await :

Asyc means a function, which returns a promise.

Await means a function, which waits for a promise.
--------------------------------------------------------------------------------------------------------->

let my_function = new Promise(function(myResolve, myReject){
	//"Producing Code" //May Take some time
	
	myResolve(); //when successful
	myReject(); //When Error
});
--------------------------------------------------------------------------------------------------------->

//"Consuming Code" (must wait for fulfilled promise)
myPromise.then(){
function (value){//code if successful}
function (error){// code if some error}
};
--------------------------------------------------------------------------------------------------------->

Node.js is an open-source server application.
 its also cross-platform runtime enviornment and running js out of the browser.
  Its used to power back-end services, also called as API.
--------------------------------------------------------------------------------------------------------->
 
 Node is ideal -
 1. for building scalable
 2. data intensive
 3. real-time bakend services
 that power our client applications.
---------------------------------------------------------------------------------------------------------> 

 Node,js should not be used for CPU computational processes, it should only be used for data intensive processes, because its single-threaded.
--------------------------------------------------------------------------------------------------------->
 
 Node can be used for prototyping and agile development. It can also be used for super-fast and highly scalable systems. 
--------------------------------------------------------------------------------------------------------->

Node.js is much better than Java springboot, details published by Paypal in 2017 reports.
--------------------------------------------------------------------------------------------------------->

It's used widely because we already use js in frontend, so we just need to use it for backend also, without learning any new language.
--------------------------------------------------------------------------------------------------------->

Node is a runtime env for executing JS code.
--------------------------------------------------------------------------------------------------------->

A virtual machine is a software that utilizes out system resources and perform task
--------------------------------------------------------------------------------------------------------->

A runtime env uses a VM and it converts the high level code into machine readable code.
Earlier, every browser uses many other engines.
--------------------------------------------------------------------------------------------------------->

Why Node.js ?
=> Node.js is Non-Blocking I/O.
=> Singlt-threaded with event loop (only one thread is used and kept busy all the time.)
=> Asynchronous (Its faster than synchronous)
{It means it just makes request ot the server and then looks for the another request, without looking for the next state of the process.}
--------------------------------------------------------------------------------------------------------->

Node,Js Event Loop :
[! [ JS EVENT LOOP ](https://i.stack.imgur.com/BTm1H.png)] 
--------------------------------------------------------------------------------------------------------->

Thread is the smallest unit to which a process can be break into.
Thread has its own stack to store the state and it uses the same memory as in case of multi-tasking.

--------------------------------------------------------------------------------------------------------->

Node Module System :-
-> OS
-> fs
-> events
-> http

--------------------------------------------------------------------------------------------------------->

GLOBAL FUNCTIONS IN NODE :-

setTimeOut()
clearTimeOut();
setInterval();
clearInterval();

----------------------------------------------------------------------------------------------------------->

http is a stateless protocol.
Its a PPP model. (Per code or port Per protocol Per process Protocol)

----------------------------------------------------------------------------------------------------------->
