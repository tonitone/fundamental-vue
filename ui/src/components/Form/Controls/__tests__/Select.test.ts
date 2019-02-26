<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Select.test.ts
import { assert } from "chai";
import { mount, createLocalVue } from "@vue/test-utils";
import Select from "../Select.vue";
=======
import { mount, createLocalVue } from '@vue/test-utils';
import Select from '../Select.vue';
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Select.test.ts

describe("Select", () => {
  it("supports v-model", async () => {
    const localVue = createLocalVue();
    const Wrapper = localVue.extend({
      template: `
      <div>
        <button @click="color = green">ClickMe</button>
        <Select v-model="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </Select>
      </div>
      `,
      data: () => ({ color: "red" }),
      components: { Select }
    });
    const wrapper = mount(Wrapper, { localVue });
    await localVue.nextTick();
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Select.test.ts
    assert.strictEqual(wrapper.vm.color, "red", "red should be the default");
    const select = wrapper.find("select");
    select.setValue("green");
=======
    expect(wrapper.vm.color).toBe('red');
    const select = wrapper.find('select');
    select.setValue('green');
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Select.test.ts

    select.trigger("input");
    await localVue.nextTick();

    // @ts-ignore
    const selectedIndex = select.element.selectedIndex;
<<<<<<< Updated upstream:ui/src/components/Form/Controls/__tests__/Select.test.ts
    assert.strictEqual(selectedIndex, 1, "selectedIndexshould be correct");
=======
    expect(selectedIndex).toBe(1);
>>>>>>> Stashed changes:src/components/Form/Controls/__tests__/Select.test.ts
  });
});
