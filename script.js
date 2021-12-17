document.getElementById('btnSubmit').onclick = function(){
    if (document.getElementById('keyframes').value === "@keyframes squareTurn{\n    from{\n        transform: rotate(0deg);\n    }\n    to{\n        transform: rotate(75deg);\n    }\n}"){
        clearForm();
        document.getElementById('true').style.display = 'flex';
    } else {
        clearForm();
        document.getElementById('false').style.display = 'flex';
    }
}

function clearForm(){
    document.querySelectorAll('textarea').forEach(function(textarea){
        textarea.disabled = true;
    });
    document.getElementById('btnSubmit').style.display = 'none';
}