export type RealStateMainInfo = {
  companyName: string;
  infoLink: string;
  baseURL: string;
};

export type RealStateBusinessInfo = RealStateMainInfo & { email: string };

export const links_to_extract = [
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/alicante-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/valencia-provincia/todas-las-zonas/l",

  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/girona-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/tarragona-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/malaga-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/murcia-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/illes-balears-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/cadiz-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/castellon-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/granada-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/sevilla-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/bizkaia-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/toledo-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/a-coruna-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/santa-cruz-de-tenerife-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/asturias-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/almeria-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/cantabria-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/pontevedra-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/lleida-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/las-palmas-provincia/todas-las-zonas/l",

  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/cordoba-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/zaragoza-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/gipuzkoa-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/guadalajara-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/huelva-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/burgos-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/jaen-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/navarra-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/badajoz-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/valladolid-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/salamanca-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/leon-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/ciudad-real-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/la-rioja-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/albacete-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/caceres-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/ourense-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/avila-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/lugo-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/segovia-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/huesca-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/araba-alava-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/cuenca-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/zamora-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/palencia-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/teruel-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/barcelona-provincia/todas-las-zonas/l",
  // "https://www.fotocasa.es/buscar-agencias-inmobiliarias/soria-provincia/todas-las-zonas/l",
  "https://www.fotocasa.es/buscar-agencias-inmobiliarias/madrid-provincia/todas-las-zonas/l",
];
