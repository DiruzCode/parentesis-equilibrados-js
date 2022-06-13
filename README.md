# parentesis-equilibrados-js

Se considera que un paréntesis es uno de los siguientes caracteres: (, ), {, }, [, o ].

Se considera que dos paréntesis son un par coincidente si el paréntesis de apertura (es decir, (, [, o {) se encuentra a la izquierda de un paréntesis de cierre (es decir, ), ], o }) del mismo tipo. Hay tres tipos de pares de paréntesis coincidentes: [], {} y ().

Un par de paréntesis coincidentes no está equilibrado si el conjunto de paréntesis que encierra no coincide. Por ejemplo, {[(])} no está equilibrado porque el contenido entre { y } no está equilibrado. El par de paréntesis [ ] encierra un único paréntesis de apertura no equilibrado, (, y el par de paréntesis ( ) encierra un único corchete de cierre no equilibrado, ].

Según esta lógica, decimos que una secuencia de paréntesis está equilibrada si se cumplen las siguientes condiciones:

No contiene paréntesis no equilibrados.
El subconjunto de paréntesis encerrados dentro de los límites de un par de paréntesis coincidente es también un par de paréntesis coincidente .

Dadas una cadena de paréntesis, determine si la secuencia está equilibrada.

Ejemplos:

{[()]} está equilibrado
{[(])} no está equilibrado
{{[[(())]]}} está equilibrado
{[]()} está equilibrado
{{[[(())]]}}] no está equilibrado
{{[[(())]]} no está equilibrado
(){[]} está equilibrado

---

Prueba

`node index.js`


Resultado

- {[()]} --> Equilibrado
- {[(])} --> No equilibrado
- {{[[(())]]}} --> Equilibrado
- {[]()} --> Equilibrado
- {{[[(())]]}}] --> No equilibrado
- {{[[(())]]} --> No equilibrado
- (){[]} --> Equilibrado


