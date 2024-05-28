import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

const Proyectos = require("../assets/imgs/proyecto.png");
const Compras = require("../assets/imgs/compras.png");
const Ventas = require("../assets/imgs/ventas.png");
const Contratos = require("../assets/imgs/contratos.png");
const Empresas = require("../assets/imgs/empresas.png");
const Contabilidad = require("../assets/imgs/contabilidad.png");
const Logistica = require("../assets/imgs/logistica.png");
const Produccion = require("../assets/imgs/produccion.png");
const Servicio = require("../assets/imgs/servicio.png");
const Soporte = require("../assets/imgs/soporte.png");
const Inventario = require("../assets/imgs/inventario.png");
const Producto = require("../assets/imgs/producto.png");
const Presupuesto = require("../assets/imgs/presupuesto.png");
const Factura = require("../assets/imgs/factura.png");
const Administracion = require("../assets/imgs/administracion.png");
const Cliente = require("../assets/imgs/cliente.png");
const Configuracion = require("../assets/imgs/configuracion.png");
const Empleados = require("../assets/imgs/empleados.png");
const PuntoVenta = require("../assets/imgs/punto_venta.png");
const Reportes = require("../assets/imgs/reportes.png");
const Rol = require("../assets/imgs/rol.png");
const Usuario = require("../assets/imgs/usuario.png");



const FlechaD = require("../assets/imgs/flechaD.png"); // Importar la flecha

class DrawerItem extends React.Component {
  state = {
    showSubmenu: false, // Estado para mostrar u ocultar el submenú
  };

  toggleSubmenu = () => {
    this.setState({ showSubmenu: !this.state.showSubmenu });
  };

  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "Proyectos":
        return (
          <Image
            source={Proyectos}
            style={{ width: 24, height: 24, tintColor: focused ? "white" : argonTheme.COLORS.ERROR }}
          />
        );
      case "Compras":
        return (
          <Image
            source={Compras}
            style={{ width: 24, height: 24, tintColor: focused ? "white" : argonTheme.COLORS.PRIMARY }}
          />
        );
      case "Ventas":
        return (
          <Image
            source={Ventas}
            style={{ width: 24, height: 24, tintColor: focused ? "white" : argonTheme.COLORS.WARNING }}
          />
        );
      case "Contratos":
        return (
          <Image
            source={Contratos}
            style={{ width: 24, height: 24}}
          />
        );
      case "Empresas":
        return (
          <Image
            source={Empresas}
            style={{ width: 24, height: 24}}
          />
        );
      case "Contabilidad":
        return (
          <Image
            source={Contabilidad}
            style={{ width: 24, height: 24}}
            />
          );
      case "Logistica":
        return (
          <Image
            source={Logistica}
            style={{ width: 24, height: 24}}
            />
          );
      case "Producción":
        return (
          <Image
            source={Produccion}
            style={{ width: 24, height: 24 }}
            />
          );
      case "Servicios":
        return (
          <Image
            source={Servicio}
            style={{ width: 24, height: 24}}
            />
          );
      case "Soporte tecnico":
        return (
          <Image
            source={Soporte}
            style={{ width: 24, height: 24}}
            />
          );
      case "Inventario":
        return (
          <Image
            source={Inventario}
            style={{ width: 25, height: 25 }}
            />
          );
      case "Producto":
        return (
          <Image
            source={Producto}
            style={{ width: 24, height: 24}}
            />
          );
      case "Presupuesto":
        return (
          <Image
            source={Presupuesto}
            style={{ width: 24, height: 24}}
            />
          );
      case "Factura":
        return (
          <Image
            source={Factura}
            style={{ width: 24, height: 24 }}
            />
          );
      case "Administracion":
        return (
          <Image
            source={Administracion}
            style={{ width: 24, height: 24 }}
            />
          );
      case "Cliente":
        return (
          <Image
            source={Cliente}
            style={{ width: 24, height: 24 }}
            />
          );   
      case "Configuración":
        return (
          <Image
            source={Configuracion}
            style={{ width: 30, height: 30 }}
            />
          );  
      case "Recursos Humanos":
        return (
          <Image
            source={Empleados}
            style={{ width: 21, height: 21}}
            />
          );
      case "Punto Venta":
        return (
          <Image
            source={PuntoVenta}
            style={{ width: 22, height: 22}}
            />
          );
      case "Reportes":
        return (
          <Image
            source={Reportes}
            style={{ width: 24, height: 24, tintColor: focused ? "white" : argonTheme.COLORS.INFO }}
            />
          );  
      case "Rol":
        return (
          <Image
            source={Rol}
            style={{ width: 24, height: 24, tintColor: focused ? "white" : argonTheme.COLORS.INFO }}
            />
          );
      case "Usuario":
        return (
          <Image
            source={Usuario}
            style={{ width: 24, height: 24}}
            />
          );
  

      case "Getting Started":
        return (
          <Icon
            name="spaceship"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : "rgba(0,0,0,0.5)"}
          />
        );
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  renderSubmenu = () => {
    if (!this.state.showSubmenu) return null;

    return (
      <Block style={{ paddingLeft: 20 }}>
        {["Clientes", "Proveedores", "Leads"].map((submenuItem, index) => (
          <TouchableOpacity
            key={index}
            style={{ height: 40 }}
            onPress={() => this.props.navigation.navigate(submenuItem)}
          >
            <Block row middle>
              <Text
                size={14}
                color={"rgba(0,0,0,0.5)"}
              >
                {submenuItem}
              </Text>
            </Block>
          </TouchableOpacity>
        ))}
      </Block>
    );
  };

  render() {
    const { focused, title, navigation } = this.props;
    const { showSubmenu } = this.state;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block>
        <Block row style={containerStyles}>
          <TouchableOpacity
            style={{ flex: 0.9, height: 60 }}
            onPress={() =>
              title == "Getting Started"
                ? Linking.openURL(
                    "https://ideasystems.com.mx/"
                  ).catch(err => console.error("An error occurred", err))
                : navigation.navigate(title)
            }
          >
            <Block flex row middle>
              <Block middle flex={0.1} style={{ marginRight: 5 }}>
                {this.renderIcon()}
              </Block>
              <Block row center flex={0.8}>
                <Text
                  size={15}
                  bold={focused ? true : false}
                  color={focused ? "white" : "rgba(0,0,0,0.5)"}
                >
                  {title}
                </Text>
              </Block>
            </Block>
          </TouchableOpacity>
          {title === "Empresas" && (
            <TouchableOpacity
              style={{ flex: 0.1, height: 60, justifyContent: 'center', alignItems: 'center' }}
              onPress={this.toggleSubmenu}
            >
              <Image
                source={FlechaD}
                style={{ width: 14, height: 14, tintColor: focused ? "white" : argonTheme.COLORS.INFO }}
              />
            </TouchableOpacity>
          )}
        </Block>
        {title === "Empresas" && showSubmenu && this.renderSubmenu()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 2,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;

