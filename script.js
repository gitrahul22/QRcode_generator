function genQR(){
    // let imgb=document.getElementById("imgb");
    let qrimg=document.getElementById("qr");
    let text=document.getElementById("qrtext");

    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
}