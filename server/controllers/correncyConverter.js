const { converter } = require("./converte");
module.exports. correncyConverter = async (props)=>{
    let { from, to, amount } = props;
    let ans = [];

    let urlList = [
      {
        url: `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
        source: "https://www.frankfurter.app",
        no: 1,
      },
      {
        url: `https://api.fastforex.io//convert?from=${from}&to=${to}&amount=${amount}&api_key=9469c48bd8-238df37260-rtbftx`,
        source: "https://console.fastforex.io",
        no: 2,
      },
      {
        url: `https://api.getgeoapi.com/v2/currency/convert?api_key=5b836c9054379b07b7152d3f75b080875917be8a&from=${from}&to=${to}&amount=${amount}&format=json`,
        source: "https://api.getgeoapi.com",
        no: 3,
      },
    ];
    for (let i = 0; i < urlList.length; i++) {
      let ele = urlList[i];
      let data = await converter(ele.url);
      let value = [];

      if (ele.no === 1) {
        switch (to) {
          case "INR":
            value = data.rates.INR;
            value=value/amount;
            break;
          case "KRW":
            value = data.rates.KRW;
            value=value/amount;
            break;

          case "USD":
            value = data.rates.USD;
            value=value/amount;
            break;

          case "EUR":
            value = data.rates.EUR;
            value=value/amount;
            break;

          case "CNY":
            value = data.rates.CNY;
            value=value/amount;
            break;

          default:
            break;
        }

      }
       else if (ele.no === 2) {
        switch (to) {
            case "INR":
              value = data.result.INR;
              value=value/amount;
              break;
            case "KRW":
              value = data.result.KRW;
              value=value/amount;
              break;
  
            case "USD":
              value = data.result.USD;
              value=value/amount;
              break;
  
            case "EUR":
              value = data.result.EUR;
              value=value/amount;
              break;
  
            case "CNY":
              value = data.result.CNY;
              value=value/amount;
              break;
  
            default:
              break;
          }
      } 
      else {
        // value= data.rates.INR.rate;
        switch (to) {
          case "INR":
            value = data.rates.INR.rate_for_amount;
            value=value/amount;
            break;
          
          case "KRW":
            value = data.rates.KRW.rate_for_amount;
            value=value/amount;
            break;
          
          case "USD":
            value = data.rates.USD.rate_for_amount;
            value=value/amount;
            break;
         
          case "EUR":
            value = data.rates.EUR.rate_for_amount;
            value=value/amount;
            break;
          
          case "CNY":
            value = data.rates.CNY.rate_for_amount;
            value=value/amount;
            break;

          default:
            break;
        }
      }
      ans.push({ rate: value, source: ele.source });
    }
    return ans
}

