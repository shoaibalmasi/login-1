
//login function
function login(){
   let userName= $('#userName').val();
   let password=$('#password').val();
   // check inputs values
   if(userName==="" || password===""){
            $('#req1').css('visibility','visible');
            $('#req2').css('visibility','visible');
            $('#req4').css('visibility','visible');
            $('#req4').css('color','red');
            $('#req4').html('همه فیلدها را پر کنید');
   }else{
    $('#req1').css('visibility','hidden');
    $('#req2').css('visibility','hidden');
    let userInfo={
        userName:userName,
        password:password
       }

       // ajax to send user info to server
        $.ajax({
            type: "POST",
            url: "/login",
            data: JSON.stringify(userInfo) ,
            success: function (response) {
                $('#req4').css('visibility','visible');
               if(response==='true') {
                   console.log(response);
                   
                $('#req4').html('ورود موفقیت آمیز');
                $('#req4').css('color','green');
               }else{
                $('#req4').html('کاربری با این مشخصات وجود ندارد');
                $('#req4').css('color','red');
               }
            },
            error: function(err){
                console.log(err);   
            }
        });
   }
   
}