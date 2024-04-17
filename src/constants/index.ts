import { Field, Plan } from '@/types/globals'

export const formFields: Field[] = [
  {
    key: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'e.g. Stephen King'
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email Address',
    placeholder: 'e.g. stephenking@lorem.com'
  },
  {
    key: 'phone',
    type: 'tel',
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890'
  }
]

export const plans = {
  arcade: {
    label: 'Arcade',
    value: Plan.Arcade,
    price: {
      month: 9,
      year: 90
    }
  },
  advanced: {
    label: 'Advanced',
    value: Plan.Advanced,
    price: {
      month: 12,
      year: 120
    }
  },
  pro: {
    label: 'Pro',
    value: Plan.Pro,
    price: {
      month: 15,
      year: 150
    }
  }
}

export const addons = {
  onlineService: {
    label: 'Online service',
    description: 'Access to multiplayer games',
    value: 'onlineService',
    price: {
      month: 1,
      year: 10
    }
  },
  largerStorage: {
    label: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    value: 'largerStorage',
    price: {
      month: 2,
      year: 20
    }
  },
  customizableProfile: {
    label: 'Customizable profile',
    description: 'Custom theme on your profile',
    value: 'customizableProfile',
    price: {
      month: 2,
      year: 20
    }
  }
}

export const steps = ['your info', 'select plan', 'add-ons', 'summary']
