import { Field, Resolver, Query, ObjectType } from "type-graphql"

@ObjectType()
export class Test {
  @Field({ nullable: true })
  date!: Date
  @Field({ nullable: true })
  string!: string
}

@Resolver(() => Test)
export class TestResolver {
  @Query(() => Test)
  async get() {
    const date = new Date()
    return { string: date.getSeconds() % 2 ? "hello" : "bro", date: new Date() }
  }
}
