$( function () {
    let user = $('#user');
    let pass = $('#pass');
    let submit = $('#submit');
    submit.click(function () {
        $.post('/login', {user:user.val(),pass:pass.val() }, function (data) {
            console.log('submit');
            if (data.status==='found') {
                console.log('success');
                window.location.href = "http://localhost:3100/"
                sessionStorage.setItem('name',data.name);

            }
            else {
                console.log('no success');
            }
        })
    })
})
