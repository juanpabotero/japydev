const isNavigationSupported = () => {
  return Boolean(document.startViewTransition);
};

export const startViewTransition = () => {
  if (!isNavigationSupported) return;

  // escuchar evento de navegación
  window.navigation.addEventListener('navigate', (event) => {
    // url de destino
    const toUrl = new URL(event.destination.url);

    // si el dominio base actual es diferente al destino, no hacer nada,
    // esto es para evitar que se ejecute en páginas externas
    if (location.origin !== toUrl.origin) return;

    // si es una navegacion en el mismo dominio, interceptamos el evento
    event.intercept({
      // y ejecutamos el código que queramos
      async handler() {
        // vamos a cargar la página de destino
        // utilizando un fetch para obtener su HTML
        const response = await fetch(toUrl.pathname); // /notes/angular
        const text = await response.text();

        // nos quedamos con el contenido html dentro de la etiqueta body
        // usamos un regex para extraerlo
        const data = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1];
        if (!data) return;

        // utilizar la API de View Transition
        // como tiene que hacer la navegacion
        document.startViewTransition(() => {
          // como tiene que actualizar la vista
          document.body.innerHTML = data;
          // el scroll hasta arriba de la página
          document.documentElement.scrollTop = 0;
        });
      },
    });
  });
};
