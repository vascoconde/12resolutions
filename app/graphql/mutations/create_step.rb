class Mutations::CreateStep < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :title, String, required: true
  argument :resolution_id, ID, required: true

  # return type from the mutation
  #type Types::ResolutionType

  field :step, Types::StepType, null: true
  field :errors, [String], null: false

  def resolve(title:, resolution_id:)
    resolution = Resolution.find(resolution_id)
    step = resolution.steps.build(title: title)
    if step.save
      # Successful creation, return the created object with no errors
      {
        step: step,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        step: resolution,
        errors: resolution.errors.full_messages
      }
    end
  end

end
