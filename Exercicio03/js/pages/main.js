
window.Page.mainPage = async () => {
    main.innerHTML = '';

    const headerTable = ['Tiragem', 'Titulo', 'Autor', 'Descricao', '', ''];
    const tableContent = await getBooks();
    const section = document.createElement('section');
    const wrpDiv = document.createElement('div');
    const title = document.createElement('h1');

    wrpDiv.setAttribute('class', 'div-wrp-main');
    title.textContent = 'Livros cadastrados';

    main.appendChild(section);

    section.appendChild(wrpDiv);
    wrpDiv.appendChild(title);


    wrpDiv.appendChild(
        library.createButton({
           content: 'Add livro',
           onClick: () => {
              Page.bookPage()
           },
           className: 'btn-add'
        })
     )
     
     section.appendChild(
        library.createTable(headerTable,tableContent)
     )
}