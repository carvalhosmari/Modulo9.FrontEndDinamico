
window.Page.bookPage = (uid = '') => {
    main.innerHTML = '';

    const section = document.createElement('section');
    section.classList.add('form-section')
    main.appendChild(section);

    let h1 = document.createElement('h1');
    section.appendChild(h1);

    const forms = library.createForm();
    section.appendChild(forms);

    const formContent = ['Tiragem', 'Titulo', 'Autor', 'Descricao'];

    for (let i = 0; i < formContent.length; i++) {
        forms.appendChild(
            library.createField({
                label: formContent[i],
                input: document.createElement('input'),
                className: formContent[i]
            })
        )
    }

    const wrapBtn = document.createElement('div');
    wrapBtn.classList.add('wrapBtn');
    section.appendChild(wrapBtn);

    if (uid == '') {
        h1.textContent = 'Cadastro de novo livro';

        wrapBtn.appendChild(
            library.createButton({
                content: 'Cadastrar',
                className: 'btn-form',
                onClick: async () => {
                    const inTiragem = forms.querySelector('.Tiragem');
                    const inTitulo = forms.querySelector('.Titulo');
                    const inAutor = forms.querySelector('.Autor');
                    const inDesc = forms.querySelector('.Descricao');

                    if (inTitulo.value.length < 1 || inAutor.value.length < 1 || inDesc.value.length < 1) {
                        window.alert('Preenchimento obrigatório')
                    }
                    else {
                        await library.insertBook(parseInt(inTiragem.value), inTitulo.value, inAutor.value, inDesc.value);
                        inTiragem.value = "";
                        inTitulo.value = "";
                        inAutor.value = "";
                        inDesc.value = "";
                        Page.mainPage();
                    }
                }
            })
        );
    } else {
        h1.textContent = 'Editar livro';

        wrapBtn.appendChild(
            library.createButton({
                content: 'Atualizar',
                className: 'btn-form',
                onClick: async () => {
                    const inTiragem = forms.querySelector('.Tiragem');
                    const inTitulo = forms.querySelector('.Titulo');
                    const inAutor = forms.querySelector('.Autor');
                    const inDesc = forms.querySelector('.Descricao');

                    if (inTitulo.value.length < 1 || inAutor.value.length < 1 || inDesc.value.length < 1) {
                        window.alert('Preenchimento obrigatório')
                    }
                    else {
                        await library.updateBook(uid, parseInt(inTiragem.value), inTitulo.value, inAutor.value, inDesc.value);
                        inTiragem.value = "";
                        inTitulo.value = "";
                        inAutor.value = "";
                        inDesc.value = "";
                        Page.mainPage();
                    }
                }
            })
        );
    }

    wrapBtn.appendChild(
        library.createButton({
            content: 'Voltar',
            onClick: () => {
                Page.mainPage()
            },
            className: 'btn-form'
        })
    )
}