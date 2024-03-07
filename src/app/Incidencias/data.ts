import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "FECHA DE REPORTE", uid: "name"},
  {name: "FECHA DE INICIO", uid: "age"},
  {name: "HORA", uid: "role"},
  {name: "ANALISTA", uid: "team"},
  {name: "TIPO DE INCIDENCIA", uid: "tipodeincidencia"},
  {name: "DESCRIPCION", uid: "descripcion"},
  {name: "SERVICIOS AFECTADOS", uid: "servicios afectados"},
  {name: "AREAS AFECTADAS", uid: "areas afectadas"},
  {name: "IMPACTO", uid: "impacto"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const users = [
  {
    id: 1,
    team: "Tony Reichert",
    role: "1:00",
    status: "active",
    age: "29",
    email: "1",
    tipodeincidencia: "hdfg"
  },
  {
    id: 2,
    team: "Zoey Lang",
    role: "2:45",
    status: "paused",
    age: "25",
    email: "2",
  },
  {
    id: 3,
    team: "Jane Fisher",
    role: "3:11",
    status: "active",
    age: "22",
    email: "3",
  },
  {
    id: 4,
    team: "William Howard",
    role: "2;47",
    status: "vacation",
    age: "28",
    email: "4",
  },
  {
    id: 5,
    team: "Kristen Copper",
    role: "6:11",
    status: "active",
    age: "24",
    email: "5",
  },
  {
    id: 6,
    team: "Brian Kim",
    role: "8:15",
    age: "29",
    email: "6",
    status: "Active",
  },
  {
    id: 7,
    team: "Michael Hunt",
    role: "7:37",
    status: "paused",
    age: "27",
    email: "7",
  },
  {
    id: 8,
    team: "Samantha Brooks",
    role: "5:21",
    status: "active",
    age: "31",
    email: "8",
  },
  {
    id: 9,
    team: "Frank Harrison",
    role: "12:23",
    status: "vacation",
    age: "33",
    email: "9",
  },
  {
    id: 10,
    team: "Emma Adams",
    role: "3:25",
    status: "active",
    age: "35",
    email: "10",
  }
];

export {columns, users, statusOptions};