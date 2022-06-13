const chains = [
  '{[()]}',
  '{[(])}',
  '{{[[(())]]}}',
  '{[]()}',
  '{{[[(())]]}}]',
  '{{[[(())]]}',
  '(){[]}'
]

function process(chain) {

  if (chain.length == 0) {
    return `Equilibrado`
  }

  if (
    (chain[0] == '{' && chain[1] == '}') ||
    (chain[0] == '(' && chain[1] == ')') ||
    (chain[0] == '[' && chain[1] == ']')
  ) {
    return process(chain.substring(2))
  }

  if (
    (chain[0] == '{' && chain[chain.length - 1] == '}') ||
    (chain[0] == '(' && chain[chain.length - 1] == ')') ||
    (chain[0] == '[' && chain[chain.length - 1] == ']')
  ) {
    chain = chain.substring(1);
    chain = chain.slice(0, chain.length - 1);
    return process(chain)
  }

  return `No equilibrado`

}

function main() {
      
    chains.forEach(element => {
      console.log(`${element} --> ${process(element)}`)
    });

}

main();