import elements from '../../utils/gameElements';

function resetLevel(): void {
  const { editorMarkupText, editorInput, editorSpan, editorBtn, helpBtn, navItems, game, editor } = elements.game;

  if (editorMarkupText) editorMarkupText.innerHTML = '';
  if (navItems) {
    navItems.forEach((item) => {
      item.classList.remove('level-active');
    });
  }
  if (editorInput && editorBtn && helpBtn && editorSpan) {
    editorInput.value = '';
    editorSpan.innerHTML = '';
    editorInput.removeAttribute('disabled');
    editorBtn.removeAttribute('disabled');
    helpBtn.removeAttribute('disabled');
  }
  if (game) game.classList.remove('win');
  if (editor) editor.classList.remove('win');
  elements.rule = false;
}

export default resetLevel;
