this.onmessage = function(obj){
    for(i = 0; i<10000; i++)
    {
        
    }
    this.postMessage({value: obj.data.sum.a + obj.data.sum.b}); 
}