import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  Field,
  InputType
} from 'type-graphql'
import { Movie } from '../entity/Movie'

@InputType()
class MovieInput {
  @Field()
  title: string

  @Field(() => Int)
  minutes: number
}
@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie(
    // @Arg('title') title: string,
    // // because number is not a GraphQL types, you must inform GraphQL what kind of number it is
    // @Arg('minutes', () => Int) minutes: number
    @Arg('options', () => MovieInput) options: MovieInput
  ) {
    // await Movie.insert(options)
    // return true
    const movie = await Movie.create(options).save()
    return movie
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find()
  }
}
