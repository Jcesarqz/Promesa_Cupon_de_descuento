// Función para generar cupón con Promesa
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
  
  // Temporizador con Promesa
  function countdown(seconds) {
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        document.getElementById("coupon-result").textContent = `⏳ Espere ${seconds} segundos...`;
        seconds--;
        if (seconds < 0) {
          clearInterval(interval);
          resolve();
        }
      }, 1000);
    });
  }
  
  // Referencias al botón y al resultado
  const button = document.getElementById("get-coupon-btn");
  const couponResult = document.getElementById("coupon-result");
  
  // Evento del botón
  button.addEventListener("click", async () => {
    button.disabled = true;
    couponResult.style.color = "#333";
    couponResult.textContent = "🎁 Procesando...";
  
    // Temporizador de espera antes de mostrar el resultado
    await countdown(3);
  
    // Generar cupón
    generateCoupon()
      .then((message) => {
        couponResult.textContent = message;
        couponResult.style.color = "#4caf50"; // Verde
      })
      .catch((error) => {
        couponResult.textContent = error;
        couponResult.style.color = "#f44336"; // Rojo
      })
      .finally(() => {
        button.disabled = false;
      });
  });
  