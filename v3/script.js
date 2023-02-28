
document.getElementById("button").addEventListener("click", function() {
  // Change background to dancing rick
  document.body.style.backgroundImage = "url('rick.gif')"

  // Hide the heading and the button
  document.querySelector(".everything").style.display = "none"

  // Play song
  var song = document.getElementById("song")
  song.play()
})
