class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permitted_parameters, if: :devise_contoller?

        protected
      # this is only if you need to add more parameters to your register/login and also add to you register.js as well
        def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up, key: [:image])
        end
end
