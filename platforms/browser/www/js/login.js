$(document).ready(function() {
    
    console.log("here");
    /*#submitLogin is the id of the button to send the login iinfo*/ 
    $("#submitLogin").bind('click',function(){ // Buttons will perform function when successful
        event.preventDefault(); // Sometimes the a tag will cause the page the refresh and this prevents it 

        var userlogin = $("#userLogin").val(); // grabs values out of text box (user input)
        var password = $("#password").val();

         $.ajax({ // Ajax take URL and assign userLogin and password variable to URL link 
            url : "http://142.11.205.3/talk/login.php?login="+userlogin+"&password="+password,
            success : function(data){ // when successful do this function
                console.log(data);
                var result = JSON.parse(data);//data variable holds php information to grab our data and return something if anything is there
                 // data is being populated with the information we requested
                if(result.status == false){
                    console.log("naw");
                    Swal.fire({ // seude alert
                        title: 'Error!',
                        text: 'Wrong Creds',
                        icon: 'error',
                        confirmButtonText: 'Bet'
                      })
                }
                else if (result.status == true){
                    window.localStorage.setItem("user_id",result.id);// stores values on device to refer for later usesuch as caches
                    window.location.href = "home.html"; // directs to homepage
                }
                
            }
        });
 
    });
});