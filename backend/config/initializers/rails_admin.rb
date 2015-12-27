RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
  # config.authenticate_with do
  #   warden.authenticate! scope: :user
  # end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end

  config.main_app_name = ["Galaxy 2", "Admin"]

  config.included_models = ["User"]

  config.model 'User' do
    list do
      include_fields :title, :login, :email, :role, :channel, :last_sign_in_at
    end

    create do
      include_fields :login, :title, :email, :password, :password_confirmation, :role, :channel
    end

    update do
      include_fields :login, :title, :email, :password, :password_confirmation, :role, :channel
    end
  end

end
