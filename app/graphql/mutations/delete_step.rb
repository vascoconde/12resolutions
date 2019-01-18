class Mutations::DeleteStep < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true

  # return type from the mutation
  #type Types::ResolutionType

  field :step, Types::StepType, null: true
  field :errors, [String], null: false

  def resolve(id:)
    step = Step.find(id)
    if step.destroy
      # Successful destruction, return the object with no errors
      {
        step: step,
        errors: [],
      }
    else
      # Failed save, return the errors to the client
      {
        step: step,
        errors: step.errors.full_messages
      }
    end
  end

end
