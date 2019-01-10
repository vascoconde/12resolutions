module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :resolution, ResolutionType, null: true do
      description "Find a resolution by ID"
      argument :id, ID, required: true
    end

    # Then provide an implementation:
    def resolution(id:)
      Resolution.find(id)
    end

  end
end
