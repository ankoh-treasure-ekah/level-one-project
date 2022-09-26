// all js code goes here

// CODE FOR NAV BAR DROP DOWNS WILL GO HERE
var dropdown_menu = document.getElementsByClassName('dropdown-menu');
var left_nav_buttons = document.getElementsByClassName('left-nav-buttons');
var resource_btn = document.getElementById('resource-button');
var writers_btn = document.getElementById('writers-button');
var readers_btn = document.getElementById('readers-button');

var body_container = document.getElementById('body-container');

var resource_btn_clicked = 'false';
var writers_btn_clicked = 'false';
var readers_btn_clicked = 'false';
var btn_clicked = 'false';

resource_btn.addEventListener('click', function(){
    console.log('resource btn-clicked');
    btn_clicked = 'true';
})
writers_btn.addEventListener('click', function(){
    console.log('writers btn-clicked');
    btn_clicked = 'true';
})
readers_btn.addEventListener('click', function(){
    console.log('readers btn-clicked');
    btn_clicked = 'true';
})

body_container.addEventListener('click', function(){
    if(btn_clicked == 'true'){
        btn_clicked = 'false';
    }

    else{
        console.log('hello'); 
        for(i=0; i<dropdown_menu.length; i++){
            dropdown_menu[i].className = dropdown_menu[i].className.replace(' active', "");
            dropdown_menu[i].className = dropdown_menu[i].className.replace(' currently_clicked', "");
        }
    }
})
// resource_btn.focus();

// resource_btn.addEventListener('focusin', function(){
//     console.log('out of focus')
// })

function display_dropdown(evt, target){
    

    for(i=0; i<dropdown_menu.length; i++){
        // console.log(dropdown_menu)
        var drop = dropdown_menu[i];


        for(i=0; i<dropdown_menu.length; i++){
            dropdown_menu[i].className = dropdown_menu[i].className.replace(' active', "");
        }
        // console.log(drop.className)

        for(i=0; i<dropdown_menu.length; i++){
            if (dropdown_menu[i].className.split(' ').includes(target)) {
                // console.log('true')
                if (dropdown_menu[i].className.split(' ').includes('currently_clicked')) {
                    dropdown_menu[i].className = dropdown_menu[i].className.replace(' active', "");
                    dropdown_menu[i].className = dropdown_menu[i].className.replace(' currently_clicked', "");
                }
                else{
                    for (i=0; i<dropdown_menu.length; i++) {
                        dropdown_menu[i].className = dropdown_menu[i].className.replace(' currently_clicked', "" );
                    }
                    for(i=0; i<dropdown_menu.length; i++){
                        if (dropdown_menu[i].className.split(' ').includes(target)) {
                            dropdown_menu[i].className += ' active';
                            dropdown_menu[i].className += ' currently_clicked';
                            
                        }
                    }  
    
                    
                }
                // dropdown_menu[i].style.opa = 'block';
            }
        
        }
    }
}




//function to change button border-bottom color for section 2 links

var default_target = document.getElementById('target-1');
var default_btn = document.getElementById('btn-1');

default_target.className += ' active';
default_btn.className += ' active';

function background_button(evt, aName) {

    var links = document.getElementsByClassName('target');

    var buttons = document.getElementsByClassName('overflow-item-text');
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
        buttons[i].className = buttons[i].className.replace(" active", "");
    }

    for (i = 0; i < links.length; i++) {
       if(links[i].className.split(" ").includes(aName)) {
            links[i].className += " active";
            evt.currentTarget.className += " active";
       }
    }
}


//code for accordion for section 4 starts here

var acc_button = document.getElementsByClassName('section-discovery-svg-button');
var i;
var panel = document.getElementsByClassName('panel');

//IF THIS CODE GETS DELETED AM DEAD

//DEFAULT
var default_selection = document.getElementsByClassName('default-selection');

for(i=0; i<default_selection.length; i++){
    default_selection[i].className += ' active';
    if(i==0){
        default_selection[i].className += ' currently_clicked';
    }

    if (i==1) {
        default_selection[i].style.maxHeight = default_selection[i].scrollHeight + 'px';
    }
}

for (i=0; i<acc_button.length; i++) {
    acc_button[i].addEventListener('click', function() {
        for (i=0; i<acc_button.length; i++) {
            acc_button[i].className = acc_button[i].className.replace(' active', "" );
            // acc_button[i].nextElementSibling.nextElementSibling.className = acc_button[i].nextElementSibling.nextElementSibling.className.replace(' active', "");
            acc_button[i].nextElementSibling.nextElementSibling.style.maxHeight = null;
        }

        var panel_sibling = this.nextElementSibling.nextElementSibling;

        if (this.className.split(" ").includes('currently_clicked')){

            this.className = this.className.replace(' currently_clicked', "");
            this.className = this.className.replace(' active', "");
            panel_sibling.style.maxHeight = null;
            
        }

        else {
            for (i=0; i<acc_button.length; i++) {
                acc_button[i].className = acc_button[i].className.replace(' currently_clicked', "" )
            }
            this.className += ' active';
            this.className += ' currently_clicked';
            panel_sibling.className += ' active';

            panel_sibling.style.maxHeight = panel_sibling.scrollHeight +'px';


        }

    });
}



//THIS CODE CONTAINS SCROLLBAR LOGIC FOR SECTION 2

var left_scroll_button = document.getElementById('left-marketing-btn');
var left_button_container = document.getElementById('left-button-container');

var right_scroll_button = document.getElementById('right-marketing-btn');
var right_button_container = document.getElementById('right-button-container');

var scroll_check = document.querySelector('.overflow-container');

scroll_check.scrollLeft = 0;
scroll_check.addEventListener('scroll', function(){
    console.log(scroll_check.scrollLeft)

    if(scroll_check.scrollLeft !== 0) {
        console.log("true")
        if(left_button_container.className.split(' ').includes('active')){
            console.log('true again');
        }

        else {
            console.log('no active present');
            left_button_container.className += ' active';
        }
    }

    else {
        left_button_container.className = left_button_container.className.replace(' active', "");
    }

    if(scroll_check.scrollLeft > 1986) {
        right_button_container.className += ' active';
    }

    else {
        right_button_container.className = right_button_container.className.replace(' active', "");
    }


    
});







right_scroll_button.addEventListener('click', function(){
    scroll_check.scroll ({
        left: scroll_check.scrollLeft + 249,
        behavior: "smooth"
    });
});


left_scroll_button.addEventListener('click', function(){
    scroll_check.scroll({
       left: scroll_check.scrollLeft + -249,
       behavior: "smooth" 
    });
});
