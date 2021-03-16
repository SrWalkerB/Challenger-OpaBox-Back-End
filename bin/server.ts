import app from "../src/app";

const PORT = 8080;


app.listen(PORT, () => {
    console.log(`Servidor rodando, PORT: ${PORT}`);
})