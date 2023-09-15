class RolesController < ApplicationController
  def index; end

  def role_select
    user = User.find(params[:selected_user_id])
    roles = user.roles
    role_select = Role.where.not(id: roles.pluck(:id))
    role_select = role_select.map { |role| [role.id, role.role] }
    render json: role_select
  end

  def user_roles
    user = User.find(params[:selected_user_id])
    roles = user.roles
    roles_html = roles.map { |role| "<div class='role-tag'>#{role.role}</div>" }.join(' ')
    render plain: roles_html
  end

  def create
    @user = User.find(params[:user_id])
    role_ids = params[:role_ids]
    role_ids.each do |role_id|
      if UserRoleRelation.create(user_id: @user.id, role_id: role_id)
      else
        flash.now[:alert] = '役割の更新に失敗しました。'
        render :index
        return
      end
    end
    redirect_to roles_path, notice: '役割が更新されました。'
  end

end
