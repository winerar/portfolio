import{j as a}from"./react-Ip0OPsym.js";import{b as e}from"./react-router-RVsV2dyE.js";import{N as m}from"./react-bootstrap-BRmAU_1w.js";import"./aos-BE4DoJiq.js";import"./@remix-run-gROmB3-1.js";import"./classnames-CyWSGhIH.js";import"./dom-helpers-D3m26cvm.js";import"./prop-types-extra-BOYJxtLa.js";import"./uncontrollable-C0lcVTsp.js";import"./@babel-XUcqRoeX.js";import"./@restart-BFmHZwkL.js";import"./react-dom-BJa9VHgy.js";import"./scheduler-BF-YhwgH.js";import"./react-transition-group-CAEAKm2I.js";import"./prop-types-_2HjzhNP.js";const i=[{name:"Home",path:"#home"},{name:"About",path:"#about"},{name:"Reviews",path:"#reviews"},{name:"Blog",path:"#blog"},{name:"Contact",path:"#contact"}],w=()=>{const o=e(),r=t=>o.pathname.substring(1)===t.substring(1)||o.pathname==="/"&&t==="#home";return a.jsx(m,{className:"ms-auto flex-lg-column text-lg-center p-2 ps-5 ps-lg-2",children:i.map((t,p)=>a.jsx(m.Link,{href:t.path,active:r(t.path),children:t.name},p))})};export{w as default};