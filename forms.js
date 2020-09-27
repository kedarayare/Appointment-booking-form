
$(document).ready(function(){
    
        
    $("#submit").click(function(){
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var gender = $("#gender").val();
        var end = $('#start').val();
        console.log(phone.length)
        
        if(phone.length!=10){
            alert("The phone number you have entered is Invalid");
            document.getElementById("fname").value = fname;
            document.getElementById("lname").value = lname;
            document.getElementById("email").value = email;
            flag =1
        }
        else if(fname == lname){
            alert("First Name and Last Name cannot be same");
            flag = 1
        }
        else{
            localStorage.setItem("fname", fname);
            localStorage.setItem("lname", lname);
            localStorage.setItem("date", end);
            
            var flag = confirm("Values Entered are correct. Confirm Appointment?");
            if(flag == true){
                window.location.href="confirmed.html"
            }
            else{
                alert("You selected cancel!");
            }
        }
        
        
        
        
    })
    
})




