//always have developer tools open and on console 
//use jQuery to read users from datasbasae with getJSON, 
//stoer them in a vairalbe, and use that variable to render 
//the list of users on teh html page
//put getJSON in a functionthat we can call
//put users in a table using Bootstrap sytling

const baseurl = "http://localhost:62513/api"

const getAll = () => {
    $.getJSON(`${baseurl}/users`)
        //all data returned from getjson users is stored in res if successful
        .done(res => {//res is resolved
            console.log(res);//displays all data to the console
            display(res);//puts all data in a table
        });
    }

const display = (users) => {
        let tbody = $("tbody");
        tbody.empty();
            for(let user of users) {
                let tr = $("<tr></tr>");
                let tdId = $(`<td>${user.id}</td>`);
                let tdusername = $(`<td>${user.username}</td>`);
                let tdname = $(`<td>${user.firstname} ${user.lastname}</td>`);
                let tdphone = $(`<td>${user.phone}</td>`);
                let tdemail = $(`<td>${user.email}</td>`);
                let tdreviewer = $(`<td>${user.IsReviewer}</td>`);
                let tdadmin = $(`<td>${user.IsAdmin}</td>`);
                tr.append(tdId)
                .append(tdusername)
                .append(tdname)
                .append(tdphone)
                .append(tdemail)
                .append(tdreviewer)
                .append(tdadmin);
                tbody.append(tr);
            }
}
getAll();


       