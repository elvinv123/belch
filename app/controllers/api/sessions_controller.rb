class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        debugger
        if @user
          debugger
            login!(@user)
            test = logged_in?
            debugger
            render :show
        else
          debugger
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
      debugger
      if current_user
        debugger
        logout!
        render json: { }
      else
        debugger
       render json: ["No user logged in"], status: 404
      end
    end

end

