function createRequestObject() {
        var req;
        if(window.XMLHttpRequest){
            req = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            alert('There was a problem creating the XMLHttpRequest object');
        }
        return req;
    }
    var http = createRequestObject();
    function sendRequest() {
$.get("infocam1.php",function(data,status){
                        $("#infocam1").html(data);
                        });
                        $.get("infocam2.php",function(data,status){
                        $("#infocam2").html(data);
                        });
                        $.get("infocam3.php",function(data,status){
                        $("#infocam3").html(data);
                        });
                        $.get("infocam4.php",function(data,status){
                        $("#infocam4").html(data);
                        });
        http.open('get', 'info.php');
        http.onreadystatechange = handleResponse;
        http.send(null);
    }
    function handleResponse() {
        if(http.readyState == 4 && http.status == 200){
            var response = http.responseText;
            if(response) {
                document.getElementById("info").innerHTML = response;
                setTimeout(update,1000);
            }
        }
    }
    function update() {
        sendRequest();
    }
