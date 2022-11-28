
(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    * {
        margin: 0;
        padding: 0;
        font-family: 'Courier';
    }

    main {
        width: 100vw;
        height: 100%;
        padding: 4rem 0rem 10rem 0rem;
        background: #fbfbf2;
    }

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .div-wrp-main {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4rem;
    }

    .btn-add {
        width: 20%;
        padding: 0.5rem 0 0.5rem 0;
        font-size: 1rem;
        cursor: pointer;
        background: none;
        border: 2px solid #40798c;
        border-radius: 10px;
        color: #40798c;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .btn-add:hover {
        background: #e5e6e4;
        transition: 0.5s;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;
    }

    .field {
        width: 40vw;
        display: flex;
        flex-direction: column;
        margin: 1rem 0 0.75rem 0;
    }

    label {
        font-size: 1.2rem;
        color: #40798c;
        font-weight: bold;
        letter-spacing: 1px;
    }

    input {
        background: #f9f4f5;
        border: 0.8px solid #40798c
    }

    .btn-form {
        width: 20%;
        margin-top: 4rem;
        padding: 0.5rem 0 0.5rem 0;
        font-size: 1rem;
        cursor: pointer;
        background: none;
        border: 2px solid #40798c;
        border-radius: 10px;
        color: #40798c;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .btn-form:hover {
        background: #e5e6e4;
        transition: 0.5s;
    }

    .wrapBtn {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    table {
        width: 90%;
        text-align: center;
        background: #e5e6e4;
    }

    th {
        font-size: 1.5rem;
        //border: 1px solid gray;
        //background: #ffddd2;
        color: #40798c;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    td {
        font-size: 1rem;
        border-top: 1.5px solid gray;
        padding: 0.5rem;
        //background: #d8e2dc;
    }

    img {
        cursor: pointer;
    }

    h1 {
        font-size: 2rem;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: #40798c;
    }

    @media (max-width: 425px) {
        .Descricao, .descricao {
            display: none;
        }

        .btn-add, .btn-form {
            width: 30%
        }

        h1 {
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }

        th {
            font-size: 1rem;
        }

        td {
            font-size: 0.75rem;
        }

        .div-wrp-main {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }
    `
    document.body.appendChild(style)
})();