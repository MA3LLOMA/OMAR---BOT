import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give a place to search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°C"
const Minimum_Temperature = res.data.main.temp_min + "°C"
const Maximum_Temperature = res.data.main.temp_max + "°C"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "km/h"
const wea = `هاذا الأمر خاص بالطقس يعلمك ماهو الطقس الخاص بلبدك \n\n example: \n .weather morocco`
m.reply(wea)
} catch {
return "*حدث خطأ..*"}}
handler.help = ['weather *<place>*']
handler.tags = ['قائمة الأداوات']
handler.command = /^(climate|weather)$/i
export default handler
