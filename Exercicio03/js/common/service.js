const studentCode = "748f8e94-a080-41c2-bf3b-76df227fdfab";
const url = "http://livros.letscode.dev.netuno.org:25390/services";

async function getBooks() {
    const response = await fetch(`${url}/livro/lista`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            text: '',
            aluno: {
                uid: studentCode,
            },
        })
    }).catch((error) => {
        console.log('Erro na comunicação:', error);
    });

    if (!response) {
        errorHandler();
        const storage = JSON.parse(sessionStorage.getItem('books'));
        return storage;
    }

    const books = await response.json();
    sessionStorage.setItem('initialBooks', JSON.stringify(books));
    return books;
}

async function postBook(book) {
    const response = await fetch(`${url}/livro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            aluno: {
                uid: studentCode,
            },
            tiragem: book.tiragem,
            titulo: book.titulo,
            autor: book.autor,
            descricao: book.descricao
        }),
    }).catch((error) => {
        console.log('Erro na comunicação:', error);
    });

    if (!response) {
        errorHandler();
        return [];
    }

    return await response.json();
}

async function editBook(book) {
    const response = await fetch(`${url}/livro`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uid: book.uid,
            aluno: {
                uid: studentCode,
            },
            tiragem: book.tiragem,
            titulo: book.titulo,
            autor: book.autor,
            descricao: book.descricao,
        }),
    }).catch((error) => {
        console.log('Erro na comunicação:', error);
    });

    if (!response) {
        errorHandler(response);
        return [];
    }

    return await response.json();
}

async function deleteBook(uid) {
    const response = await fetch(`${url}/livro`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            aluno: {
                uid: studentCode
            },
            uid: uid
        }),
    }).catch((error) => {
        console.log('Erro na comunicação:', error);
    });

    if (!response) {
        errorHandler(response);
        return [];
    }

    return await response.json();
}

function errorHandler(response) {
    console.log('Erro : ', response.status, ' - ', response.statusText);
}
