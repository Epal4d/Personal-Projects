function page_load(){
    const msgText = "#IndexPage: Page Load"

    console.log(msgText.toUpperCase())
}

async function giphyApi1()
{
    let msgText = "IndexPage: giphyApi1"

    console.log(msgText.toUpperCase())
    const userInfoDisplay = document.getElementById("userInfoDisplay");

    if (userInfoDisplay == null | userInfoDisplay ==undefined){
        msgText = "## IndexPage: userInfoDisplay not found"
        console.log(msgText)
        return false;
    }
    userInfoDisplay.innerText = msgText;

const _giphy_ApiKey = "I0M7oqswqY3bJpKrXBqcdUlBaasYa4Dd";
const _giphyApi_Url = "https://api.giphy.com/v1/gifs/search?api_key=I0M7oqswqY3bJpKrXBqcdUlBaasYa4Dd&q=&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
const _search_text = "dogs";
const _giphy_result_data_file = "./data/giphy2.json";

let _request_url = (_giphy_ApiKey.trim().length == 0)? _giphy_result_data_file : _giphyApi_Url

console.log("------Request Url------")
console.log(_request_url)
console.log("")

fetch(_request_url)
.then(res => {
    if (!res.ok) {
        throw new Error('Network Response Error');
    }
    return res.json();
})
.then(data => {
    console.log("#### giphy fetch.promise then - post data ####")
    console.log(data);

    console.log("")
    console.log("-----giphy json data as a string -----")
    console.log(JSON.stringify(data))
    console.log("")


    //const _image = data.data[0];

    console.log("---image---")
    //console.log(_image)
    console.log("")

    const giphapi_image = `<img width='200' height='150' src='$`


})







}




 