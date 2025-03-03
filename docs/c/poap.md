# POAP

En palabras de su fundador, **Patricio Worthalter**: 

>“Yo quería que cualquier persona pudiera registrar muy fácilmente su participación en una actividad del mundo real: ir a un concierto, visitar un museo, participar en un evento deportivo, ir a ver un partido de tenis, etc. Y que en cualquiera de esas oportunidades uno pudiera verificar que participó con la certeza de que esa prueba, esa verificación, es certera e inalterable. Que de verdad el individuo tiene que haber participado de ese acontecimiento. Una tecnología que produzca esos resultados necesita de un sustrato matemático confiable, como lo permite blockchain."

Patricio se pregunta a sí mismo “**¿por qué no una base de datos tradicional?** Y se responde: “Se hace imposible asegurar la inalterabilidad de la información porque eventualmente todas las bases de datos tradicionales tienen un propietario. Ese propietario puede introducir información ficticia. Es este caso, emitir un token (como sería un POAP) de alguien que participó en un evento a pesar de que no participó y también puede remover información legítima. Entonces puede pasar que yo participe en un acontecimiento pero no soy del agrado del organizador del software, o del propietario de la base de datos. Entonces el propietario me remueve. En **blockchain** eso es literalmente imposible. Y ahí radica su fortaleza”.

?>Ver al creador del concepto, cómo describe la idea que tuvo: https://youtube.com/clip/Ugkxfmx3erIAx9ctheTwmBObqccDyNReM8l3

## ¿Qué es POAP?

POAP es una nueva forma de mantener un registro confiable de las experiencias de vida. Cada vez que participan en un evento, los coleccionistas de POAP obtienen una insignia única respaldada por un registro criptográfico. Estas insignias son tokens no fungibles (NFT) y abren un nuevo mundo de posibilidades.

Es un token en la blockchain de Ethereum, emitido utilizando un estándar muy popular que se llama ERC-721. Cuando uno obtiene uno de esos tokens, puede tener la tranquilidad de que ese token es inmutable e inalterable.

* Sitio oficial: https://poap.xyz

## ¿Cómo crear tu propio POAP?
Antes de decir cómo, creo que es interesante al menos dedicarle un párrafo a las razones de por qué deberías empezar a utilizar POAP en tus eventos o actividades. Por ejemplo, si estás por lanzar un producto o abrir una tienda (sea física o virtual), podes otorgar a tus primeros compradores o visitantes en una ventana de tiempo POAPs. Para premiar a esos fieles usuarios que te acompañaron en el comienzo, en un futuro aquellos poseedores del POAP lanzamiento pueden acceder a sorteos exclusivos, descuentos, beneficios, etc.

Al principio, creí que era difícil crear un POAP, que debía firmar transacciones con mi Metamask, pagar fees caros, y sinceramente, me daba vergüenza preguntar.

Lo cierto es que es muy fácil, y todo el proceso es gratis. Vamos a ir paso a paso, en el sitio oficial que te mencioné está todo explicado.

### ¿Cómo distribuyo los POAPs a los asistentes de mi evento?

Hay 3 métodos. Voy a describir uno por uno, pero primero, te los presento:

- POAP-Bot
- POAP.website
- POAP.delivery

#### POAP-Bot
Los organizadores de eventos pueden decir la palabra secreta durante el evento. Por ejemplo, en las llamadas de los jueves de DeFiLatam, en determinado momento de la reunión del Discord, decimos la palabra. Ej.: Vitalik. Quienes están asistiendo al evento escuchan la palabra y lo que deben hacer es enviar un mensaje privado (DM) a POAP-bot#0094 (en Discord) con la palabra (contraseña) secreta.

@POAP-bot responderá automáticamente con una URL única para reclamar tu POAP. En ese momento, deberán ingresar tu dirección de Ethereum. Y listo, una vez reclamado, la insignia de POAP queda asociada a esa dirección.
No tiene mucho sentido que yo haga la guía de este método porque en Github oficial está toda la info, los remito acá: https://github.com/poap-xyz/poap-bot-v2

#### POAP.website
En este método se levanta un website por un período de tiempo corto. Este método suele utilizarse para calls o eventos en vivo de 1 hora aproximadamente. El equipo de POAP te brinda una URL del website y un código QR para que puedas mostrarlo en pantalla. Si por ejemplo, estás brindando una capacitación en tu empresa o universidad, podés utilizar este método para que los empleados o alumnos escaneen con sus celulares el QR al finalizar el evento. Esto implica un “premio” a los que estaban atentos. Se muestra el QR por 5-10 minutos y se reclama el POAP. Incluso podés agregar algunas preguntas o consignas con información brindada en la call para que los asistentes llenen los campos y te asegures que realmente estuvieron escuchando.

#### Poap Delivery
Dentro del ecosistema POAP, nos encontramos con poap.delivery. Este sistema está orientado a quienes ya tienen las addresses a las que desean otorgarles una insignia.

Todas las personas que pintaron al menos un pixel en poap.art son beneficiarias de un nuevo poap, al que hace alusión el usuario @toms0x

Damos click al link y nos va a redirigir a una página que nos detecta nuestra Metamask. Si usamos otra wallet, insertamos la dirección de Ethereum y damos click en _lookup_.

El sistema detecta que yo tengo una dirección (address) habilitada para reclamar el siguiente POAP. Sólo queda darle click a Reclamar token POAP

El POAP reclamado (muchos castellanizan la expresión “claim” en “claimeado”) queda asociado a tu dirección de Ethereum.

#### Otros métodos

- Método manual: el equipo de POAP te envía el archivo .txt con los claimlinks y vos te encargas de distribuirlo. Por ejemplo, en las reuniones del ciclo de EthereumBA los links eran distribuidos por chat privado de Zoom. También es posible experimentar ahora con Twitter Spaces.

- Otra opción más industrializada de repartir estos claimlinks es a través de una plataforma de EmailMarketing como Mailchimp (Partiendo del supuesto que tenes los mails de todos los participantes)
Cargas un CSV con todos los mails y su respectivo claimlink al lado. Entonces te aseguras que a cada mail le llegue un link distinto.
