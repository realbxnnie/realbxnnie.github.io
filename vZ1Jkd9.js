console.info("[B] [O] [N] [N] [I] [E]")
console.log("Inspired by Enderman's Website")

var isAudioPlaying = false
var currentPage = "About"

var pages = ["About", "Socials", "Projects"]
document.title = "realbxnnie - " + currentPage

document.getElementById("button" + currentPage).style.backgroundColor = "rgba(79, 0, 140, 0.5)"

for (let i = 0; i < pages.length; i++) {
    page1 = pages[i]
     if (page1!==currentPage) {
        document.getElementById(page1).hidden = true
     }
  };


function redirect(page) {
  if (isAudioPlaying === true) {
    if (currentPage !== page) {
        document.getElementById("mainframe").style.opacity = 0
    document.getElementById("mainframe").style.filter = "blur(8px)"
    document.getElementById("button" + page).style.backgroundColor = "rgba(79, 0, 140, 0.5)"
    document.getElementById("button" + page).style.fontWeight = "bold"
    currentPage = page
    setTimeout(() => {
        document.getElementById(page).hidden = false
        document.title = "realbxnnie - " + currentPage
        document.getElementById("pageName").textContent = currentPage
        for (let i = 0; i < pages.length; i++) {
        page1 = pages[i]
         if (page1!==page) {
          document.getElementById(page1).hidden = true
          document.getElementById("button" + page1).style.backgroundColor = "rgb(133, 0, 234)"
          document.getElementById("button" + page1).style.fontWeight = "normal"
         }
        };

        document.getElementById("mainframe").style.opacity = 1
        document.getElementById("mainframe").style.filter = "blur(0px)" 
   }, 100)
    }
}
}

function main() {
    document.getElementById("copyright").hidden = false
    document.getElementById("pages").hidden = false
    document.getElementById("mainframe").hidden = false
    document.getElementById("mainframe").style.opacity = 1
    document.getElementById("mainbutton").hidden = true
  isAudioPlaying = true
  audio = new Audio("https://ia800904.us.archive.org/15/items/tvtunes_29299/The%20Living%20Tombstone%20-%20Five%20Nights%20at%20Freddys.mp3")
  audio.loop = true
  audio.play()
}
