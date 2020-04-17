const request=require('request')
const covid=(country,callback)=>{
    const url='https://covid19restapi.herokuapp.com/country?countryname='+country

    request({url,json:true},(error,data)=>{
        if(error){
            callback('please check your net connection and try again',undefined)
        }
        else if(data.body===undefined){
            callback('you did not enter a country.please choose again',undefined)
        }
        else{
            callback(undefined,{
                countryName:data.body.countryName,
                total:data.body.total,
                death:data.body.death,
                recovered:data.body.recovered,
                active:data.body.active
            })
        }
    })
}

module.exports=covid
