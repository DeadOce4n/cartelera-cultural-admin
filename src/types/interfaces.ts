import { ReactElement } from 'react'
import { Role } from './types'

export interface ICategory {
  readonly _id: string
  name: string
  createdAt: Date
  active: boolean
}

export interface IEvent {
  readonly _id: string
  title: string
  description: string
  flyer: string
  start: string
  end?: string
  ticketLink?: string
  locationName?: string
  published: boolean
  categories: string[]
  readonly createdBy: string
}

export interface IUser {
  readonly _id: string
  name: string
  lastName: string
  username: string
  email: string
  role: Role
  active: boolean
  verified: boolean
  registeredAt: string
  lastLogin: string
}

export interface LoginResponse {
  token: string
}

export interface LoginPayload {
  username: string
  password: string
}

export interface SignupPayload {
  name: string
  lastName: string
  username: string
  email: string
  password: string
}

export interface SuccessResponse {
  success: boolean
  title: string
  description: string
}

export interface VerifyPayload {
  code: string
  userId: string
}

export interface Response<T> {
  data: T
  meta: {
    success: boolean
    message: string
    count: {
      total: number
      filtered: number
    }
  }
}

export type Request<T = void> = {
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  payload?: T
  meta?: {
    token?: string
    limit?: number
    skip?: number
    filters?: any
  }
}

export interface Page {
  title: string
  description?: string
  href: string
  icon: ReactElement
  element: ReactElement
}

export interface Action {
  name: string
  icon: ReactElement
  allow: 'own' | 'all'
}

export interface EventFilters {
  title: string
  description: string
  published: boolean | 'all'
  ticketLink: boolean | 'all'
  start: {
    lower: string
    upper: string
  }
  end: {
    lower: string
    upper: string
  }
  // createdBy: string
  // categories: string[]
}

export interface Tool {
  title: string
  subtitle: string
  onClick?: () => void
}

export type FilterShape = {
  name: string
  field: string
  placeholder?: string
  type?: 'text' | 'datetime-local'
} | {
  name: string
  field: string
  placeholder?: string
  type: 'select'
  options: {
    name: string
    value: any
  }[]
}