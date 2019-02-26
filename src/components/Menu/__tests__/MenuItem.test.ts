import { mount, createLocalVue } from '@vue/test-utils';
import MenuItem from './../MenuItem.vue';

describe('MenuItem', () => {
  // There was a bug that causes '<MenuItem><a href='#'>Item 1</a></MenuItem>'
  // to render an a-element into another a-element.
  it('does render embeddded link only once', () => {
    const localVue = createLocalVue();
    const item = mount({
      components: { MenuItem },
      template: `<MenuItem><a href='#'>Item 1</a></MenuItem>`,
    }, { localVue });
    expect(item.findAll('a')).toHaveLength(1);
  });

  it('does render embeddded text as link', () => {
    const localVue = createLocalVue();
    const item = mount({
      components: { MenuItem },
      template: `<MenuItem>Item 1</MenuItem>`,
    }, { localVue });
    expect(item.findAll('a')).toHaveLength(1);
  });
});
