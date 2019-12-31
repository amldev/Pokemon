# Instrucciones a seguir para una correcta colaboración

Para practicar con un repositorio y hacer una contribución.

## 1.- Haciendo fork del repositorio

Seleccionamos el repositorio que queramos utilizar para añadir nuestra contribución, en este caso, podemos hacerlo con este repositorio mismo. 

Una vez que ya tengamos seleccionado un proyecto con el cual contribuir, nos dirigimos a la página de ese repositorio o proyecto y dale clic al ícono que aparece en la parte superior derecha que dice: **“Fork”**. A continuación puedes ver el icono en la siguiente imagen:

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/fork-repository-01.png)

En la siguiente imagen, podemos ver el proceso del fork:

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/fork-repository-02.png)

Una vez completado el fork tendremos una copia exacta del repositorio en nuestro propio perfil. Se trata de dos repositorios diferentes e independientes, pero que están "conectados". El nuestro es como si fuese una rama del anterior, aunque no lo sea.

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/fork-repository-03.png)

## 2.- Modificamos la copia para añadir nuestras aportaciones

Para poder aportar nuestras contribuciones tenemos que crear una rama que sea diferente a las ramas que existan en el repositorio original.

Por poner un ejemplo, podemos crear una rama con **nuestro usuario github> + "-contribution"** donde nuestro usuario podrías ser por ejemplo **mugan86**, quedando el nombre de la rama **mugan86-contribution**

Para crear la rama teniendo en cuenta eñ nombre del branch, hacemos lo siguiente:
```
git checkout -b mugan86-contribution
```
En este caso, simplemente es coger el fichero AUTHORS.MD y añadir nuestro nombre-apellidos, enlace al repositorio de Github y si tenemos algún proyecto en el que queramos recibir colaboraciones, pues añadimos el enlace o enlaces en el caso de ser más de uno.

## 3.- Hacer el "pull request"

Cuando estemos listos con los cambios, pasen las pruebas, etc... (en este caso no hay mucho que probar ya que es un repositorio sencillo y con el objetivo de quitar el miedo a hacer este proceso de contribución) podemos solicitar que el repo original adopte la información que hemos añadido mediante el proceso del **"Pull Request"**.

Esto básicamente consiste en pedirle al responsable del repo original que tome, desde la rama que hemos usado en nuestra copia, los cambios que hemos hecho, "bajándoselos" en el repositorio original y mezclándolos con el código anteriormente existente.

Para hacer un Pull Request hay un apartado específico en el repositorio, seleccionamos **"Pull request"** que se encuentra a la derecha de **"Code"** y pulsamos en **"New Pull Request"** (Botón verde a la derecha)

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/pull-request-01.png)

Seleccionamos el branch de nuestro repositorio que queremos añadir en el repositorio original

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/pull-request-02.png)

Al pulsarlo se nos muestra una comparación entre nuestro código y el código del repo original al que estamos haciendo la petición:

![Fork image](https://raw.githubusercontent.com/npm-udemy-course/users-course-npm/master/images/pull-request-03.png)

Debemos fijarnos en que no haya conflictos o es probable, que si no están muy justificados esos cambios, nos nieguen el pull request.

Pulsamos el botón verde grande para crearlo y se nos da la oportunidad de comentar la operación. Este paso es crucial porque debemos expresar de la manera más clara y concisa posible qué es lo que estamos aportando, o sea el problema que estamos solucionado, la característica nueva que aportamos, etc... y porqué deberían aceptarla. Adjunta imágenes si crees que van a ayudar. Lo que sea, pero mejor no pasarse de largo ni quedarse corto.

## 4.- Esperar respuesta para saber si nos confirman los cambios

Una vez que hayamos realizado la petición de añadir nuestros cambios en el proyecto, tenemos que esperar a una respuesta y la respuesta será antes o después, dependendiendo de lo ocupada que esté la persona responsable de revisarla, lo complejo que sea el código que le has enviado, etc...

A veces, antes de confirmar los cambios, si el autor cree que faltan detalles te los pedira en la propia petición de poull request, por lo que es importante estar antentos por si necesita saber algo en concreto.

Habrá veces que dichos cambios no cumplan los requisitos del proyecto o la forma de trabajar y te los nieguen, dando sus razones o no, dependiendo de la persona encargada de ello (al final depende que te de unos motivos la otra persona)

Y en la situación inversa, tendremos nuestra respuesta que será positiva, aportando un pequeño granito de arena a un proyecto de código abierto con lo que con esto ya conseguiremos ser "contributor" de ese proyecto en concreto.

Habrá situaciones que si ven que colaboras mucho, puede que cambies de ser simple **"Contributor"** a **"Maintainer"** o **"Collaborator"**.
