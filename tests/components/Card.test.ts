import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Card from '~/components/Card.vue';

describe('Card', () => {
  const mockProps = {
    id: 1,
    image: '/test-image.png',
    title: 'Test Lesson',
    subtitle: 'lesson',
    time: '10:30',
    completed: false,
  };

  const globalStubs = {
    ProgressBar: {
      name: 'ProgressBar',
      props: ['progress'],
      template: '<div class="progress-bar-stub"></div>',
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(Card, {
      props: mockProps,
      global: { stubs: globalStubs },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('article').exists()).toBe(true);
  });

  it('displays title and subtitle', () => {
    const wrapper = mount(Card, {
      props: mockProps,
      global: { stubs: globalStubs },
    });

    expect(wrapper.text()).toContain('Test Lesson');
    expect(wrapper.text()).toContain('lesson');
  });

  it('shows progress bar', () => {
    const wrapper = mount(Card, {
      props: mockProps,
      global: { stubs: globalStubs },
    });

    const pb = wrapper.findComponent({ name: 'ProgressBar' });
    expect(pb.exists()).toBe(true);
  });

  it('emits click event when card is clicked', async () => {
    const wrapper = mount(Card, {
      props: mockProps,
      global: { stubs: globalStubs },
    });

    await wrapper.find('article').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.emitted('click')?.[0]).toEqual([1]);
  });

  it('emits bookmark event when bookmark button is clicked', async () => {
    const wrapper = mount(Card, {
      props: mockProps,
      global: { stubs: globalStubs },
    });

    const bookmarkButton = wrapper.findAll('button')[0];
    await bookmarkButton.trigger('click');
    expect(wrapper.emitted('bookmark')).toBeTruthy();
  });
});

