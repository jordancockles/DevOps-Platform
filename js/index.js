$('#aboutButton').click(function() {  
    $('#contactButton').removeClass('opened');
    $('#adminButton').removeClass('opened');
    if ($('#aboutButton').hasClass('opened')) { $('#aboutButton').removeClass('opened'); }
    else { $('#aboutButton').addClass('opened'); }
    $('#aboutButton').addClass('inactive');
    $('#contactButton').addClass('inactive');
    $('#adminButton').addClass('inactive');
    if ($('#contactPanel').css('display') == 'block') {
        $('#contactPanel').slideToggle('slow', function(){
            $('#aboutPanel').slideToggle('slow', function(){
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else if ($('#adminPanel').css('display') == 'block') {
        $('#adminPanel').slideToggle('slow', function(){
            $('#aboutPanel').slideToggle('slow', function(){
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else {
        $('#aboutPanel').slideToggle('slow', function(){
            $('#aboutButton').removeClass('inactive');
            $('#contactButton').removeClass('inactive');
            $('#adminButton').removeClass('inactive');
        });
    }
});

$('#contactButton').click(function() {  
    $('#aboutButton').removeClass('opened');
    $('#adminButton').removeClass('opened');
    if ($('#contactButton').hasClass('opened')) { $('#contactButton').removeClass('opened'); }
    else { $('#contactButton').addClass('opened'); }
    $('#aboutButton').addClass('inactive');
    $('#contactButton').addClass('inactive');
    $('#adminButton').addClass('inactive');
    if ($('#aboutPanel').css('display') == 'block') {
        $('#aboutPanel').slideToggle('slow', function(){
            $('#contactPanel').slideToggle('slow', function(){
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else if ($('#adminPanel').css('display') == 'block') {
        console.log("You are in the contact panel button method. Detected admin panel is open")
        $('#adminPanel').slideToggle('slow', function(){
            $('#contactPanel').slideToggle('slow', function(){
                console.log("You are in the toggle contact Panel function")
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else {
        console.log("You are in the contact panel button method. Detected no panels open")
        $('#contactPanel').slideToggle('slow', function(){
            $('#aboutButton').removeClass('inactive');
            $('#contactButton').removeClass('inactive');
            $('#adminButton').removeClass('inactive');
        });
    }
});

$('#adminButton').click(function() {  
    $('#aboutButton').removeClass('opened');
    $('#contactButton').removeClass('opened');

    if ($('#adminButton').hasClass('opened')) { $('#adminButton').removeClass('opened'); console.log("Removing open class");}
    else { $('#adminButton').addClass('opened'); console.log("Adding open class") }
    $('#aboutButton').addClass('inactive');
    $('#contactButton').addClass('inactive');
    $('#adminButton').addClass('inactive');
    if ($('#aboutPanel').css('display') == 'block') {
        $('#aboutPanel').slideToggle('slow', function(){
            $('#adminPanel').slideToggle('slow', function(){
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else if ($('#contactPanel').css('display') == 'block') {
        $('#contactPanel').slideToggle('slow', function(){
            $('#adminPanel').slideToggle('slow', function(){
                $('#aboutButton').removeClass('inactive');
                $('#contactButton').removeClass('inactive');
                $('#adminButton').removeClass('inactive');
            });
        });
    }
    else {      
        $('#adminPanel').slideToggle('slow', function(){
            $('#aboutButton').removeClass('inactive');
            $('#contactButton').removeClass('inactive');
            $('#adminButton').removeClass('inactive');
        });
    }
});

$('.toolButton').click(function() {
    let thisId = this.id;
    switch(this.id) {
        case "gerrit":
            $('#gerritPanel').toggle("fold");
            break;
        case "jenkins":
            $('#jenkinsPanel').toggle("fold");
            break;
        case "sonar":
            $('#sonarPanel').toggle("fold");
            break;
        case "nexus":
            $('#nexusPanel').toggle("fold");
            break;
        case "kibana":
            $('#kibanaPanel').toggle("fold");
            break;
        case "selenium":
            $('#seleniumPanel').toggle("fold");
            break;
        case "sensu":
            $('#sensuPanel').toggle("fold");
            break;
        case "jira":
            $('#jiraPanel').toggle("fold");
            break;
        case "confluence":
            $('#confluencePanel').toggle("fold");  
            break;      
    }
});

$('body').on('click', '.close', function() {
    let thisParentId = this.parentElement.id;
    $('#'+thisParentId).toggle("fold");
});