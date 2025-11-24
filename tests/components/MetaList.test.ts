import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MetaList from '~/components/MetaList.vue'

describe('MetaList', () => {
  it('renders correctly', () => {
    const wrapper = mount(MetaList, {
      props: {
        items: ['64 Topics', '283 Lesson Videos'],
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  it('displays all items', () => {
    const items = ['64 Topics', '283 Lesson Videos', '1673 Video Exchanges']
    const wrapper = mount(MetaList, {
      props: { items },
    })

    expect(wrapper.text()).toContain('64 Topics')
    expect(wrapper.text()).toContain('283 Lesson Videos')
    expect(wrapper.text()).toContain('1673 Video Exchanges')
  })

  it('displays separators between items', () => {
    const wrapper = mount(MetaList, {
      props: {
        items: ['Item 1', 'Item 2', 'Item 3'],
      },
    })

    const separators = wrapper.findAll('.mx-2')
    expect(separators.length).toBe(2) // 2 separators for 3 items
  })
})

