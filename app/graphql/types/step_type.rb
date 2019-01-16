module Types
  class StepType < GraphQL::Schema::Object
  	field :id, ID, null: false
    field :title, String, null: false
    field :is_completed, Boolean, null: true
  end
end
