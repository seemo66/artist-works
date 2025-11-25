import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import SideNav from '~/components/SideNav.vue';

const mountSideNav = () =>
  mount(SideNav, {
    global: {
      stubs: {
        Logo: true,
        NuxtLink: true,
        IconButton: true,
      },
    },
  });

describe('SideNav', () => {
  it('renders correctly', () => {
    const wrapper = mountSideNav();
    expect(wrapper.exists()).toBe(true);
  });

  it('renders menu items', () => {
    const wrapper = mountSideNav();
    const text = wrapper.text();

    expect(text).toContain('Home');
    expect(text).toContain('Lessons');
    expect(text).toContain('Video Exchanges');
    expect(text).toContain('Study Materials');
    expect(text).toContain('Bookmarks');
    expect(text).toContain('History');
    expect(text).toContain('Metronome');
    expect(text).toContain('Scale Browser');
    expect(text).toContain('Community');
    expect(text).toContain('My Account');
  });
});

