import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SortSelect from '~/components/SortSelect.vue'

describe('SortSelect', () => {
  const mockOptions = [
    { value: '', label: 'Sort' },
    { value: 'recent', label: 'Most Recent' },
    { value: 'popular', label: 'Most Popular' },
  ]

  it('renders correctly', () => {
    const wrapper = mount(SortSelect, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('select').exists()).toBe(true)
  })

  it('displays all options', () => {
    const wrapper = mount(SortSelect, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const options = wrapper.findAll('option')
    expect(options.length).toBe(3)
    expect(options[0].text()).toBe('Sort')
    expect(options[1].text()).toBe('Most Recent')
  })

  it('emits update event when selection changes', async () => {
    const wrapper = mount(SortSelect, {
      props: {
        modelValue: '',
        options: mockOptions,
      },
    })

    const select = wrapper.find('select')
    await select.setValue('recent')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['recent'])
  })
})

