import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PageTitle from '~/components/PageTitle.vue';

describe('PageTitle', () => {
  const globalStubs = {
    MetaList: {
      name: 'MetaList',
      props: ['items'],
      template: '<div class="meta-list-stub"></div>',
    },
  };

  it('renders correctly', () => {
    const wrapper = mount(PageTitle, { global: { stubs: globalStubs } });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays default title', () => {
    const wrapper = mount(PageTitle, { global: { stubs: globalStubs } });
    expect(wrapper.text()).toContain('Intermediate');
  });

  it('displays custom title', () => {
    const wrapper = mount(PageTitle, {
      props: { title: 'Advanced' },
      global: { stubs: globalStubs },
    });
    expect(wrapper.text()).toContain('Advanced');
  });

  it('renders MetaList', () => {
    const wrapper = mount(PageTitle, { global: { stubs: globalStubs } });
    const metaList = wrapper.findComponent({ name: 'MetaList' });
    expect(metaList.exists()).toBe(true);
  });

  it('passes metaItems to MetaList', () => {
    const metaItems = ['10 Topics', '50 Videos'];
    const wrapper = mount(PageTitle, {
      props: { metaItems },
      global: { stubs: globalStubs },
    });
    const metaList = wrapper.findComponent({ name: 'MetaList' });

    expect(metaList.props('items')).toEqual(metaItems);
  });
});

