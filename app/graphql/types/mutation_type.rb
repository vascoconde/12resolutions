module Types
  class MutationType < Types::BaseObject

  	field :create_resolution, mutation: Mutations::CreateResolution
    field :update_resolution, mutation: Mutations::UpdateResolution
  	field :delete_resolution, mutation: Mutations::DeleteResolution
  	field :complete_resolution, mutation: Mutations::CompleteResolution

    field :create_step, mutation: Mutations::CreateStep
    field :update_step, mutation: Mutations::UpdateStep
    field :complete_step, mutation: Mutations::CompleteStep
    field :delete_step, mutation: Mutations::DeleteStep

  end
end
