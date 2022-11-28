# Aplicaciones

Clone el proyecto base, con:
```
git clone https://github.com/DAWFIEC/DAWM-apps.git
```

## Album de fotos

### Cliente

#### Hitos

* **`hito1`** Configuración básica de un proyecto Angular, según las instrucciones de [Angular Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html).
* **`hito2`** Incorpora una plantilla de Bootstrap en un proyecto Angular, según las instrucciones de [Angular Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html).
* **`hito3`** Usa un componente, comunicación de una vía (vista-controlador del componente) y directivas de repetición (\*ngFor), según las instrucciones de [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM/tutoriales/angular_bases.html)
* **`hito4`** TDD con Karma: directiva condicional (\*ngIf) y plantillas (ng-container), según las instrucciones de [Capítulo 04/Ejercicio05](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2004/ejercicio05)
* **`hito5`** PWA, según las instrucciones de [Angular - PWA](https://dawfiec.github.io/DAWM/tutoriales/angular_pwa.html)
* **`hito6`** Servicios, según las instrucciones de [Angular - Servicios](https://dawfiec.github.io/DAWM/tutoriales/angular_servicios.html)
* **`hito7`** TDD con Karma: Servicios, según las instrucciones de [Capítulo 04/Ejercicio06](https://github.com/DAWFIEC/DAWM/tree/main/Cap%C3%ADtulo%2004/ejercicio06)

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>        #Muévase a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
ng serve -o               #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>        #Muévase a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

## SPA

### Cliente

#### Hitos

* **`hito8`** Sitio básico con Bootstrap y componentes compartidos, según las instrucciones de [Guía 13](https://dawfiec.github.io/DAWM/guias/guia13.html).

#### Instalación y Ejecución

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>        #Muévase a la rama deseada
cd spa/clienteAngular     #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
ng serve -o               #Levante el servidor
```

#### Test

Para los hitos marcados con TDDs:

```
cd DAWM-apps              #Ingrese a la carpeta de las aplicaciones
git switch hito<N>        #Muévase a la rama deseada
cd album/clienteAngular   #Ingrese a la carpeta del proyecto
npm i                     #Instale las dependencias
npm test                  #Ejecute los tests
```

## Referencias

* head, W., Stewart, R., & Bailey, C. (2011). What to do with commit made in a detached head. Retrieved 25 November 2022, from https://stackoverflow.com/questions/7124486/what-to-do-with-commit-made-in-a-detached-head/7124513#7124513
