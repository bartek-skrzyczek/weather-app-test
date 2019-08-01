let appId = "9dba112118cf4676909c78c0a170e22e";
let units = "imperial";
let searchMethod;

function searchWeather(searchTerm) {
    fetch(`https:\\api.openweathermap.org/data/2.5/find?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}

function init(resultFromServer) {
    console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById("searchInput").value;
    if(searchTerm) searchWeather(searchTerm);
})