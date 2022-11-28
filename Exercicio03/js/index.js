(() => {
   window.Page = {};

   for (const file of [
      'style',
      'common/service',
      'common/library',
      'pages/book',
      'pages/main',
   ]) {
      const script = document.createElement('script');
      script.setAttribute('src', `js/${file}.js`)
      document.body.appendChild(script);
   }

   window.addEventListener('load', async () => {
      
      window.main = document.createElement('main');
      document.body.appendChild(main);

      Page.mainPage();
   })
})()