const request = require('request') 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaXR6aWthc2MiLCJhIjoiY2tlZ3plOHF4MDVsZTJ6cGM1ejVtZGVicCJ9.ASPCjUSXfSp9ftwsQydPkA'

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect Weather service', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode