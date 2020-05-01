import { Resolver, Mutation, Arg } from 'type-graphql'

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  createMovie(
    @Arg('title')
    title: string
  ) {
    console.log(title)
    return true
  }
}
