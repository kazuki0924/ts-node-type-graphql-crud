import { Resolver, Mutation, Arg, Int } from 'type-graphql'
import { Movie } from '../entity/Movie'

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg('title') title: string
    // because number is not a GraphQL types, you must inform GraphQL what kind of number it is
    @Arg('minutes', () => Int) minutes: number
  ) {
    await Movie.insert({title, minutes})
    return true
  }
}
