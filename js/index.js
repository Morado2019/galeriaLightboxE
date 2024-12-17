
// Fancybox.bind = es una función de fancybox
// que se utiliza para inicializar la funcionalidad del lightbox en los elementos seleccionados
 
// [data-fancybox="gallery"] es un selector que busca los elementos con el atributo data-fancybox cuyo valor es "gallery"
// estos elementos se considerarán parte de la galería y son llamados en el html
 
Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
    Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "download", "thumbs", "close"],
        },
      },
      Thumbs: {
        type: "classic",
      },
      Images: {
        Panzoom: {
          maxScale: 2,
        },
      },
  });
  Fancybox.bind('[data-fancybox="videos"]' ,{
    Toolbar: {
        display: {
          left: ["infobar"],
          middle: [],
          right: ["slideshow", "download", "thumbs", "close"],
        },
      },

  })