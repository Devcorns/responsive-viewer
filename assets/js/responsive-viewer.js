var selDevVar = document.getElementById("select-device");

selDevVar.addEventListener("change",function(e) {
    e.preventDefault();
    selDevFnc(e.target.value);

});

function selDevFnc(dev) {
    // console.log(dev);
    switch(dev) {
        case "6s":
        console.log(dev)
        setWidth(320,'auto');
    }
}

setWidth = function(w,h) {
    selIframe = document.querySelector("iframe");

    console.log(selIframe,w,h);
    selIframe.style.width = w+'px';
    selIframe.style.height = '500px'; 
    

};