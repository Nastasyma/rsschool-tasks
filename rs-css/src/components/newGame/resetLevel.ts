import elements from '../../utils/gameElements';

function resetLevel(): void {
  const { editorMarkupText } = elements.game;
  const { editorInput } = elements.game;
  const { editorSpan } = elements.game;
  const { editorBtn } = elements.game;
  const { helpBtn } = elements.game;
  const { navItems } = elements.game;
  const { game } = elements.game;
  const { editor } = elements.game;
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
