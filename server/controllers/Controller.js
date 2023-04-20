const {correncyConverter}= require('./correncyConverter')

const getCurrency = async (req, res) => {
  try {
    let input = req.query;
    if(input.amount==undefined){
      input.amount=1
    }
    let rate = await correncyConverter(input)
    console.log(rate);
    return res.status(200).send({ data : rate});
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const getConvert = async (req, res) => {
  try {

    let input = req.query;
      console.log(input);
    let rate = await correncyConverter(input)
    let array=[]
    for (let i = 0; i < rate.length; i++) {
      const ele = rate[i];
      array.push(ele.rate)  
    }
    array=array.sort((a,b)=>a-b)
    let max_value = array[array.length-1]*input.amount
    let min_value = array[0]*input.amount

    console.log({
      max_value,
      min_value
    });

    return res.status(200).send({max_value:max_value, min_value: min_value})

  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { getCurrency, getConvert };
