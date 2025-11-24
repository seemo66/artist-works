import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import HeadSection from '~/components/HeadSection.vue';
import SubmitVideoButton from '~/components/SubmitVideoButton.vue';

// mock useRouter
vi.mock('vue-router', () => ({
  useRouter: () => ({
    back: vi.fn(),
  }),
}));

describe('HeadSection', () => {
  const globalStubs = {
    Logo: true,
    SearchBar: true,
    SubmitVideoButton: SubmitVideoButton,
  };

  it('renders correctly', () => {
    const wrapper = mount(HeadSection, { global: { stubs: globalStubs } });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('header').exists()).toBe(true);
  });

  it('has section label on desktop', () => {
    const wrapper = mount(HeadSection, { global: { stubs: globalStubs } });
    expect(wrapper.text()).toContain('LESSONS');
  });

  it('has submit video button', () => {
    const wrapper = mount(HeadSection, { global: { stubs: globalStubs } });
    expect(wrapper.findComponent(SubmitVideoButton).exists()).toBe(true);
  });
});
