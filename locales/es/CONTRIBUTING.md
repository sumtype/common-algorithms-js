# Contribuir

¡Bienvenido! Por favor, siéntase libre de contribuir con algoritmos, problemas, soluciones y traducciones.

## Algoritmos

Hay algunos pasos para agregar un algoritmo al repositorio. Recuerde que todas las contribuciones de algoritmo y prueba de JavaScript deben seguir las reglas de [JavaScript Standard Style] (https://standardjs.com/). Se sugiere el código ES6+ y las implementaciones rápidas son preferibles.

1) Cree su archivo de algoritmo de JavaScript dentro del [directorio de algoritmos de ES] (https://github.com/sumtype/common-algorithms-js/tree/master/algorithms/es), siguiendo la convención de denominación de casos de camellos utilizada. El archivo debe seguir las mismas convenciones de diseño dentro de los otros archivos de algoritmos y tener un encabezado de comentario que explique qué hace la función y qué parámetros espera.

2) Agregue la exportación de su algoritmo a [es.js] (https://github.com/sumtype/common-algorithms-js/blob/master/es.js) siguiendo las convenciones utilizadas para agregar las demás. Necesitas agregarlo a su categoría objeto y exportar. Por favor, mantenga la organización alfabetizada.

3) Cree el archivo de prueba de su algoritmo dentro del [directorio de prueba de ES] (https://github.com/sumtype/common-algorithms-js/tree/master/test/es). El archivo debe tener el mismo nombre que en el directorio de algoritmos, pero con el sufijo "Pruebas" agregado. Vea las otras pruebas para ejemplos. Su archivo de prueba debe seguir las mismas convenciones de diseño dentro de otros archivos de prueba. Debe haber pruebas para cubrir los casos de éxito. Casos de falla y borde también cuando sea apropiado.

4) Agregue su nuevo algoritmo a [README.md] (https://github.com/sumtype/common-algorithms-js/blob/master/README.md) siguiendo las mismas convenciones utilizadas para describir otros algoritmos. Si es necesaria una nueva categoría de algoritmos, agréguela siguiendo las mismas convenciones que otros.

5) **Opcional**: actualice los archivos README.md dentro de las subcarpetas en el [directorio de locales] (https://github.com/sumtype/common-algorithms-js/tree/master/locales) para incluir su nuevo algoritmo (traducido apropiadamente).

6) Si no actualizó los archivos README.md dentro de las subcarpetas en el [directorio de locales] (https://github.com/sumtype/common-algorithms-js/tree/master/locales), cree un problema que especifique Se deben agregar traducciones de locale para su nuevo algoritmo.

7) Ejecute `yarn test` o `npm test` para generar las versiones del algoritmo ES5, el archivo es5.js actualizado, los archivos de prueba ES5. Busque y solucione los errores de estilo estándar de JavaScript (si no hay ninguno, la prueba no se interrumpirá y continuará ejecutando los casos de prueba Mocha Chai). Revise las estadísticas de cobertura de su prueba. Una vez que haya superado las pruebas y haya obtenido una buena cobertura en su versión de algoritmo ES (> 95%, idealmente 100%), estará listo para realizar su solicitud de confirmación y extracción. Es posible que no sea posible una alta cobertura de prueba en el algoritmo ES5 dado el entorno de prueba y los cambios realizados durante el proceso de transpilación.

7) Cree una solicitud de extracción de su bifurcación a la rama maestra siguiendo la [plantilla de solicitud de extracción] (https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md).

## Cuestiones

Formatee los problemas de acuerdo con la [plantilla de problemas] (https://github.com/sumtype/common-algorithms-js/blob/master/ISSUE_TEMPLATE.md).

## arreglos

Formatee las solicitudes de extracción de arreglos de acuerdo con la [plantilla de solicitud de extracción] (https://github.com/sumtype/common-algorithms-js/blob/master/PULL_REQUEST_TEMPLATE.md).

## Traducciones

Para agregar una traducción, cree un nuevo directorio siguiendo las convenciones de nomenclatura de [ISO 639-1] (https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Dentro del directorio crea un archivo README.md. El archivo README.md debe imitar el archivo en inglés [README.md] (https://github.com/sumtype/common-algorithms-js/blob/master/README.md) precisamente en el formato y precisión en el contenido traducido idioma. Una vez que su traducción esté lista o haya terminado de realizar cambios en las traducciones existentes, cree una solicitud de extracción siguiendo la [plantilla de solicitud de extracción] (https://github.com/sumtype/common-algorithms-js/blob/master/ PULL_REQUEST_TEMPLATE.md) a la rama maestra desde su fork.