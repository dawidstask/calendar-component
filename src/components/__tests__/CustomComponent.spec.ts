import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CustomComponent from '../CustomComponent.vue'

describe('CustomComponent', () => {
  it('emits correct data for "year" with numeric value', async () => {
    const wrapper = mount(CustomComponent, {
      props: {
        selectOptions: ['year'],
        disabledOptions: [],
      },
    })

    await wrapper.find('select').setValue('year')
    await wrapper.find('input[type="number"]').setValue(2)

    expect(wrapper.emitted().update?.[1][0]).toEqual({
      timeUnit: 'year',
      value: 2,
      from: null,
      to: null,
    })
  })

  it('emits correct data for "date-from"', async () => {
    const wrapper = mount(CustomComponent, {
      props: {
        selectOptions: ['date-from'],
        minDate: '2020-01-01',
        maxDate: '2025-12-31',
      },
    })

    await wrapper.find('select').setValue('date-from')
    await wrapper.find('input[type="date"]').setValue('2022-05-01')

    expect(wrapper.emitted().update?.[1][0]).toEqual({
      timeUnit: 'date-from',
      value: null,
      from: '2022-05-01',
      to: null,
    })
  })

  it('emits correct data for "date-to"', async () => {
    const wrapper = mount(CustomComponent, {
      props: {
        selectOptions: ['date-to'],
        minDate: '2020-01-01',
        maxDate: '2025-12-31',
      },
    })

    await wrapper.find('select').setValue('date-to')
    await wrapper.find('input[type="date"]').setValue('2023-08-15')

    expect(wrapper.emitted().update?.[1][0]).toEqual({
      timeUnit: 'date-to',
      value: null,
      from: null,
      to: '2023-08-15',
    })
  })

  it('emits correct data for date from-to', async () => {
    const wrapper = mount(CustomComponent, {
      props: {
        selectOptions: ['date from-to'],
        disabledOptions: [],
        minDate: '2012-01-01',
        maxDate: '2024-11-11'
      }
    })
    await wrapper.find('select').setValue('date from-to')
    await wrapper.findAll('input[type="date"]')[0].setValue('2023-12-01')
    await wrapper.findAll('input[type="date"]')[1].setValue('2024-01-01')

    expect(wrapper.emitted().update?.[2][0]).toEqual({
      timeUnit: 'date from-to',
      value: null,
      from: '2023-12-01',
      to: '2024-01-01'
    })
  })

  it('disables options properly', () => {
    const wrapper = mount(CustomComponent, {
      props: {
        selectOptions: ['month', 'week'],
        disabledOptions: ['month']
      }
    })

    const options = wrapper.findAll('option')
    console.log(options[1])
    expect(options[1].element.disabled).toBe(true)
  })
})
