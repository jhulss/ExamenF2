class corchetesEquilibrados{
  
  verificarEquilibrio(cadena) {
    if (cadena === '') {
      return true;
    }
    
    if (cadena.length === 2 && cadena[0] === '[' && cadena[1] === ']') {
      return true;
    }
  }
  


}

export default corchetesEquilibrados;