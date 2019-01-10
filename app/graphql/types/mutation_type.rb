module Types
  class MutationType < Types::BaseObject

  	 field :createResolution, function: Resolvers::CreateResolution.new
  end
end
