import { shallowMount } from '@vue/test-utils';
import Button from '../Button.vue';

describe('Button', () => {
  it('renders default slot when passed', () => {
    const title = 'Button Title';
    const wrapper = shallowMount(Button, {
      slots: {
        default: title,
      },
    });
    expect(wrapper.text()).toContain(title);
  });

  it('does not emit a click event when disabled', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        state: 'disabled',
      },
      slots: {
        default: 'hi',
      },
    });
    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('does not emit a click event when clicked', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'hi',
      },
    });
    wrapper.trigger('click');
    const clicks = wrapper.emitted('click');
    expect(clicks).toHaveLength(1);
  });
});
