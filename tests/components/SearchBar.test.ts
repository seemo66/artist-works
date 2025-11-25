import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchBar from '~/components/SearchBar.vue';

describe('SearchBar', () => {
  it('renders correctly', () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('renders search icon', () => {
    const wrapper = mount(SearchBar);
    const img = wrapper.find('img[alt="search icon"]');
    expect(img.exists()).toBe(true);
  });

  it('has placeholder text', () => {
    const wrapper = mount(SearchBar);
    expect(wrapper.find('input').attributes('placeholder')).toBe('Search');
  });

  it('applies custom width class', () => {
    const wrapper = mount(SearchBar, {
      props: {
        width: 'w-[300px]',
      },
    });
    expect(wrapper.find('input').classes()).toContain('w-[300px]');
  });
});

