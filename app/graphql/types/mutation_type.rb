module Types
  class MutationType < Types::BaseObject

  	 #field :createResolution, function: Resolvers::CreateResolution.new
  	field :create_resolution, mutation: Mutations::CreateResolution
  	field :delete_resolution, mutation: Mutations::DeleteResolution
  	field :complete_resolution, mutation: Mutations::CompleteResolution

  end
end
