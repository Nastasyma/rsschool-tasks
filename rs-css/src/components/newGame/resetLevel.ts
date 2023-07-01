import elements from '../../utils/gameElements';

function resetLevel(): void {
  const { editorMarkupText, editorInput, editorSpan, editorBtn, helpBtn, navItems, game, editor, currentLevel } =
    elements.game;

  if (currentLevel) currentLevel.textContent = (elements.level + 1).toString();
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
  elements.isHelp = false;
  elements.helped = false;
}

export default resetLevel;
