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
        'error' : (req, err) => 
        {
            console.log(`Request: ${JSON.stringify(req)}`);
        }
    });
});

const updateDadJoke = joke => {
    $('.joke-box').html(joke);
}