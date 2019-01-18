module Types
  class ResolutionType < GraphQL::Schema::Object
  	field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :banner, String, null: true
    field :is_completed, Boolean, null: true
    field :steps, [StepType], null: true
  end
end
