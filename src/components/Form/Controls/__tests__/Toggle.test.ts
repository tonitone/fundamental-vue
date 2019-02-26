import { mount, createLocalVue } from '@vue/test-utils';
import Toggle from '../Toggle.vue';

describe('Toggle', () => {
  it('does not react on click outside the input element when disabled', async () => {
    const localVue = createLocalVue();
    const Parent = localVue.extend({
      components: { Toggle },
      template: `<Toggle v-model="on" disabled />`,
      data() {
        return {
          on: false,
        };
      },
    });
    const wrapper = mount(Parent, { localVue });
    expect(wrapper.vm.on).toBe(false);
    const toggle = wrapper.find(Toggle);
    toggle.trigger('click');
    await localVue.nextTick();
    expect(wrapper.vm.on).toBe(false);
  });
  it('reacts on click outside the input element', async () => {
    const localVue = createLocalVue();
    const Parent = localVue.extend({
      components: { Toggle },
      template: `<Toggle v-model="on" />`,
      data() {
        return {
          on: false,
        };
      },
    });
    const wrapper = mount(Parent, { localVue });
    expect(wrapper.vm.on).toBe(false);
    const toggle = wrapper.find(Toggle);
    toggle.trigger('click');
    await localVue.nextTick();
    expect(wrapper.vm.on).toBe(true);
  });

  // Toggles which are not embedded in a form item have no default id.
  // If they have no id they should not render the id attribute.
  // The generated html was kinda funky:
  // <input type="checkbox" id>
  it('does not render empty id attribute', () => {
    const localVue = createLocalVue();
    const toggle = mount(Toggle, { localVue });
    const id = toggle.attributes('id');
    expect(id).toBeUndefined();

  });
  // We test this because there was a bug in the past which caused toggles to always be rendered
  // with the same size, no matter what value the size prop had.
  describe('renders correctly with size', () => {
    it('xs', () => {
      const toggle = mount(Toggle, { propsData: { size: 'xs' } });
      expect(toggle.find('.fd-toggle').classes('fd-toggle--xs')).toBe(true);
    });
    it('s', () => {
      const toggle = mount(Toggle, { propsData: { size: 's' } });
      expect(toggle.find('.fd-toggle').classes('fd-toggle--s')).toBe(true);
    });
    it('l', () => {
      const toggle = mount(Toggle, { propsData: { size: 'l' } });
      expect(toggle.find('.fd-toggle').classes('fd-toggle--l')).toBe(true);
    });
  });

  it('supports v-model', () => {
    const localVue = createLocalVue();
    const Wrapper = localVue.extend({
      components: { Toggle },
      template: `<Toggle v-model="on" />`,
      data() {
        return {
          on: false,
        };
      },
    });
    const toggle = mount<InstanceType<typeof Wrapper>>(Wrapper, { localVue });
    expect(toggle.vm.on).toBe(false);
    toggle.setData({ on: true });
    expect(toggle.vm.on).toBe(true);
    toggle.find('input').trigger('click');
    expect(toggle.vm.on).toBe(false);
  });
});
