function trow(tagname){
    var tr=document.createElement(tagname);
    return tr;
}
function tbhead(tagname1,content){
    var th=document.createElement(tagname1);
    th.innerHTML=content;
    return th;
}
function tdata(tagname2,content2){
    var td=document.createElement(tagname2);
    td.innerHTML=content2;
    return td;
}
var h1=document.createElement("h1");
h1.innerHTML="PAGINATION"
document.body.append(h1)

const xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
xhr.send();
xhr.responseType="json";
xhr.onload =function displayResult(){
    var details = xhr.response;
   
    function foo(x){
        var b=10;
        var table=document.createElement("table");
        var tr1=trow("tr");
        var tr2=trow("tr");
        var th1=tbhead("th","ID")
        var th2=tbhead("th","NAME")
        var th3=tbhead("th","EMAIL")
        tr1.append(th1,th2,th3);
        table.append(tr1);

        for(var i=(x-1)*b;i<(x*b);i++){ 
            var tr2=trow("tr") 
            th4=tdata("td",`${details[i].id}`)
            th5=tdata("td",`${details[i].name}`)
            th6=tdata("td",`${details[i].email}`) 
            tr2.append(th4,th5,th6)
            table.append(tr2) 
           
        }
       
        var page=[1,2,3,4,5,6,7,8,9,10]
        for(let k=0; k<=page.length; k++){
            if(x===page[k]){
                table.style.visibility="hidden"
            }
            else{
                table.style.visibility="visible"
                document.body.append(table)
            }
        }
    }  

    function button(){
                var h3=document.createElement("h3");
                h3.innerHTML="CLICK THE BUTTONS"
                var div=document.createElement("div");
                div.setAttribute("class","pagination")
                div.append(h3)
                document.body.append(div)
            for(let j=1; j<=10; j++){                
                var button=document.createElement("button");
                button.innerHTML=`${j}`
                div.append(button)
                document.body.append(div)
                button.addEventListener("click",()=>{
                        foo(j)                          
                })                      
            }
    }
    button()  
}
