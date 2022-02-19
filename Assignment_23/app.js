var id = '';
//id's 
var men = ['#men1', '#men2', '#men3', '#men4']
var women = ['#women1', '#women2', '#women3', '#women4']
var kids = ['#kids1', '#kids2', '#kids3', '#kids4']


//drop men
var dragOverMen = (event) => {
    event.preventDefault();
}
var dropMen = (event) => {
    var itemDropped = document.querySelector(id)
    for (i = 0; i < men.length; i++) {
        if (id == men[i]) {
            event.target.append(itemDropped)
            event.preventDefault();
        }
    }

}



//drop kids
var dragOverKids = (event) => {
    event.preventDefault();
}
var dropKids = (event) => {
    var itemDropped = document.querySelector(id)
    for (i = 0; i < kids.length; i++) {
        if (id == kids[i]) {
            event.target.append(itemDropped)
            event.preventDefault();
        }
    }
}




//drop women
var dragOverWomen = (event) => {
    event.preventDefault();
}
var dropWomen = (event) => {
    var itemDropped = document.querySelector(id)
    for (i = 0; i < women.length; i++) {
        if (id == women[i]) {
            event.target.append(itemDropped)
            event.preventDefault();
        }
    }
}




//item drag
var drag = (event) => {
    id = '#' + event.target.getAttribute('id');
    console.log(id)
}