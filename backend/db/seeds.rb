puts '--> Admins'
[{email: 'iwuvjhdva@gmail.com', password:'galaxy123'},
 {email: 'kolmanv@gmail.com', password:'galaxy123'},
 {email: 'edoshor@gmail.com', password:'galaxy123'},
 {email: 'yosef.yudilevich@gmail.com', password:'galaxy123'},
 {email: 'amnonbb@gmail.com', password:'galaxy123'},
].each do |e|
  User.find_or_create_by(email: e[:email]) do |u|
    u.email = e[:email]
    u.password = e[:password]
    u.password_confirmation = e[:password]
    u.role = :admin
    u.save!
  end
end

puts '--> Shidur operators'
[{email: 'shidur@kbb1.com', password:'shidurARVUT2014'}].each do |e|
  User.find_or_create_by(email: e[:email]) do |u|
    u.email = e[:email]
    u.password = e[:password]
    u.password_confirmation = e[:password]
    u.role = :operator
    u.save!
  end
end

puts '--> Users'
%w( afula arad arava ashdod ashkelon beer-sheva broadcast eilat eilat1 galilgolan hadera haifa jerusalem
karmiel kfar-saba kiriat-gat mizpe moscow naharia nazareth negus netania nizana raanana rehovot revadim
rishon tel-aviv tveria yokneam zichron).each do |e|
  User.find_or_create_by(username: e) do |u|
    password = "#{e}ARVUT2014"
    u.password = password
    u.password_confirmation = password
    u.email = "#{e}@kbb1.com"
    u.role = :user
    u.save!
  end
end

puts '--> Done'