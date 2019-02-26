import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import Popover from '../Popover.vue';
import MenuList from '../../Menu/MenuList.vue';
type PopoverCtor = InstanceType<typeof Popover>;
describe('Popover', () => {
    it('renders menu list as default slot', () => {
      const wrapper = shallowMount(Popover, {
        slots: {
          default: 'Hi',
        },
      });
      expect(wrapper.find(MenuList).exists()).toEqual(true);
  });
    it('renders custom content in body slot', () => {
    const wrapper = shallowMount(Popover, {
      slots: {
        body: '<div>Hi</div>',
      },
    });
    expect(wrapper.find('div').text()).toContain('Hi');
  });
    it('clicking control slot content emits visible event', async () => {
      const localVue = createLocalVue();
      const wrapper = mount({
        template: `
        <Popover>
        <template v-slot:control>
        <button>Hi</button>
        </template>
        </Popover>
        `,
        components: {Popover},
      }, {localVue});
      await localVue.nextTick();
      wrapper.find('button').trigger('click');
      await localVue.nextTick();
      wrapper.find('button').trigger('click');
      await localVue.nextTick();

      const popover = wrapper.find<PopoverCtor>(Popover);
      const visibleEvents = popover.emitted('visible');
      expect(visibleEvents).toEqual([[true], [false]]);
  });
});
