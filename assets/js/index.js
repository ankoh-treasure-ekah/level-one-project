// all js code goes here

//function to change button border-bottom color

function background_button(evt, aName) {

    var links = document.getElementsByClassName('target');
    var buttons = document.getElementsByClassName('overflow-item-text');
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
        buttons[i].className = buttons[i].className.replace(" active", "");
        // console.log(links[i])
    }

    for (i = 0; i < links.length; i++) {
       if(links[i].className.split(" ").includes(aName)) {
            console.log(typeof(links[i].className))
            links[i].className += " active";
            evt.currentTarget.className += " active";
       }
       else {
        console.log(typeof(links[i].className));
       }
    }
}


//code for accordion for section 4 starts here

var acc_button = document.getElementsByClassName('section-discovery-svg-button');
var i;
var panel = document.getElementsByClassName('panel');

//IF THIS CODE GETS DELETED AM DEAD

for (i=0; i<acc_button.length; i++) {
    acc_button[i].addEventListener('click', function() {
        for (i=0; i<acc_button.length; i++) {
            acc_button[i].className = acc_button[i].className.replace(' active', "" );
            console.log(acc_button[i])
            // acc_button[i].nextElementSibling.nextElementSibling.className = acc_button[i].nextElementSibling.nextElementSibling.className.replace(' active', "");
            acc_button[i].nextElementSibling.nextElementSibling.style.maxHeight = null;
            console.log(acc_button[i].nextElementSibling.nextElementSibling.className)
        }

        var panel_sibling = this.nextElementSibling.nextElementSibling;

        if (this.className.split(" ").includes('currently_clicked')){
            console.log(this.className)

            this.className = this.className.replace(' currently_clicked', "");
            this.className = this.className.replace(' active', "");
            panel_sibling.style.maxHeight = null;
            // panel_sibling.className = panel_sibling.className.replace(' active', "");
            console.log('true')
            console.log(this.className)
            
        }

        else {
            for (i=0; i<acc_button.length; i++) {
                acc_button[i].className = acc_button[i].className.replace(' currently_clicked', "" )
            }
            this.className += ' active';
            this.className += ' currently_clicked';
            console.log('false')
            panel_sibling.className += ' active';

            panel_sibling.style.maxHeight = panel_sibling.scrollHeight +'px';
            console.log("🚀 ~ file: index.js ~ line 70 ~ acc_button[i].addEventListener ~ scrollHeight", panel_sibling.scrollHeight)


        }

    });
}




