import { Types } from 'mongoose'

export interface EventType {
  _id: string
  title: string
  short_description: string
  start_date: string
  end_date: string
  location: string
  imageUrl: string
  about: string
  hosted_by: {
    _id: string
    name: string
    email: string
    image: string
  }
  participants: string[]
  published: boolean
  createdAt: string
  updatedAt: string
}
