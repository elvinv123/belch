class Api::BusinessesController < ApplicationController

    def show
        @business = Business.find(params[:id])
        render :show
    end

    # def business_params
    #     params.require(:business).permit(:title, photos: [])
    # end
end