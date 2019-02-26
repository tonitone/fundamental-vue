import { mount } from '@vue/test-utils';
import { Alert } from '../';

describe('Alert', () => {
  it('click on close hides the alert', () => {
    const alert = mount(Alert, { propsData: { dismissible: true }});
    expect(alert.isVisible()).toBe(true);
    const closeButton = alert.find('button');
    expect(closeButton).toBeDefined();
    closeButton.trigger('click');
    expect(alert.isVisible()).toBe(false);
  });
});
