const apiKey = "RWoKzzHJJySo1Pu7fv08Jwm0xR6KAx60";

$("#delete-btn").on("click", function(){
    $("ul").empty()
})

$("form").on("submit", async function (e) {
  e.preventDefault();

  const inputVal = $("#search-input").val()
  const gifs = await getGifs(inputVal);
  const i = Math.floor(Math.random() * gifs.length);
  const gifSrc = gifs[i].images.downsized.url;
 
  $("ul").append(`<li><img src=${gifSrc} alt=${inputVal}></img></li>`)
  $("#search-input").val("")
});

async function getGifs(query) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: apiKey, q: query },
  });
  return res.data.data;
}
