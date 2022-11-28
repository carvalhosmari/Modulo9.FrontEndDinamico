
window.library = {
    deleteBook: async (uid) => {
        if (confirm('Gostaria de deletar este livro? A ação não poderá ser desfeita..')) {
            await deleteBook(uid);
            window.alert('Livro deletado com sucesso');
            Page.mainPage();
        }
    },
    createField: ({ label, tipo = 'text', input = 'hidden', className }) => {

        const field = document.createElement('div');
        field.classList.add('field');
        const txtLabel = document.createElement('label');
        txtLabel.textContent = label;
        input.setAttribute('type', tipo);
        input.classList.add(`${className}-field`);
        field.appendChild(txtLabel);
        field.appendChild(input);

        return field;
    },
    createForm: () => {
        const form = document.createElement('form');

        return form;
    },
    createButton: ({ type = 'button', content, onClick = () => { }, className }) => {
        const button = document.createElement('button');
        button.setAttribute('type', `${type}`);
        button.textContent = content;
        button.addEventListener('click', onClick);
        button.classList.add(`${className}`)

        return button;
    },
    createTable: (tableHeader, tableData) => {
        const table = document.createElement('table');
        table.classList.add('table-list');

        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        table.appendChild(thead);
        table.appendChild(tbody);

        tableHeader.forEach(element => {
            const th = document.createElement('th');
            th.textContent = element;
            th.setAttribute('class', element);
            thead.appendChild(th);
        });

        tableData.forEach(item => {
            const tr = document.createElement('tr');

            Object.keys(item).forEach(key => {
                if (key != 'uid') {
                    const td = document.createElement('td');
                    td.setAttribute('class', key)
                    td.textContent = item[key];
                    tr.appendChild(td);
                }
            })

            const tdEdit = document.createElement('td');
            const tdDelete = document.createElement('td');
            const iconEdit = document.createElement('img');
            const iconDelete = document.createElement('img');

            iconEdit.setAttribute('src', './assets/iconEdit.png');
            iconEdit.setAttribute('class', Object.values(item)[0]);
            iconEdit.setAttribute('onclick', 'Page.bookPage(this.className)');

            iconDelete.setAttribute('src', './assets/iconDelete.png');
            iconDelete.setAttribute('class', Object.values(item)[0]);
            iconDelete.setAttribute('onclick', 'library.deleteBook(this.className)');

            tr.appendChild(tdEdit);
            tr.appendChild(tdDelete);
            tdEdit.appendChild(iconEdit);
            tdDelete.appendChild(iconDelete);
            tbody.appendChild(tr);
        })

        return table;
    },
    insertBook: async (inputTiragem, inputTitulo, inputAutor, inputDescr) => {

        await postBook({ tiragem: inputTiragem, titulo: inputTitulo, autor: inputAutor, descricao: inputDescr });

        window.alert('Livro registrado com sucesso!');
    },
    updateBook: async (uid, inputTiragem, inputTitulo, inputAutor, inputDescr) => {

        await editBook({ uid: uid, tiragem: inputTiragem, titulo: inputTitulo, autor: inputAutor, descricao: inputDescr });

        window.alert('Dados alterados com sucesso!');
    }

}