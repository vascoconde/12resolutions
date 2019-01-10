module Types
  class ResolutionType < Types::BaseObject
  	field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :banner, String, null: true
  end
end
