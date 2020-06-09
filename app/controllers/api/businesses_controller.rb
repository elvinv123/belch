class Api::BusinessesController < ApplicationController

    def show
        @business = Business.with_attached_photos.find(params[:id])
        render :show
    end

    def index
        @businesses = Business.all
        render :index
    end

    # def business_params
    #     params.require(:business).permit(:title, photos: [])
    # end
end