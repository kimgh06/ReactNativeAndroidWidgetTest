import axios from "axios";

export const GetBob = async date => {
  const day = new Date();
  const today = date || day.getFullYear() + ('0' + (day.getMonth() + 1)).slice(-2).toString() + ('0' + (parseInt(day.getDate())).toString()).slice(-2).toString();
  return await axios.get(`https://open.neis.go.kr/hub/mealServiceDietInfo?key=bb0f24af7fbc4bc896e2be32361cb2e4&Type=json&ATPT_OFCDC_SC_CODE=F10&SD_SCHUL_CODE=7380292&MLSV_YMD=${today}`)
    .then(e => {
      return e.data['mealServiceDietInfo'][1]['row']
    }).catch(e => {
      console.log(e)
      return null;
    });
}