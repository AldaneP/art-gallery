class Classic {
  constructor(art_url) {
    this.art_url = url('https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg')
    this.frame = 'black border'
    // thing_to_set = condition ? true : false
    this.art_url ? art_url : 'default_url'
}
 }

 render() {
   let el = document.createElement('div') 
   el.style.width = '100px'
   el.style.height = '100px'
   el.style.backgroundColor = 'black'
   document.body.appendChild(el)
 }
 }
