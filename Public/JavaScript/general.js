
$(document).ready(function () {

    // Images and Icon Project
    axios.get(URL + '/' + addressApiArray[0])
    .then(function (response) {
        console.log(response);
        $('#imagePage').attr('src', response.data.sports[0].strSportIconGreen);
        $('#navBarIcon').attr('src', response.data.sports[0].strSportIconGreen);

        $('#backgroundMainImage').attr('src', response.data.sports[0].strSportThumb);
        $('#backgroundMainImage').attr('width', '75%');
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        console.log('Proccess: get images and icon soccer is done');
    });


    // Leagues List
    axios.get(URL + '/' + addressApiArray[1])
    .then(function (response) {  
        let leaguesArray = [];
        let optionsLeague = '';

        leaguesArray.push(response.data.leagues[0])
        leaguesArray.push(response.data.leagues[3])
        leaguesArray.push(response.data.leagues[4])
        leaguesArray.push(response.data.leagues[5])
        leaguesArray.push(response.data.leagues[6])

        leaguesArray.forEach(element => {
            
            let reservedWords = element.strLeague.split(' ');
            if (reservedWords.length == 3) {
                optionsLeague += 
                `<li>
                    <a class="dropdown-item link-info" id="league${element.idLeague}" href="../../Views/Leagues.html?first=${reservedWords[0]}&second=${reservedWords[1]}&third=${reservedWords[2]}&long=${reservedWords.length}">${element.strLeague}</a>
                 </li>`;
            } else {
                optionsLeague += 
                `<li>
                    <a class="dropdown-item link-info" id="league${element.idLeague}" href="../../Views/Leagues.html?first=${reservedWords[0]}&second=${reservedWords[1]}&long=${reservedWords.length}">${element.strLeague}</a>
                 </li>`;
            }
        });
        $('#leaguesLoop').append(optionsLeague);
    })
    .catch(function (error) {  
        console.log(error);
    })
    .finally(function () {  
        console.log('Proccess: get all main leagues soccer list is done');
    });

});