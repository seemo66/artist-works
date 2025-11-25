import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SearchControls from '~/components/SearchControls.vue';
import SearchBar from '~/components/SearchBar.vue';
import SortSelect from '~/components/SortSelect.vue';

const mountSearchControls = () =>
  mount(SearchControls, {
    global: {
      components: { SearchBar, SortSelect },
      stubs: {
        IconButton: true, // stub IconButton component
      },
    },
  });

describe('SearchControls', () => {
  it('renders correctly', () => {
    const wrapper = mountSearchControls();
    expect(wrapper.exists()).toBe(true);
  });

  it('renders SearchBar component with correct width prop', () => {
    const wrapper = mountSearchControls();
    const searchBar = wrapper.findComponent(SearchBar);
    expect(searchBar.exists()).toBe(true);
    expect(searchBar.props('width')).toBe('w-[140px] lg:w-[200px]');
  });

  it('renders SortSelect component', () => {
    const wrapper = mountSearchControls();
    const sortSelect = wrapper.findComponent(SortSelect);
    expect(sortSelect.exists()).toBe(true);
    expect(sortSelect.props('modelValue')).toBe('');
  });

  it('renders view label', () => {
    const wrapper = mountSearchControls();
    const viewLabel = wrapper.find('p');
    expect(viewLabel.exists()).toBe(true);
    expect(viewLabel.text()).toContain('View');
  });
});

