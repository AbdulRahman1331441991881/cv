var i_list = document.getElementById('i_list'),
    list_li = document.getElementById('list_li'),
    i_close = document.getElementById('i_close'),
    down = document.getElementById('down'),
    text = document.getElementById('text'),
    down_1 = document.getElementById('down-1'),
    inp1 = document.getElementById('inp1'),
    inp2 = document.getElementById('inp2'),
    area = document.getElementById('area'),
    result1 = document.getElementById('result1'),
    result2 = document.getElementById('result2'),
    result3 = document.getElementById('result3'),
    header = document.getElementById('header'),
    user = navigator.userAgent.toLowerCase();
        
        

i_list.addEventListener('click', () => {
    list_li.style.display = "block";
});
i_close.addEventListener('click', () => {
    list_li.style.display = "none";
});
down.addEventListener('click', () => {
    text.style.display = "block";
    down.style.display = "none";
    down_1.style.display = "block";
    down_1.style.borderRadius = "50%";
    down_1.style.padding = "4px";
    down_1.style.fontSize = "20px";
    
});

down_1.addEventListener('click', () => {
    text.style.display = "none";
    down.style.display = "block";
  
    

    down_1.style.display = "none";
    
})
inp1.addEventListener('mouseleave', () => {
    if (inp1.value == "") {
        inp1.style.background = "#f00";
        
        result1.innerHTML = "Enter Email";

    }
    else {
        inp1.style.background = "#fff";
        result1.innerHTML = "";
    }
});
inp2.addEventListener('mouseleave', () => {
    if (inp2.value == "") {
        inp2.style.background = "#f00";
        
        result2.innerHTML = "Enter subject";

    }
    else {
        inp2.style.background = "#fff";
        result2.innerHTML = "";
    }
    
});
area.addEventListener('mouseleave', () => {
    if (area.value == "") {
        area.style.background = "#f00";
        
        result3.innerHTML = "Enter message";

    }else {
        area.style.background = "#fff";
        result3.innerHTML = "";
    }    
});

    if (user.includes('ios') || user.includes("android")) {

        down.addEventListener('click', () => {
            header.style.height = "540px";
        });
    
    } else {
        header.style.height = "400px";
    }

    if (user.includes('ios') || user.includes('android')) {
        down_1.addEventListener('click', () => {
            header.style.height = "400px";
        })
    }


