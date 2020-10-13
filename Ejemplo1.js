var app = new Vue({
  el: "main",
  data: {
    nam: '', 
    myArrayEst: [],
    estFiltrado: [],
      Rangos:{
        rg1:0

      },
    estudiante: {
      nom: null,
      ape: null,
      n1: null,
      n2: null,
      n3: null,
      nf: null,
    },
    opc: null,
  },

 
  methods: {
    agregar() {
      this.estudiante.nf = this.notafinal;
      let resultado = JSON.parse(JSON.stringify(this.estudiante));
      console.log(resultado);
      this.myArrayEst.push(resultado);
      this.limpiarCajas();
    },
    limpiarCajas() {
      this.estudiante.nom = null;
      this.estudiante.ape = null;
      this.estudiante.n1 = null;
      this.estudiante.n2 = null;
      this.estudiante.n3 = null;
      this.estudiante.nf = null;
    },
    filtrarArray () {
      switch (parseInt(this.opc)) {
        case 0:
          this.estFiltrado = this.myArrayEst.filter((est) => est.nf >= this.minimo);
          this.nam = "NOTA DESDE 0 E INFERIOR A 1.0";
          break;
          case 1:
          this.estFiltrado = this.myArrayEst.filter((est) => est.nf = 1.0 < 2.0 );
          this.nam= "NOTA DESDE 1.0 E INFERIOR A 2.0"
          break;
          case 2:
            this.estFiltrado = this.myArrayEst.filter((est) => est.nf = 2.0 < 3.0);
            this.nam= "NOTA DESDE 2.0 E INFERIOR A 3.0"
            break;
          case 3:
              this.estFiltrado = this.myArrayEst.filter((est) => est.nf = 3.0 < 4.0);
              this.nam= "NOTA DESDE 3.0 E INFERIOR A 4.0"
              break;
          case 4:
              this.estFiltrado = this.myArrayEst.filter((est) => est.nf = 4.0 <= 5.0);
              this.nam= "NOTA DESDE 4.0 HASTA 5.0"
              break;
      }
      console.log(estFiltrado);
    },
  },
  computed: {
    notafinal() {
      return (
        (parseFloat(this.estudiante.n1) +
          parseFloat(this.estudiante.n2) +
          parseFloat(this.estudiante.n3)) /
        3
      ).toFixed(2);
    },
  },
});
