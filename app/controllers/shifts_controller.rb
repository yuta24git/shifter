class ShiftsController < ApplicationController
  before_action :set_beginning_of_week

  def index
    @dates
  end

  def new
    @shift = Shift.new
    @users_roles = User.includes(:roles)
  end

  def create
    shift_date = params[:shift][:shift_date]
    selected_user_ids = params[:shift][:user_role_combinations]
    @shift = Shift.new(shift_date: shift_date)
    if @shift.save
      selected_user_ids.each do |role_id, user_ids|
        user_ids.each do |user_id|
          user_id[1].each do |user_id|
            UserShift.create(user_id: user_id, role_id: role_id, shift_id: @shift.id)
          end
        end
      end
      redirect_to new_shift_path, notice: '保存しました。'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def shift_data
    user_shift = User.includes(:shift)
    user_role = User.includes(:role)
    render json: { user_shift: user_shift, user_role: user_role }
  end

  private

  def set_beginning_of_week
    Date.beginning_of_week = :sunday
  end
end
