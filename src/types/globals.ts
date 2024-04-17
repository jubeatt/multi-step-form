export enum Plan {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro'
}

export enum PlanType {
  Monthly = 'mo',
  Yearly = 'yr'
}

export type AddonKeys = 'onlineService' | 'largerStorage' | 'customizableProfile'

export type Field = {
  key: 'name' | 'email' | 'phone'
  type: 'text' | 'email' | 'tel'
  label: string
  placeholder: string
}
