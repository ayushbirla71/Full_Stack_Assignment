const axios= require("axios")

module.exports. converter = async (url)=>{
    let {data} = await axios.get(url)
    return data
}