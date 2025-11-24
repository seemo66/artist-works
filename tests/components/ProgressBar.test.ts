import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProgressBar from '~/components/ProgressBar.vue'

describe('ProgressBar', () => {
  it('renders correctly when not completed', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: false,
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('.bg-bgLight').exists()).toBe(true)
  })

  it('renders correctly when completed', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: true,
      },
    })

    expect(wrapper.exists()).toBe(true)
    const progressDiv = wrapper.find('.bg-progressBlue')
    expect(progressDiv.exists()).toBe(true)
  })

  it('applies correct classes when completed', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: true,
      },
    })

    const progressDiv = wrapper.find('.bg-progressBlue')
    expect(progressDiv.classes()).toContain('w-full')
    expect(progressDiv.classes()).toContain('bg-progressBlue')
  })

  it('applies correct classes when not completed', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: false,
      },
    })

    const progressDiv = wrapper.find('.bg-transparent')
    expect(progressDiv.classes()).toContain('w-0')
    expect(progressDiv.classes()).toContain('bg-transparent')
  })

  it('has transition classes on progress bar', () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: true,
      },
    })

    const progressDiv = wrapper.find('.bg-progressBlue')
    expect(progressDiv.classes()).toContain('transition-all')
    expect(progressDiv.classes()).toContain('duration-300')
  })

  it('updates classes when completed prop changes', async () => {
    const wrapper = mount(ProgressBar, {
      props: {
        completed: false,
      },
    })

    let progressDiv = wrapper.find('.bg-transparent')
    expect(progressDiv.classes()).toContain('w-0')

    await wrapper.setProps({ completed: true })

    progressDiv = wrapper.find('.bg-progressBlue')
    expect(progressDiv.classes()).toContain('w-full')
  })
})

