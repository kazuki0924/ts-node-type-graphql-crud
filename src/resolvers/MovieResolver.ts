import { Resolver, Mutation } from 'type-graphql'

@Resolver()
export class MovieResolver {
  @Mutation
  createMovie() {}
}
