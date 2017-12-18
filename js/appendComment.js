function addComment() {

    let text = document.getElementById('user_text').value;

    let Data = new Date();

    let Year = Data.getFullYear();
    let Month = Data.getMonth();
    let Day = Data.getDay();

    let Hour = Data.getHours();
    let Minutes = Data.getMinutes();


    document.getElementById('text').append(text);
    document.getElementById('time').append(Hour+':'+Minutes);
    document.getElementById('date').append(Day+'/'+Month+'/'+Year);
    document.getElementById('comment').classList.toggle('comment');

}