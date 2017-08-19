let SkillType = {
    language: 0,
    Ttool: 1
};

class Skill {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    toHtml() {
        return ('<li class="skillItem"><span class="skillItemName">' + this.name + '</span></li>');
    }
}

let list = [
    new Skill("Java", 5),
    new Skill("CSS/Less", 4),
    new Skill("HTML", 5),
    new Skill("C++", 4),
    new Skill("JavaScript", 4),
    new Skill("TypeScript", 4),
    new Skill("Android Java", 3),
];

$(function () {
    list.forEach(function (item) {
        $('#languageList').append(item.toHtml())
    });


});

$("#nav ul li a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 300, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});