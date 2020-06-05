class Api::ReviewsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body, :business_id)
  end
end