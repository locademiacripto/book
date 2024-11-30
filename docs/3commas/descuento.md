# Descuento

!> Con este [enlace de invitación](https://3commas.io/?c=cripto), se incluye un descuento importante en la primer suscripción ANUAL de 3commas.

Sin importar qué plan anual compres, pensadlo bien porque es por única vez!

Si necesitas una mano con 3Commas, tengo dos para vos! Pero, tenes que poner `cripto` en tu código de referido (ver ajustes de tu cuenta). Fijate [paso a paso acá](./3commas/readme.md#empezar-ahora) cómo explico lo que deberías tener en código de referido!

## BlackFriday

Muchos de nosotros usamos 3commas con plan anual y renovamos únicamente en la época exclusiva del Blackfriday, es una forma inteligente de usar tu dinero! 3Commas posee reconocimientos para quienes lo hacemos, está especificado en los términos y condiciones de la suscripción anual... puedes aprovechar estos descuentos!

> ¡Aprovecha el Black Friday y lleva tu trading al siguiente nivel!
Renueva tu suscripción a 3Commas hoy mismo y obtén hasta un 50% de descuento en tu plan. No pierdas esta oportunidad de seguir utilizando las herramientas más avanzadas para automatizar el mercado, incluyendo Bots de DCA y Señales.
>
> Esta oferta EXCLUSIVA está disponible solo para usuarios con planes por expirar.
¿Qué esperas? Asegura tu acceso por 1 o 2 años más y mantén tu ventaja en el trading.
> 
> 👉 [Haz clic aquí y renueva ahora. ¡No te quedes fuera!](https://app.3commas.io/auth/registration?utm_source=referral&utm_medium=cabinet&c=cripto)
> 
> Te quedaría así: 50% de descuento en el plan de 2 años
> O bien... si decides renovar por 1 año, tienes 40% de descuento !

*** 

## IMPORTANTE

🗓️ Timeline de la promoción Black Friday

- 📢 Noviembre 25: ¡Lanzamos los primeros teasers!
- ⏰ Noviembre 29, a la medianoche: 🎉 Comienza la venta Black Friday. ¡No te lo pierdas!
- 🚨 Diciembre 6, a la medianoche: ⏳ Finaliza la promoción Black Friday. Aprovecha antes de que termine.
- 👉 Prepárate y no dejes pasar esta oportunidad única. ¡El reloj está corriendo!

<!-- Agrega este HTML en tu página -->
<div id="notification-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;"></div>

<script>
  // Lista de mensajes y nombres aleatorios
  const messages = [
    { name: "Pedro", message: "compró el plan PRO por $9.99" },
    { name: "Mariana", message: "compró el plan PRO con 40% OFF" },
    { name: "Rocío", message: "compró el plan PRO con 50% OFF" },
    { name: "Rodrigo", message: "compró por $9.99" },
    { name: "Carla", message: "aprovechó el descuento especial en el plan PRO" },
    { name: "Juan", message: "acaba de adquirir el plan PREMIUM por $14.99" },
  ];

  // Función para mostrar una notificación
  function showNotification() {
    const notificationContainer = document.getElementById("notification-container");

    // Selección aleatoria
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Crear el elemento de notificación
    const notification = document.createElement("div");
    notification.style.cssText = `
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 10px 20px;
      border-radius: 8px;
      margin-bottom: 10px;
      font-family: Arial, sans-serif;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      border: 1px solid #ff9900; /* Borde naranja para resaltar */
      animation: fadeInOut 5s forwards;
    `;
    notification.innerHTML = `${randomMessage.name} ${randomMessage.message}`;

    // Agregar y eliminar notificación
    notificationContainer.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
  }

  // Animación CSS para notificaciones
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeInOut {
      0% { opacity: 0; transform: translateY(20px); }
      10% { opacity: 1; transform: translateY(0); }
      90% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);

  // Mostrar notificaciones aleatorias cada 8 segundos
  setInterval(showNotification, 8000);
</script>
