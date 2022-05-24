let OutModal = document.querySelector('.OutModalWindow');
let Modal = document.querySelector('.ModalWindow');


let OpenModal = document.querySelectorAll('.OpenModalWindow');
let CloseWindow = document.querySelector('.CloseModalWindow');

OpenModal.forEach((OpenModalWindow) => {
    OpenModalWindow.addEventListener('click', (e) => {
        e.preventDefault();
        OutModal.classList.add('active');
        Modal.classList.add('active');
    })
});




CloseWindow.addEventListener('click', () => {
    OutModal.classList.remove('active');
    Modal.classList.remove('active');
});

document.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target == OutModal) {
        OutModal.classList.remove('active');
        Modal.classList.remove('active');
    }
});



document.querySelector('.SubmitForm').onclick = (e) => {

const http = require("http");
const fs = require("fs");

http.createServer(async (request, response) => {
    if (document.forms[0].reportValidity()) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        let Тип_угрозы = document.querySelector('#typeofthreat').value;
        let Дата = document.querySelector('#dateofthreat').value;
        let Заявитель = document.querySelector('#Applicant').value;
        let Уровень_угрозы = document.querySelector('#Threatlevel').value;

        let json =
        {
            Тип_угрозы, 
            Дата, 
            Заявитель, 
            Уровень_угрозы
        }
        Modal.classList.remove('active');
        OutModal.classList.remove('active');

        response.end(JSON.stringify(json));
    }
    else {
        fs.readFile("index.html", (error, data) => response.end(data));
    }

    

}).listen(5500, () => console.log("Сервер на порте http://localhost:5500"));}




   
    /*
    document.querySelector('.SubmitForm').onclick = (e) => {
        e.preventDefault();
        if (document.forms[0].reportValidity()) {
            let Тип_угрозы = document.querySelector('#typeofthreat').value;
            let Дата = document.querySelector('#dateofthreat').value;
            let Заявитель = document.querySelector('#Applicant').value;
            let Уровень_угрозы = document.querySelector('#Threatlevel').value;
    
            console.table({ Тип_угрозы, Дата, Заявитель, Уровень_угрозы });
    
            Modal.classList.remove('active');
            OutModal.classList.remove('active');
        }
    }
    */