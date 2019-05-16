class Classic {
  constructor(art_url) {
    this.frame = 'black-border'
    this.art_url ='https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'

}

 render() {
   let el = document.createElement('div')
   el.style.width = '100px'
   el.style.height = '100px'
   div.style.border = '2px solid black'
   document.body.appendChild(el)
 }
}

// render() {
//   let img = new image()
//   div.style.backgroundImage = url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg')
//   )

var art1 = new Classic ("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")

class Meme {
  constructor(art_url) {
    this.frame = 'blue-border'
    this.art_url ='https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
}

render() {
  let el = document.createElement('div')
  el.style.width = '100px'
  el.style.height = '100px'
  el.style.backgroundColor = 'black'
  document.body.appendChild(el)
}
}

var meme1 = new Meme('http://iO.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg')
meme1.render()
