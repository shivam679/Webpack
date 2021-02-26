
var $=jQuery=require("jquery");
 var timeInterval;
$(document).ready(function(){

    
   getItem()
    $(".addBtn").click(function(){
        console.log("clicking")
        var input=$("#myInput").val()
        var timeinput=$("#userTime").val()
        console.log("input value",input)
        console.log("time value",timeinput)
        $("#myUL").append("<div class='mylist'><li>"+ input +"</li><input type='time' id='timeinput' name='appt' value='"+timeinput+"'><button class='close'>Complete</button>");
        setItem(input,timeinput)
    })

    
})
function setItem(input,timeinput){
    let list={

        item:input,
        time:timeinput
      
      };
      
      
      let store=JSON.parse(localStorage.getItem('list')) || [];
      store.push(list);
      console.log("store",store)
      let setitem=localStorage.setItem('list',JSON.stringify(store))
     
      
}
function getItem(){
    let storage = JSON.parse(localStorage.getItem('list'))
    if(storage!=null){
    let arraylen = storage.length
    for (var i = 0; i < arraylen; i++) {
       console.log("time",storage[i].time)
       var timeinput=$("#userTime").val()
        console.log("time value",timeinput)
        $("#myUL").append("<div class='mylist'><li>"+ storage[i].item +"</li><input type='time' id='timeinput' name='appt' value='"+storage[i].time+"'><button class='close'>Complete</button></div>");
       
               

    }
}
    let buttons = $(".close")
    console.log("coming here", buttons)
    console.log("Buttons ", typeof (buttons));
    console.log("Buttons length ", buttons.length);
    if(buttons.length){
    for (let j = 0; j < buttons.length; j++) {
        console.log("value of j", j)
        console.log("value of button", buttons[j])
        $(buttons[j]).on("click", function (ev) {
           
                let MainDiv = $(this).closest(".mylist")
                // console.log("removed class",$(this).index())
                console.log("removed",MainDiv);
                MainDiv.remove();
               
                storage.splice(j, 1); // delete item at index
                localStorage.removeItem("list");
                localStorage.setItem('list', JSON.stringify(storage));
                console.log("storage -", storage);
           
        })
}
    }
}

