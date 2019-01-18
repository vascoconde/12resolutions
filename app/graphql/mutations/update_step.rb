class Mutations::UpdateStep < Mutations::BaseMutation
  null true

  # arguments passed as "args"
  argument :id, ID, required: true
  argument :title, String, required: false
  argument :is_completed, Boolean, required: false

  # return type from the mutation
  #type Types::ResolutionType

  field :step, Types::StepType, null: true
  field :errors, [String], null: false

  def resolve(params = {})
    step = Step.find(params[:id])
    if step.update(params)
      # Successful creation, return the created object with no errors
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
