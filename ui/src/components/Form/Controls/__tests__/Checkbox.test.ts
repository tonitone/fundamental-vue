<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import { Checkbox, Radio } from "../";
import FormItem from "../../FormItem.vue";
=======
import { mount, createLocalVue } from '@vue/test-utils';
import { Checkbox, Radio } from '../';
import FormItem from '../../FormItem.vue';
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts

describe("Radiobutton", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<Radio disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { Radio }
    });
    const wrapper = mount(TestComponent, { localVue });
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
    assert.strictEqual(wrapper.vm.checked, "");
    const radio = wrapper.find(Radio);
    assert.isDefined(radio);
    radio.trigger("click");
    await localVue.nextTick();
    assert.strictEqual(wrapper.vm.checked, "");
    assert.propertyVal(
      radio.attributes(),
      "disabled",
      "disabled",
      "disabled attribute should be present"
    );
=======
    expect(wrapper.vm.checked).toBe('');
    const radio = wrapper.find(Radio);
    expect(radio).toBeDefined();
    radio.trigger('click');
    await localVue.nextTick();
    expect(wrapper.vm.checked).toBe('');
    expect(radio.attributes()).toHaveProperty('disabled', 'disabled');
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts
  });
});

describe("Checkbox", () => {
  it("can be disabled", async () => {
    const localVue = createLocalVue();
    const TestComponent = localVue.extend({
      template: `<Checkbox disabled value="i_like_cookies" v-model="checked" />`,
      data: () => ({ checked: "" }),
      components: { Checkbox }
    });
    const wrapper = mount(TestComponent, { localVue });
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
    assert.strictEqual(wrapper.vm.checked, "");
    const checkbox = wrapper.find(Checkbox);
    assert.isDefined(checkbox);
    checkbox.trigger("click");
    await localVue.nextTick();
    assert.strictEqual(wrapper.vm.checked, "");
    assert.propertyVal(
      checkbox.attributes(),
      "disabled",
      "disabled",
      "disabled attribute should be present"
    );
=======
    expect(wrapper.vm.checked).toBe('');
    const checkbox = wrapper.find(Checkbox);
    expect(checkbox).toBeDefined();
    checkbox.trigger('click');
    await localVue.nextTick();
    expect(wrapper.vm.checked).toBe('');
    expect(checkbox.attributes()).toHaveProperty('disabled', 'disabled');
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts
  });
});

describe("FormItem", () => {
  describe("with single Radio Button", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FormItem>
          <Radio value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data: () => ({ checked: "" }),

        components: { FormItem, Radio }
      });
      const form = mount(Parent, { localVue });
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
      assert.strictEqual(form.vm.checked, "");
      const radio = form.find(Radio);
      assert.isDefined(radio);
      radio.trigger("click");
      await localVue.nextTick();
      assert.strictEqual(form.vm.checked, "helloWorld");
=======
      expect(form.vm.checked).toBe('');
      const radio = form.find(Radio);
      expect(radio).toBeDefined();
      radio.trigger('click');
      await localVue.nextTick();
      expect(form.vm.checked).toBe('helloWorld');
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts
    });
  });

  describe("with single Checkbox", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FormItem>
          <Checkbox value="helloWorld" v-model="checked" />
        </FormItem>
        `,
        data: () => ({ checked: false }),
        components: { FormItem, Checkbox }
      });
      const form = mount(Parent, { localVue });
      expect(form.vm.checked).toBe(false);
      const checkbox = form.find(Checkbox);
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
      assert.isDefined(checkbox);
      checkbox.trigger("click");
=======
      expect(checkbox).toBeDefined();
      checkbox.trigger('click');
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts
      await localVue.nextTick();
      expect(form.vm.checked).toBe(true);
    });
  });

  describe("with multiple Checkboxes", () => {
    it("supports v-model", async () => {
      const localVue = createLocalVue();
      const Parent = localVue.extend({
        template: `
        <FormItem>
          <Checkbox value="check1" v-model="checked" />
          <Checkbox value="check2" v-model="checked" />
          <Checkbox value="check3" v-model="checked" />
          <Checkbox value="check4" v-model="checked" />
        </FormItem>
        `,
        data() {
          return {
            checked: []
          };
        },
        components: { FormItem, Checkbox }
      });
      const form = mount(Parent, { localVue });
      expect(form.vm.checked).toHaveLength(0);
      const checkboxes = form.findAll(Checkbox);
      expect(checkboxes).toHaveLength(4);

      const expectedValues: any[] = [];
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Checkbox.test.ts
      assert.sameMembers(form.vm.checked, expectedValues);
      for (const checkbox of checkboxes.wrappers) {
=======
      expect(form.vm.checked).toEqual(expectedValues);
      for(const checkbox of checkboxes.wrappers) {
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Checkbox.test.ts
        const value = (checkbox.vm as any).value;
        checkbox.trigger("click");
        expectedValues.push(value);
        // only sameMembers
        expect(form.vm.checked).toEqual(expectedValues);
      }
    });
  });
});
