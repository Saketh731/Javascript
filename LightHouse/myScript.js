function create(){
    let i = 0;
    let ptag = document.createElement('p');
    ptag.innerHTML = "Hello "+i;
    ptag.id = "ptag1";
    document.body.appendChild(ptag);
    for(i = 0; i < 100000; i++){
        console.log(i);
        document.getElementById('ptag1').innerHTML = "Hello "+i;
    }
   
}
