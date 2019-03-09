$('document').ready(() => {
    
});

$('form').on('submit', (event) => {
    event.preventDefault();
    $.ajax({
        'url' : '/dad-joke',
        'type' : 'GET',
        'success' : ({ results }) => {              
            updateDadJoke(results);
        },
        'error' : (req, error) => 
        {
            console.log("Request: "+JSON.stringify(request));
        }
    });
});

const updateDadJoke = joke => {
    $('.joke-box').html(joke);
}