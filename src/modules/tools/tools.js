export const TOOLS = {
  brush: {
    name: 'Brush',
    id: 'brush',
    icon: '🖌',
    context: '🖌 &nbsp; you\'re using brush'
  },
  pencil: {
    name: 'Pencil',
    id: 'pencil',
    icon: '🖊',
    context: '🖊 &nbsp; you\'re using pencil'
  },
  square: {
    name: 'Square',
    id: 'square',
    icon: '🔲',
    context: '🔲 &nbsp; you\'re using square'
  },
  default: {
    name: 'default',
    id: 'default',
    context: '☝ &nbsp; select your tool'
  },
  [Symbol.iterator]() {
    const tools = this // value passed by reference!
    const toolsKeys = Object.keys(this);
    toolsKeys.splice(toolsKeys.indexOf(this.default), 1);
    let currentItemIndex = 0;

    return {
      next() {
        if (currentItemIndex < toolsKeys.length) {
          return {
            value: tools[toolsKeys[currentItemIndex++]],
            done: false,
          }
        }

        return {
          value: undefined,
          done: true
        };
      }
    }
  } 
};
