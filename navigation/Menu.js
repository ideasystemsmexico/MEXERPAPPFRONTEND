import { Block, Text, theme } from "galio-framework";
import { Image, ScrollView, StyleSheet } from "react-native";

import { DrawerItem as DrawerCustomItem } from "../components";
import React from "react";

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


const Logo = require("../assets/imgs/LOGOmex.png"); // Logo actualizado

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const screens = [
    { name: "Home", icon: null },
    { name: "Proyectos", icon: Proyectos },
    { name: "Compras", icon: Compras },
    { name: "Ventas", icon: Ventas },
    { name: "Contratos", icon: Contratos },
    { name: "Empresas", icon: Empresas },
    { name: "Contabilidad", icon: Contabilidad },
    { name: "Logistica", icon: Logistica },
    { name: "Producción", icon: Produccion },
    { name: "Servicios", icon: Servicio },
    { name: "Soporte tecnico", icon: Soporte },
    { name: "Inventario", icon: Inventario },
    { name: "Producto", icon: Producto },
    { name: "Presupuesto", icon: Presupuesto },
    { name: "Factura", icon: Factura },
    { name: "Administracion", icon: Administracion },
    { name: "Cliente", icon: Cliente },
    { name: "Recursos Humanos", icon: Empleados },
    { name: "Punto Venta", icon: PuntoVenta },
    { name: "Reportes", icon: Reportes },
    { name: "Rol", icon: Rol },
    { name: "Usuario", icon: Usuario },
    { name: "Configuración", icon: Configuracion },
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} style={styles.header}>
        <Image style={styles.logo} source={Logo} />
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item.name}
                icon={item.icon}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "rgba(0,0,0,0.2)",
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
            <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>
              DOCUMENTATION
            </Text>
          </Block>
          <DrawerCustomItem title="Getting Started" navigation={navigation} />
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
});

export default CustomDrawerContent;


