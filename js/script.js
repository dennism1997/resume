/**
 * Created by dennis on 05-11-16.
 */

$(document).ready(function () {
    applyClickEvent();
    addScores();
    fillTable();
    applyNavigationForPhone();
    applyStickyNavigation();
});

function addScores() {
    $(".score-1").append(
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>");

    $(".score-2").append(
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>");

    $(".score-3").append(
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>");

    $(".score-4").append(
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue-transparant.svg\"\>");

    $(".score-5").append(
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>" +
        "<img width=\"20\" src=\"resources/images/star-blue.svg\"\>");
}

function fillTable() {
    $("#experience-table").find("tr:last").after(
        "<tr><th><span>2015 - Present</span></th><th><span>Bachelor Computer Science <br>Delft University of Technology (TU Delft)</span></B></th></tr>" +
        "<tr><th><span>2012 - 2015</span></th><th><span>Pre-University Education (VWO)<br>Oostvaarders College, Almere</span></B></th></tr>"
    );
}

function applyClickEvent() {
    $('a').on('click', function (e) {
        e.preventDefault();

        if ($($.attr(this, 'href')).length > 0) {
            $('html, body').animate(
                {
                    scrollTop: $($.attr(this, 'href')).offset().top + 1
                }, 600);
        }
        return false;
    });
}

function applyNavigationForPhone() {
    $('.navbar li a').click(function (event) {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    });
}

function applyStickyNavigation() {
    lnStickyNavigation = $('#about').offset().top + 20;
    about = $('#about');
    education = $('#education');
    skills = $('#skills');
    experience = $('#experience');
    contact = $('#contact');

    $(window).on('scroll', function () {
        stickyNavigation();
        activePill();
    });

    stickyNavigation();
    activePill();
}

function stickyNavigation() {
    var menuTop = $(window).height() * 0.088;
    if ($(window).scrollTop() > lnStickyNavigation - 20) {
        $('#menu').css({'top': menuTop});
        $('#menu').css({'position': 'fixed'})
    }
    else {
        $('#menu').css({'top': $('#about').offset().top + menuTop});
        $('#menu').css({'position': 'absolute'})
    }
}

function activePill() {
    var scrollBottom = $(window).scrollTop();
    $("li").removeClass('pill-selected');


    if (scrollBottom > contact.offset().top) {
        $('#contact-anchor').addClass('pill-selected')
    } else if (scrollBottom > experience.offset().top) {
        $('#experience-anchor').addClass('pill-selected')
    } else if (scrollBottom > skills.offset().top) {
        $('#skills-anchor').addClass('pill-selected')

    } else if (scrollBottom > education.offset().top) {
        $('#education-anchor').addClass('pill-selected')

    } else if (scrollBottom > about.offset().top) {
        $('#about-anchor').addClass('pill-selected')

    }
}