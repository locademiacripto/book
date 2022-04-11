# Bridge

## Origen

Después de que Ethereum se saturara, surgió una oportunidad: crear más redes que funcionen de manera similar a Ethereum pero más rápidas, más baratas, y que estén de alguna manera conectadas con esta red principal.

Así nació el mundo multi-chain. 

Nacieron redes alternativas como @0xPolygon, @avalancheavax y @Ronin_Network

Pero Ethereum siempre fue la madre, donde está todo el dinero, donde está la liquidez, donde están las grandes transacciones y donde los exchanges están conectados.

![](https://pbs.twimg.com/media/FPI3LmuWQAYyYHp?format=jpg&name=medium)

Por esto nacieron los bridges. Un puente.

Un bridge es una aplicación, contrato, programa, que funciona para enviar, recibir y descifrar mensajes entre dos o más redes.

Estos mensajes son mayormente utilizados para "enviarse" criptos entre Ethereum y otra red alternativa.

Pero cuando alguien me dice "un puente entre ambas redes", yo me imagino esto:
![](https://pbs.twimg.com/media/FPI3UWIXwAET88u?format=jpg&name=small)

El problema es que los bridges NO funcionan así. ❌

Como expliqué antes, los bridges funcionan para enviarse mensajes entre redes, pero NO para propiamente transferir tokens entre redes.

## Funcionamiento

Supongamos el caso de un bridge construido entre Ronin y Ethereum.

Necesito hacer lo siguiente para que el bridge funcione:

- Construyo una aplicación que reciba y envíe mensajes y lo pongo en Ethereum, lo llamaré 🅰️.
- Construyo una aplicación que reciba y envíe mensajes y lo pongo en Ronin, lo llamaré 🅱️.
- Construyo algo para que 🅰️ entienda los mensajes de 🅱️ y 🅱️ entienda los mensajes de 🅰️.

![](https://pbs.twimg.com/media/FPI3f17XoAEKewf?format=jpg&name=medium)

- Construyo un lugar para bloquear criptos en Ethereum. Estas se podrán bloquear y desbloquear bajo la orden de 🅰️.
- Construyo un lugar para emitir (crear), y quemar criptos en Ronin bajo la orden de 🅱️.

Nos queda un esquema como este:

![](https://pbs.twimg.com/media/FPI3nRfXsAEM0av?format=jpg&name=medium)

¿Cómo funciona el bridge?

Enviaré 1 ETH desde Ethereum hacia Ronin. Entonces envío 1 ETH hacia el bridge, y le digo que quiero que me los mande para Ronin.

El bridge hace lo siguiente:

1. El bridge en Ethereum recibe mi 1 ETH.
1. 🅰️ confirma que recibió 1 ETH, y los bloquea.
1. 🅰️ le dice a 🅱️ que bloqueó 1 ETH correctamente.
1. 🅱️ recibe la info, luego emite 1 ETH en Ronin y me lo envía.
1. Yo recibo 1 ETH en Ronin.

![](https://pbs.twimg.com/media/FPI3v2bXEAsIh6Q?format=jpg&name=medium)

Ahora enviaré 1 ETH al bridge de Ronin y le diré que me lo mande a Ethereum:

1. 🅱️ recibe 1 ETH en Ronin y lo destruye.
1. 🅱️ le avisa a 🅰️ que destruyó 1 ETH en su lado.
1. 🅰️ recibe la info, libera 1 ETH en Ethereum y me lo manda.
1. Yo recibo 1 ETH en Ethereum.

![](https://pbs.twimg.com/media/FPI31mtXoAAALDm?format=jpg&name=medium)

Simple:

- Los ETH se bloquean y liberan por órdenes de 🅰️ en Ethereum.
- Los ETH se emiten y destruyen por órdenes de 🅱️ en Ronin.
- Lo mismo se puede aplicar para cualquier bridge con cualquier otra red.
- La clave siempre está en la comunicación entre 🅰️ y 🅱️.

## Seguridad

Para agregarle "seguridad", los creadores de bridges hacen que estos mensajes entre 🅰️ y 🅱️ deban ser firmados por firmantes autorizados, que usualmente son dueños de wallets o nodos específicos.

![](https://pbs.twimg.com/media/FPI36s9XIAkF3tN?format=jpg&name=medium)

Por ejemplo, en el bridge de @Ronin_Network que resultó hackeado, se requería que los mensajes estuvieran firmados por 5 firmas de 9 posibles firmantes.

Cada uno de los 9 firmantes es una wallet que firma una transacción cualquiera. Digamos que cada uno es como una llave. 🔐

A esto se le llama "esquema multi-sig" o "multi-firma".

Es muy utilizado para manejar fondos en grandes cantidades.

Y aquí empezamos a entender los vectores de ataque: ¿Si se roban 5 firmas? ¿Si 5 de los firmantes deciden robarse los fondos? Y así.

![](https://pbs.twimg.com/media/FPI4AtwWUAMzcTO?format=jpg&name=medium)

Los usuarios siguen usando los bridges como si fueran literalmente puentes.

Confían en ellos porque funcionan y sienten que sus criptos son transferidas de allá para acá y viceversa.

Esto hace que existan cientos de millones de dólares transferidos a través de los bridges. 🚨

Pero, como podemos entender, $100 millones de dólares transferidos a través de un bridge, desde Ethereum hacia otra red, no significa que se movieron $100 millones de dólares.

Significa que hay $100 millones de dólares bloqueados en Ethereum bajo el control de unos firmantes.

## Conclusiones

Mover nuestros fondos en otra red depende de cómo manejen el bridge el puñado de compañeros que tienen unas wallets firmantes en sus hogares.

Por eso no hay que confiar, hay que verificar :)