$("#btnSend").click( function () {
    msg = 'From ' + $('#txtFrom').val() +
        ', Subject: ' + $('#txtSubject').val() +
        ', Message: ' + $('#txtMessage').val();

    alert(msg);

    $("#picGanderson").fadeToggle();
})