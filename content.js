
 var timeInterval;

$(document).ready(function(){
   console.log("Welcome to content.js")
   alarm()
})
    function alarm(){
        let storage = JSON.parse(localStorage.getItem('list'))
        console.log("storage",storage)
    if(storage!=null){
    let arraylen = storage.length
    for (var i = 0; i < arraylen; i++) {
       console.log("time",storage[i].time)
       var timeinput=$("#userTime").val()
        console.log("time value",timeinput)
    
    var d = new Date();
    var time = d.getHours() + ":" + d.getMinutes();
    console.log(time);
    
    if(storage[i].time===time){
        
        confirm("please do your task"+storage[i].item)
    }
    }
    }
}
    
