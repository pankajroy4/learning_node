/* 
Steps needed for event based programming:
===============================================
step1: import the "events" module.
step2: Create an instance of "EventEmitter" class.
step3: Using that instance set up an event and its listener function by calling the method on() or addListener(). The first argument in 
       the on() is the event_name as string and the second is the event handler fucntion of the event.
       It means: Register for the event using the method addListener() or on() of the EventEmitter class.

step4: Finally using the sane instance of EventEmitter class call the emit() method, which fires the event and causes the handler function to run.
 

*/