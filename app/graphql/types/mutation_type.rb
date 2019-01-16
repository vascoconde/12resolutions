module Types
  class MutationType < Types::BaseObject

  	field :create_resolution, mutation: Mutations::CreateResolution
  	field :delete_resolution, mutation: Mutations::DeleteResolution
  	field :complete_resolution, mutation: Mutations::CompleteResolution

    field :create_step, mutation: Mutations::CreateStep

  end
end
