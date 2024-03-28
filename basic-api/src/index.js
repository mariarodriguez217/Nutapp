const express = require ('express');
const app = express();
const empleadoR= require('./routes/empleados.route');
app.use(express.json());
app.use(empleadoR);
app.listen(3001,()=>{
    console.log('servidor corriendo...');
})