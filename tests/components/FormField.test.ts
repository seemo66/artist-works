import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FormField from '~/components/FormField.vue'

describe('FormField', () => {
  it('renders correctly', () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'test-input',
        label: 'Username',
        modelValue: '',
      },
    })

    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('label').text()).toBe('Username')
    expect(wrapper.find('input').exists()).toBe(true)
  })

  it('displays label correctly', () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'test-input',
        label: 'Password',
        modelValue: '',
      },
    })

    expect(wrapper.find('label').text()).toBe('Password')
  })

  it('binds input value correctly', () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'test-input',
        label: 'Username',
        modelValue: 'testuser',
      },
    })

    const input = wrapper.find('input').element as HTMLInputElement
    expect(input.value).toBe('testuser')
  })

  it('emits update event when input changes', async () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'test-input',
        label: 'Username',
        modelValue: '',
      },
    })

    const input = wrapper.find('input')
    await input.setValue('newvalue')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['newvalue'])
  })
})


