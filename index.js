const ContainerQRCODE = document.getElementById("containerQR");
const QRCODEImg = document.getElementById("qrcodeIMG");
const QrInput = document.getElementById("inputSearch");
const InformationMoment = document.getElementById("informationMoment");

ContainerQRCODE.classList.remove("showed");

function generateQR(){
    if(QrInput.value.trim() == "") return;
    QRCODEImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$" + QrInput.value;
    QRCODEImg.addEventListener('load', () => {
        ContainerQRCODE.classList.add("showed");
        InformationMoment.innerText = "QRCode gerado!";
    });
};

QrInput.addEventListener('keydown', (event) => {
    if(event.keyCode == '13') generateQR();
});