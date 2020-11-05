//jQuery ready function
//jQuery supports AJAX which calls the server
$(() => {
    //AJAX calls are not attached to an HTML statement - just need $.
    //this reads my PRS database from my server and is done asynchronously
    //JAVAScript code is still running
    //when the data comes back from the server(done), 
    //display in a variable users which is a function
    //that we can do something on (console.log)
    //this gets data from the users controller 
    //which displays all the users
    //if we only want one user use /1
    $.getJSON("http://localhost:62513/api/users")
        .done(users => {
            console.log(users);
        });//need semicolon here because it is the end of a statement
    console.log("after the getJSON call");
})