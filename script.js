function setCookies(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires = " + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + "; path = /";
}

function getCookie(cname) {
    console.log(document.cookie)
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for(let i = 0; i<ca.length; i++) {
        let c = ca[i];

        while(c.charAt(0)=== " "){
            c = c.substring(1);
        }
        if(c.indexOf(name) === 0) {
            return c.substring(name.length);
        }
    }
    return "";
}

function checkCookies(cname) {
    let username = getCookie(cname);
    if(username != ""){
        alert("Welcome again " + username)
    }else{
        username = prompt("Please enter your name :", " ");
        if(username != " " && username != null) {
            setCookies(cname, username, 356);
        }
    }
}
