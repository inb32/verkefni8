const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    for( let item of items.children) {
      const checkbox = item.querySelector (".item__checkbox")
      checkbox.addEventListener("click", finish)

      const text = item.querySelector (".item__text")
      text.addEventListener("click", edit)

      const button = item.querySelector (".item__button")
      button.addEventListener("click", deleteItem)
    }

    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();

    const input = e.target.querySelector()

    if (input.value.trim().lenght)
    console.log('halló heimur');
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    const parent = e.target.parentNode
    parent.classList.toggle('item--done')
    
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    const textElement = document.createElement('item__text');
    divElement.classList.add('text');
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    const item = e.target.parentNode
    parentNode.classList.deleteItem('item')
    //console.log('target')
    
    
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
  }

  return {
    init: init
  }
})();
