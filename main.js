//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



function findNasaPic() {
  let input = document.querySelector('input').value

  let url = `https://api.nasa.gov/planetary/apod?api_key=SH2eAYq8sd6lzK67mWZ3vJHtupZtUGljHVLI02nY&date=${input}`

  fetch (url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    console.log(data.hdurl)
    document.querySelector('img').src = data.hdurl
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    if(data.media_type === 'image'){
      document.querySelector('img').src = data.hdurl
    }else if(data.media_type === 'video'){
      document.querySelector('iframe').src = data.url
    }else{
        alert('Unsupported Media Type')
    }
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}

document.querySelector('button').addEventListener('click', findNasaPic)

    // & to link url and template literal
    // find query parameter unique to each api - this one is date
    // then template literal with the value inside

    