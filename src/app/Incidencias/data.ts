import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "FECHA DE REPORTE", uid: "date"},
  {name: "FECHA DE INICIO", uid: "age"},
  {name: "HORA", uid: "role"},
  {name: "ANALISTA", uid: "team"},
  {name: "TIPO DE INCIDENCIA", uid: "tipodeincidencia"},
  {name: "DESCRIPCION", uid: "descripcion"},
  {name: "SERVICIOS AFECTADOS", uid: "serviciosafectados"},
  {name: "AREAS AFECTADAS", uid: "areasafectadas"},
  {name: "IMPACTO", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Alto", uid: "alto"},
  {name: "Medio", uid: "medio"},
  {name: "Bajo", uid: "bajo"},
];

const users = [
  {
    id: 1,
    date: "20/10/2024",
    team: "Tony Reichert",
    role: "1:00",
    status: "alto",
    age: "19/10/2024",
    email: "1",
    tipodeincidencia: "Fallo en la zona dns",
    descripcion: "",
    serviciosafectados: "aplicativos internos"
  },
  {
    id: 2,
    team: "Zoey Lang",
    role: "2:45",
    status: "medio",
    email: "2",
    tipodeincidencia: "fallo de la comunicacion en replicas",
    descripcion: "",
    serviciosafectados: "firewall seguridad"
  },
  {
    id: 3,
    team: "Jane Fisher",
    role: "3:11",
    status: "alto",
    email: "3",
    tipodeincidencia: "ataque denegacion de servicio",
    descripcion: "",
    serviciosafectados: "aplicativo web"
  },
  {
    id: 4,
    team: "William Howard",
    role: "2;47",
    status: "bajo",
    email: "4",
    tipodeincidencia: "fallo de hardware",
    descripcion: "",
    serviciosafectados: "WHOIS"
  },
  {
    id: 5,
    team: "Kristen Copper",
    role: "6:11",
    status: "alto",
    email: "5",
    tipodeincidencia: "alerta de temperatura data center",
    descripcion: "",
    serviciosafectados: "replicas"
  },
  {
    id: 6,
    team: "Brian Kim",
    role: "8:15",
    email: "6",
    status: "alto",
    tipodeincidencia: "intermitencia de la red",
    descripcion: "",
    serviciosafectados: "base de datos"
  },
  {
    id: 7,
    team: "Michael Hunt",
    role: "7:37",
    status: "medio",
    email: "7",
    tipodeincidencia: "fallo de aplicaciones",
    descripcion: "",
    serviciosafectados: "RDAP"
  },
  {
    id: 8,
    team: "Samantha Brooks",
    role: "5:21",
    status: "alta",
    email: "8",
    tipodeincidencia: "lentitud en los tiempos de respuesta",
    descripcion: "",
    serviciosafectados: "servidores produccion"
  },
  {
    id: 9,
    team: "Frank Harrison",
    role: "12:23",
    status: "bajo",
    email: "9",
    tipodeincidencia: "ataqes web",
    descripcion: "",
    serviciosafectados: "correo"
  },
  {
    id: 10,
    team: "Emma Adams",
    role: "3:25",
    status: "alta",
    email: "10",
    tipodeincidencia: "habitual de peticiones",
    descripcion: "",
    serviciosafectados: "DNS"
  }
];

export {columns, users, statusOptions};