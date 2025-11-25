import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import LessonOverviewPage from '~/pages/lessonOverview.vue';

describe('Lesson Overview Page', () => {
  const globalStubs = {
    SideNav: true,
    HeadSection: true,
    PageTitle: true,
    SearchControls: true,
    Grid: true,
  };

  it('renders correctly', () => {
    const wrapper = mount(LessonOverviewPage, {
      global: { stubs: globalStubs },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('has main content area', () => {
    const wrapper = mount(LessonOverviewPage, {
      global: { stubs: globalStubs },
    });
    expect(wrapper.find('main').exists()).toBe(true);
  });
});

