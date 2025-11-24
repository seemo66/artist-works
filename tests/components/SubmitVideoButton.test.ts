import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SubmitVideoButton from '~/components/SubmitVideoButton.vue'

describe('SubmitVideoButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(SubmitVideoButton)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('displays default label', () => {
    const wrapper = mount(SubmitVideoButton)
    expect(wrapper.text()).toContain('Submit Video')
  })

  it('displays custom label', () => {
    const wrapper = mount(SubmitVideoButton, {
      props: {
        label: 'Upload Video',
      },
    })

    expect(wrapper.text()).toContain('Upload Video')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(SubmitVideoButton)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(SubmitVideoButton, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})

