class User
  include Mongoid::Document
  include Mongoid::Timestamps
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => {email: true, login: false}

  ## Database authenticatable
  field :email, type: String, default: ''
  field :encrypted_password, type: String, default: ''
  field :username, type: String, default: ''
  validates_uniqueness_of :username
  validates_format_of :username, with: /\A[a-zA-Z0-9_\-\.]*\z/

  ## Recoverable
  field :reset_password_token, type: String
  field :reset_password_sent_at, type: Time

  ## Rememberable
  field :remember_created_at, type: Time

  ## Trackable
  field :sign_in_count, type: Integer, default: 0
  field :current_sign_in_at, type: Time
  field :last_sign_in_at, type: Time
  field :current_sign_in_ip, type: String
  field :last_sign_in_ip, type: String

  ## Confirmable
  # field :confirmation_token,   type: String
  # field :confirmed_at,         type: Time
  # field :confirmation_sent_at, type: Time
  # field :unconfirmed_email,    type: String # Only if using reconfirmable

  ## Lockable
  # field :failed_attempts, type: Integer, default: 0 # Only if lock strategy is :failed_attempts
  # field :unlock_token,    type: String # Only if unlock strategy is :email or :both
  # field :locked_at,       type: Time

  field :title, type: String
  field :channel, type: String, default: :large1

  rails_admin do
    list do
      field :username
      field :email
      field :channel
      field :last_sign_in_at
      field :created_at
    end
  end

  def login=(login)
    @login = login
  end

  def login
    @login || self.username || self.email
  end

  # function to handle user's login via email or username
  def self.find_first_by_auth_conditions(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions).where('$or' => [
          {:username => /^#{Regexp.escape(login)}$/i},
          {:email => /^#{Regexp.escape(login.downcase)}$/i}
      ]).first
    else
      if conditions[:username].nil?
        where(conditions).first
      else
        where(username: conditions[:username]).first
      end
    end
  end
end
