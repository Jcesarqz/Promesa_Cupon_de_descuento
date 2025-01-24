## Descripción del Proyecto

Este proyecto utiliza **JavaScript** para generar un cupón de descuento para estudiantes de manera asíncrona, aprovechando el concepto de **promesas** para manejar las operaciones sin bloquear el hilo principal del navegador.

### Características

- **Generación de cupón de descuento**: Al hacer clic en un botón, el sistema genera un cupón para el usuario con un 70% de probabilidad de éxito.
- **Temporizador**: Antes de mostrar el resultado del cupón, el sistema muestra una cuenta regresiva de 3 segundos.
- **Manejo de errores**: Si ocurre un error, se muestra un mensaje de error en rojo, de lo contrario, el cupón se muestra en verde.

### Implementación de Promesas

1. **Generación del cupón**: 
   - Se utiliza una **promesa** que simula la generación del cupón con una probabilidad de éxito del 70%.
   - Si la operación es exitosa, se resuelve la promesa con el mensaje del cupón, de lo contrario, se rechaza con un mensaje de error.
   
   ```javascript
   function generateCoupon() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         const success = Math.random() > 0.3; // 70% éxito
         if (success) {
           resolve("🎉 ¡Felicidades! Tu cupón: ESTUDIANTE2025 🎓");
         } else {
           reject("😢 Lo sentimos, ocurrió un error. Intenta de nuevo.");
         }
       }, 2000);
     });
   }
