import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const contacts: QueryResolvers['contacts'] = () => {
  return db.contact.findMany()
}

export const contact: QueryResolvers['contact'] = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact: MutationResolvers['createContact'] = ({
  input,
}) => {
  // email must not have test or variation of test in it
  validate(input.email, 'email', {
    email: true,
    custom: {
      with: () => {
        if (input.email.includes('test')) {
          throw new Error('Email must not contain the word test')
        }
      },
    },
  })

  return db.contact.create({
    data: input,
  })
}
