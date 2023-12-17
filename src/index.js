//Entry point del server

//imports
import app from "./app.js"; //la instancia de express() está declarada en app.js
import { PORT } from "./config.js"; //puerto a exponer
import { connectDB } from "./db.js"; //conexion a la DB

connectDB(); //conectamos
    //ponemos a la escucha
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
