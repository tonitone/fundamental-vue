import { mount, Wrapper, createLocalVue } from '@vue/test-utils';
import { Button } from '../../Button';
import FundamentalVue from './../../../';

describe('ButtonGroup', () => {
  let localVue = createLocalVue();
  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(FundamentalVue);
  });

  it('renders grouped buttons', () => {
    const buttonGroup = mount({
      template: `
      <FdButtonGroup>
        <FdButton>b1</FdButton>
        <FdButton>b2</FdButton>
        <FdButton>b3</FdButton>
      </FdButtonGroup>
      `,
    }, { localVue });
    const buttons = buttonGroup.findAll(Button);
    expect(buttons).toHaveLength(3);
    expect(buttons.wrappers.every(w => w.classes('fd-button--grouped'))).toBe(true);
  });

  it('renders compact buttons if group is compact', () => {
    const buttonGroup = mount({
      template: `
      <FdButtonGroup compact>
        <FdButton>b1</FdButton>
        <FdButton>b2</FdButton>
        <FdButton>b3</FdButton>
      </FdButtonGroup>
      `,
    }, { localVue });
    const buttons = buttonGroup.findAll(Button);
    expect(buttons).toHaveLength(3);
    // We have no public api in order to determine whether a button is compact or not.
    // Because of that we have to check if the compact class is present.
    const buttonIsCompact = (button: Wrapper<any>) => button.classes('fd-button--compact');
    expect(buttons.wrappers.every(buttonIsCompact)).toBe(true);
  });
});
