$(function(){
    $.ajax({
        method: "GET",
        url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
        })
    .done((data) => {
        for (let i = 0; i < data['area_metadata'].length; ++i) {
            $('#location-menu').append(`<option value="${data['area_metadata'][i]['name']}">${data['area_metadata'][i]['name']}</option>`)
        }
        let getWeatherData = () => {
            let forecast = ""
            for (let i = 0; i < data['items'][0]['forecasts'].length; ++i) {
                if ($("#location-menu option:selected").text() == data['items'][0]['forecasts'][i]['area']) {
                    forecast = data['items'][0]['forecasts'][i]['forecast']
                }
            }
            return $("#forecast").html(`${forecast}`)
        }
        getWeatherData()
        $('select[name="location-menu"]').change((event) => {
            event.preventDefault();
            getWeatherData()
        })
    })

})