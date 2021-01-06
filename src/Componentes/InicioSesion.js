import React, { Component } from "react";

class IniciarSesion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lista: []
    };
  }

  getDatos(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }

  enviarDatos = () => {
    fetch("https://localhost:44362/weatherforecast")
      .then((response) => response.json())
      .then((listaJson) => this.setState({ lista: listaJson }));

    //aqui enviaria el post al api
    console.log(this.state);
  };

  render() {
    const { email } = this.state;
    return (
      <form>
        <div id="div_inicio">
          <div>
            <label>Ingrese su correo</label>

            <input
              onChange={(ev) => {
                this.getDatos(ev.target.value, "email");
              }}
              type="email"
              placeholder="ejemplo@algo.com"
              value={email}
            />
          </div>
          <div>
            <label>Ingrese su contraeña</label>

            <input
              onChange={(ev) => {
                this.getDatos(ev.target.value, "password");
              }}
              type="password"
              placeholder="*****"
              value={this.state.password}
            />
          </div>

          <input
            onClick={this.enviarDatos}
            type="submit"
            value="Iniciar Sesión"
          />
        </div>
      </form>
    );
  }
}

export default IniciarSesion;
