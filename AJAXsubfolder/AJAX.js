//jQuery ready function
//jQuery supports AJAX which calls the server
$(() => {
    //create an instance of a user in JSON
    //columns don't need to be in the same order as what is in the console
    //need to turn this javascript object into JSON which is
    //what this code is called outside of javascript, so the keys
    //have to have "" around them - do this in the data: below
    var user = {
        id: 0,
        username: "zz",
        password: "xx",
        firstname: "xx",
        lastname: "xx", 
        phone: "555-555-5555",
        email: "xx@yahoo.com",
        isReviewer: true,
        isAdmin: true
    };
    //add new user to database table by calling AJAX and passing in 
    //a JSON object in curly braces
    //finsih the AJAX call with done and fail
    $.ajax({
        //key value pairs method is POST(add) to url ...users
        //new user data and 
        method: "POST", 
        url: "http://localhost:62513/api/users",
        //puts strings on all the user instance keys above
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        //done gets called whent the AJAX call is successful
        //and we can reads the updated database with new user instance
        //fail gets called when the AJAX call fails
        //res is a variable for resolved and err is for error
        .done(res => {
            console.log(res);
            getAll();
        })
        .fail(err => {
            console.error(err);
        });
    //AJAX calls are not attached to an HTML statement - just need $.
    //this reads my PRS database from my server and is done asynchronously
    //JAVAScript code is still running
    //when the data comes back from the server(done), 
    //display in a variable users which is a function
    //that we can do something on (console.log)
    //this gets data from the users controller 
    //which displays all the users
    //if we only want one user users/1
    const getAll = () => {
    $.getJSON("http://localhost:62513/api/users")
        .done(users => {
            console.log(users);
        });//need semicolon here because it is the end of a statement
   
    }
    console.log("after the getJSON call");
})