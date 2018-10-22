// const api = '`https://api.foursquare.com/v2/venues/explore?client_id=P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD&client_secret=1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT&v=20180323&limit=2&ll=37.7007467,-121.8934768&query=burger`'
// const api = 'https://api.foursquare.com'
// const clientID = 'P51OPZBHXUNV55SMH1K3G0FI5TAQAI3I0A5UAPUK4UETVLLD'
// const clientSecret = '1MDR0MSHV1L4T01OHEXYEE1CQ2XLN5M2Y4LT42H2EGPQETLT'
// const limit = 10
// const latLng = `37.7007467,-121.8934768`
// const query = 'burger'


// export const getAll = () => {
//     fetch(`${api}/v2/venues/explore?client_id=${clientID}&client_secret=${clientSecret}&v=20180323&limit=${limit}&ll=${latLng}&query=${query}`)
//     .then(res => res.json())
//     .then(data => data.response)
//     .catch(function(err) {
//         console.log(err)
//     });
// }