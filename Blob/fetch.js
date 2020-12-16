let objUrl;
document.getElementById('fetch').onclick = async function(e){
    e.preventDefault();
    let responsePromise = await fetch('https://jsonplaceholder.typicode.com/todos');
    let blob = await responsePromise.blob();
    //let blob1 = new Blob([blob], {type: "application/json"});
    objUrl = URL.createObjectURL(blob);
    console.log(objUrl);
    document.getElementById('anchor').href = objUrl;
}


document.getElementById('fetch2').onclick = function(e){
    e.preventDefault();
    let request = new Request(objUrl);
    fetch(request)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
}

document.getElementById('postResource').onclick = function(e){
    e.preventDefault();
    let obj = {
        userID: 1,
        title: 'Saketh task',
        //id: 2,
        completed: true
    };
    let request = new Request(objUrl,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {"Content-type":"application/json; charset=UTF-8"}
    });
    fetch(request)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(){
        console.log("Failed To Fetch"); 
    })
}
