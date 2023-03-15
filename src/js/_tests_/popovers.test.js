/**
 * @jest-environment jsdom
 */

import Popovers from "../popovers";

test('widget should render', () => {
    document.body.innerHTML = `
    <div class="wrapper">
        <input type="submit" class="popover" value="Кнопка поповер" data-title="Заголовок поповера" data-desc="Тут у нас описание поповера на очень много слов" />
    </div>
    `;

    const popover = new Popovers('.popover');
    
    popover.items[0].click();

    const popoverInfo = document.querySelector('.popover-info')

    expect(popoverInfo).toBeTruthy();
})