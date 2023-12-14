import corchetesEquilibrados from "./sumador.js";


describe("Verificar", () => {
  it("deberia devolver cadena vacia, dando a enteder que esta equilibrada", () => {
    const respuesta = new corchetesEquilibrados();
    expect(respuesta.verificarEquilibrio('')).toEqual(true);
  });
});


