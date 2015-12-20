class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, :rememberable, :trackable, :validatable,
         :authentication_keys => [:login]

  include DeviseTokenAuth::Concerns::User

  enum role: [:user, :operator, :admin]

  validates_format_of :login, with: /\A[a-zA-Z0-9_\-\.]*\Z/
  validates :login, :title, :role, :channel, :presence => true

  after_initialize :set_default_role, :if => :new_record?

  def set_default_role
    self.role ||= :user
  end

end
