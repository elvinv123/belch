class Api::BusinessesController < ApplicationController

    def show
        @business = Business.with_attached_photos.find(params[:id])
        render :show
    end

    def index
        @businesses = category ? Business.search_category(category) : Business.all

        render :index
    end


     def category
        params[:category]
    end
end