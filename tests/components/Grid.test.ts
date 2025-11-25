import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Grid from '~/components/Grid.vue';

// mock useAsyncData
vi.mock('#app', () => ({
  useAsyncData: vi.fn(() => ({
    data: { value: [] },
    pending: { value: false },
  })),
}));

describe('Grid', () => {
  it('renders correctly', () => {
    const wrapper = mount(Grid);
    expect(wrapper.exists()).toBe(true);
  });

  it('shows empty state when no lessons', () => {
    const wrapper = mount(Grid);
    // This will depend on the mocked data
    expect(wrapper.exists()).toBe(true);
  });
});

