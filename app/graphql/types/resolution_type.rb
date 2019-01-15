module Types
  class ResolutionType < GraphQL::Schema::Object
  	field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :banner, String, null: true
    field :is_completed, Boolean, null: true
  end
end
