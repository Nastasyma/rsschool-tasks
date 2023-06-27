import elements from '../../utils/gameElements';

function setInputValue(): void {
  const { editorInput } = elements.game;
  const { editorSpan } = elements.game;

  if (editorSpan && editorInput) {
    const str = editorInput.value;
    let html = '';
    const regex = /(:|@)?([.#]?[a-zA-Z0-9-_а-яА-ЯёЁ]+|\[[^\]]*\])/g;
    let match;
    let lastIndex = 0;
    for (match = regex.exec(str); match !== null; match = regex.exec(str)) {
      const [fullMatch, prefix, word] = match;
      const { index } = match;
      // console.log(index);
      const text = str.substring(lastIndex, index);
      html += text;
      if (word) {
        if (prefix === ':' || prefix === '@') {
          html += `<span class="input-c">${fullMatch}</span>`;
        } else if (word.startsWith('.')) {
          html += `<span class="input-a">${fullMatch}</span>`;
        } else if (word.startsWith('#')) {
          html += `<span class="input-b">${fullMatch}</span>`;
        } else if (word.startsWith('[') && word.endsWith(']')) {
          html += `<span class="input-d">${fullMatch}</span>`;
        } else {
          html += fullMatch;
        }
      } else {
        html += fullMatch;
      }
      lastIndex = index + fullMatch.length;
    }
    html += str.substring(lastIndex);

    editorSpan.innerHTML = html;
  }
}

export default setInputValue;
