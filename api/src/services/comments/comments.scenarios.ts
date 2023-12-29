import type { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                id: 1,
                name: 'String',
                email: 'user@user.com',
                hashedPassword: 'String',
                salt: 'String',
                roles: 'user',
              },
            },
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                id: 2,
                name: 'String',
                email: 'moderator@moderator.com',
                hashedPassword: 'String',
                salt: 'String',
                roles: 'moderator',
              },
            },
          },
        },
      },
    },
  },
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        user: {
          create: {
            id: 1,
            name: 'String',
            email: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
export type PostOnlyScenario = typeof postOnly
