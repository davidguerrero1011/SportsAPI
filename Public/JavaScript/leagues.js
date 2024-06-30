$(document).ready(function () {

    
    

    // Images and Icon Project
    axios.get(URL + '/' + addressApiArray[0])
    .then(function (response) {
        console.log(response);
        $('#imagePage').attr('src', response.data.sports[0].strSportIconGreen);
        $('#navBarIconDetail').attr('src', response.data.sports[0].strSportIconGreen);

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
    
    // Se obtiene parametros desde la url
    let url = document.URL;
    let getParameters = url.substring(url.indexOf('?') + 1, url.length);
    let delimeter = '&';
    
    if (getParameters.indexOf('#') != -1) {
        getParameters = getParameters.slice(0, getParameters.indexOf('#'));
    }

    let arrayParams = getParameters.split(delimeter);
    for (let i = 0; i < arrayParams.length; i++) {
        eval(arrayParams[i].substring(0, arrayParams[i].indexOf('=') + 1) + "\"" + arrayParams[i].substring(arrayParams[i].indexOf('=') + 1, arrayParams[i].length) + "\"");        
    }

    let reserveWordsLength = arrayParams[3].split('');
    let lengthWords = parseInt(reserveWordsLength[5]);
    
    let path = '';
    if (lengthWords == 3) {
        path = `${first}%20${second}%20${third}`;
        $('#titleLeagueDetail').append(`${first} ${second} ${third}`);
        $('#titleLeague').append(`${first} ${second} ${third}`);
    } else {
        path = `${first}%20${second}`;
        $('#titleLeagueDetail').append(`${first} ${second}`);
        $('#titleLeague').append(`${first} ${second}`);
    }


    // Ligue's info detail
    console.log(`${URL}/${addressApiArray[2]}${path}`);
    axios.get(`${URL}/${addressApiArray[2]}${path}`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log('Proccess: get detail information leagues');
    });

});
