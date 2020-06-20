let button = document.getElementById('load-btn');
button.addEventListener('click', function () {
  axios.get("data.txt").then(function (response) {
    console.log(response)
    console.log(response.data)

    let resultParagraph = document.getElementById('result');
    resultParagraph.innerHTML = response.data;
  })
  console.log("Done")
})


let page2Button = document.getElementById('load-page2-btn');
page2Button.addEventListener('click', function(){
  axios.get('page2.html').then(function(response){
    let resultParagraph = document.getElementById('result');
    resultParagraph.innerHTML = response.data;
  })
})