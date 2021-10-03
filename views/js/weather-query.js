$(function(){
    $.ajax({
        method: "GET",
        url: "https://api.data.gov.sg/v1/environment/2-hour-weather-forecast"
        })
    .done((data) => {
        let forecast = ""

        if (data || Object.keys(data['area_metadata']).length === 0 || Object.keys(data['items']).length === 0) {
            $('#location-menu').append(`<option value="-">-</option>`)
            forecast = "No forecast found."
            $("#forecast").text(`${forecast}`)
        } else { 
            for (let i = 0; i < data['area_metadata'].length; ++i) {
                $('#location-menu').append(`<option value="${data['area_metadata'][i]['name']}">${data['area_metadata'][i]['name']}</option>`)
            }

            let getWeatherForecast = () => {
                for (let i = 0; i < data['items'][0]['forecasts'].length; ++i) {
                    if ($("#location-menu option:selected").text() == data['items'][0]['forecasts'][i]['area']) {
                        forecast = data['items'][0]['forecasts'][i]['forecast']
                    }
                }
            }
            getWeatherForecast()
            $("#forecast").text(`${forecast}`)

            $('select[name="location-menu"]').change((event) => {
                event.preventDefault();
                getWeatherForecast()
                $("#forecast").text(`${forecast}`)
            })   
        }
    })

})