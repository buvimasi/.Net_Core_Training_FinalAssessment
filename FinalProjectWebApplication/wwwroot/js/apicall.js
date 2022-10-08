$(document).ready(
    function () {
        $('#submit').click(function () {

            var Username = $("#uname").val();
            var Password = $("#psw").val();
         
            console.log(Username);
            $.ajax({
                url: 'http://localhost:7222/api/User/authenticate',
                dataType: "json",
                type: "GET",
                contentType: "application/json",
                data: 'username=' + Username + '&password=' + Password,
                processData: false,
                success: function (data, textStatus, jQxhr) {
                    alert("User successfully authenticated")
                    if (data.Role == "Manager") {
                        window.location.replace('SoftLockPage')
                    }
                    else {
                        window.location.replace('EmployeePage')
                    }


                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert("User successfully authenticated")
                }
            });



        })

    }
);