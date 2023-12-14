class corchetesEquilibrados{
  
  verificarEquilibrio(cadena) {
    if (cadena === '') {
      return true;
    }

    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena[i];

      if (caracter === '[') {
      contador++;
      } else if (caracter === ']') {
        if (contador === 0) {
        return false;
      }
      contador--;
    }
  }

    return contador === 0;
  }
  


}

export default corchetesEquilibrados;