import type { ArticleQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ article }: CellSuccessProps<ArticleQuery>) => {
  return <Article article={article} />
}
