export default class Popovers {
  constructor(items) {
    this.items = document.querySelectorAll(items);
    this.popovers = new Map();
    this.init();
  }

  init = () => {
    for (const item of this.items) {
      item.addEventListener('click', this.events);
    }
  };

  events = (e) => {
    const submit = e.target;
    if (this.popovers.has(submit)) {
      this.popovers.get(submit).remove();
      this.popovers.delete(submit);
      return;
    }

    const popover = Popovers.createPopovers(submit);
    this.popovers.set(submit, popover);
  };

  static createPopovers(item) {
    const popover = document.createElement('div');
    const { left, top, width } = item.getBoundingClientRect();
    popover.classList.add('popover-info');
    popover.innerHTML = `
      <div class="popover-title">${item.dataset.title}</div>
      <div class="popover-desc">${item.dataset.desc}</div>
    `;
    document.body.append(popover);
    const { height, width: popWidth } = popover.getBoundingClientRect();
    popover.style.top = `${top - height - 5}px`;
    popover.style.left = `${left - popWidth / 2 + width / 2}px`;
    return popover;
  }
}
