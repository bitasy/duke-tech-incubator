var data = [
        {
            "title": "Fake News",
            "description": "Using sentiment analysis to check for partisan language",
            "founder": "Brian Nieves",
            "mentor": "Jun Yang"
        },
        {
            "title": "Cake Finder",
            "description": "Find the closest place on campus to you that is selling cake",
            "founder": "Elizabeth Chiu",
            "mentor": "Jun Yang"
        },
        {
            "title": "Database Project",
            "description": "Create a database of technical projects",
            "founder": "Sherry Feng",
            "mentor": "Jun Yang"
        },
        {
            "title": "Sound New Zealand",
            "description": "Change any sentence to read as if you have a Kiwi accent",
            "founder": "Jiffrey Li",
            "mentor": "Jun Yang"
        },
    ];

function showAll(){
    document.getElementById("fake-news").style.display= 'block';
    document.getElementById("database").style.display= 'block';
    document.getElementById("jiffrey").style.display= 'block';
}
function hide1(){
    document.getElementById("fake-news").style.display= 'block';
    document.getElementById("database").style.display= 'none';
    document.getElementById("jiffrey").style.display= 'none';
}
function hide2(){
    document.getElementById("fake-news").style.display= 'none';
    document.getElementById("database").style.display= 'block';
    document.getElementById("jiffrey").style.display= 'none';
}
function hide3(){
    document.getElementById("fake-news").style.display= 'none';
    document.getElementById("database").style.display= 'none';
    document.getElementById("jiffrey").style.display= 'block';
}