class Resolvers::CreateResolution < GraphQL::Function
  # arguments passed as "args"
  argument :title, !types.String
  argument :description, !types.String

  # return type from the mutation
  type Types::ResolutionType

  # the mutation method
  # _obj - is parent object, which in this case is nil
  # args - are the arguments passed
  # _ctx - is the GraphQL context (which would be discussed later)
  def call(_obj, args, _ctx)
    Resolution.create!(
      title: args[:title],
      description: args[:description],
    )
  end
end
