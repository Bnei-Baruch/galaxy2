class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:login]

  include DeviseTokenAuth::Concerns::User

  attr_accessor :login

  enum role: [:user, :operator, :admin]

  validates_format_of :username, with: /\A[a-zA-Z0-9_\-\.]*\Z/

  after_initialize :set_default_role, :if => :new_record?

  def self.find_for_database_authentication(warden_conditions)
    conditions = warden_conditions.dup
    if login = conditions.delete(:login)
      where(conditions.to_hash).where(["lower(username) = :value OR lower(email) = :value", { :value => login.downcase }]).first
    else
      conditions[:email].downcase! if conditions[:email]
      where(conditions.to_hash).first
    end
  end

  def set_default_role
    self.role ||= :user
  end

  def login=(login)
    binding.pry
    @login = login
  end

  def login
    binding.pry
    @login || self.username || self.email
  end

end
