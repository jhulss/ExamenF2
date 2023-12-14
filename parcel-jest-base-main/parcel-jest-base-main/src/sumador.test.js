import corchetesEquilibrados from "./sumador.js";


describe("Verificar", () => {

  it("deberia devolver cadena vacia, dando a enteder que esta equilibrada", () => {
    const respuesta = new corchetesEquilibrados();
    expect(respuesta.verificarEquilibrio('')).toEqual(true);
  });

  it("deberia devolver true ya que la cadena esta equilibrada", () => {
    const respuesta = new corchetesEquilibrados();
    expect(respuesta.verificarEquilibrio('[]')).toEqual(true);
  });

  it("deberia devolver false ya que la cadena no esta equilibrada", () => {
    const respuesta = new corchetesEquilibrados();
    expect(respuesta.verificarEquilibrio('][')).toEqual(false);
  });



});


